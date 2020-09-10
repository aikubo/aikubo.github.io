import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import resumeStyles from './resume.module.scss'
import Awards from '../components/awards'
import Outreach from '../components/outreach'
import Education from '../components/education'

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
                            about
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            
            <h1 className={resumeStyles.toptitle}>CV</h1>
            <hr />
            <Education />
            <h2 className={resumeStyles.subtitle}>Research Experience</h2>
            <ol className={resumeStyles.items}>
                {expr.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <Link to={`/resume/${edge.node.fields.slug}`} className={resumeStyles.item}>
                            <li>
                            <div className={resumeStyles.head}>
                                <h2>
                                    {edge.node.frontmatter.organization} - {edge.node.frontmatter.role}
                                </h2>
                                <p>
                                    {edge.node.frontmatter.start} to {edge.node.frontmatter.finish}
                                </p>
                            </div>
                            <div className={resumeStyles.body}>
                                <p>{edge.node.frontmatter.about}</p>
                            </div>
                        </li>
                        </Link>
                    )
                })}
            </ol>
            <Awards />
            <Outreach />

        </Layout>
    )
}

export default ResumePage