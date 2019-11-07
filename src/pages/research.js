import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import researchStyles from './research.module.scss'

const ResearchPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "research"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            advisor
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
            <h1>Research</h1>
            <hr />
            <ol className={researchStyles.items}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={researchStyles.item}>
                            <Link to={`/research/${edge.node.fields.slug}`}>
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

export default ResearchPage
