import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import resumeStyles from './resume.module.scss'
import Sidebar from '../components/sidebar'

const ResumePage = () => {
    const expr = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resume-exp"
                        }
                    }
                }) {

                edges {
                    node {
                        frontmatter {
                            organization
                            location
                            role
                            start
                            finish
                            order
                        }
                        fields {
                            slug
                        }
                        html
                    }
                }
            }
        }
    `)
    
    const award = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resume-awards"
                        }
                    }
                }) {

                edges {
                    node {
                        frontmatter {
                            organization
                            role
                            date
                            order
                            amount
                        }
                    }
                }
            }
        }
    `) 

    return (
        <Layout>
            <Sidebar />
            <h1>Resume</h1>
            <hr />
            <h2 className={resumeStyles.subtitle}>Research Experience</h2>
            <ol className={resumeStyles.items}>
                {expr.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={resumeStyles.item}>
                            <div className={resumeStyles.head}>
                                <h2>
                                    {edge.node.frontmatter.organization}
                                </h2>
                                <h3>
                                    {edge.node.frontmatter.role}
                                </h3>
                                <p>
                                    {edge.node.frontmatter.start} to {edge.node.frontmatter.finish}
                                </p>
                            </div>
                            <div className={resumeStyles.body} dangerouslySetInnerHTML={{ __html: edge.node.html}}>
                            </div>
                        </li>
                    )
                })}
            </ol>
            <h2 className={resumeStyles.subtitle}>Awards and Grants</h2>
            <ol className={resumeStyles.items}>
                {award.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={resumeStyles.item}>
                            <div className={resumeStyles.head}>
                            </div>
                        </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default ResumePage