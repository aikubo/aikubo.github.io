import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import researchStyles from './research.module.scss'
import { Badge, Card, Col, Row, Container } from 'react-bootstrap'


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
            <h1 className={researchStyles.toptitle}>Research</h1>
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
