import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import researchStyles from './research.module.scss'
import container from '../styles/pageStyle.scss'

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
                        excerpt(format: MARKDOWN)
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

            <ol className={researchStyles.items}>


                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={researchStyles.item}>
                            <Link to={`/research/${edge.node.fields.slug}`}>
                                <h3>
                                    {edge.node.frontmatter.title}
                                </h3>
                                <p>
                                    {edge.node.excerpt}
                                </p>

                                <button>read more</button>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ResearchPage
