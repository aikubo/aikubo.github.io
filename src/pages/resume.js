import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import resumeStyles from './resume.module.scss'
import Sidebar from '../components/sidebar'

const ResumePage = () => {
    /*function compare(a, b) {
        let comparison = 0;
        if (Number(a.edges.node.frontmatter.order) > Number(b.edges.node.frontmatter.order)) {
            comparison = 1;
        } else if (Number(a.edges.node.frontmatter.order) < Number(b.edges.node.frontmatter.order)) {
            comparison = -1;
        }
        return comparison;
    } */
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
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
    
    //data.sort(compare)
    console.log(data.allMarkdownRemark)

    return (
        <Layout>
            <Sidebar />
            <h1>Resume</h1>
            <hr />
            <h2 className={resumeStyles.subtitle}>Experience</h2>
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
                            <div className={resumeStyles.body} dangerouslySetInnerHTML={{ __html: edge.node.html}}>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ResumePage