import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logStyles from './log.module.scss'

const LogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "log"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
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
            <Sidebar />
            <h1>Log</h1>
            <hr />
            <ol className={logStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={logStyles.post}>
                            <Link to={`/log/${edge.node.fields.slug}`}>
                                <h2>
                                    {edge.node.frontmatter.title}
                                </h2>
                                <p>
                                    {edge.node.frontmatter.date}
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default LogPage
