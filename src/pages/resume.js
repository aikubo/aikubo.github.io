import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import resumeStyles from './resume.module.scss'

const ResumePage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resume"
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

    return (
        <Layout>
            <h1>Resume</h1>
            <hr />
            <ol className={resumeStyles.items}>
                {data.allMarkdownRemark.edges.map((edge) => {
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
                            <div dangerouslySetInnerHTML={{ __html: edge.node.html}}>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ResumePage