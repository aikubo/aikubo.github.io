import React from 'react' 
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logStyles from './log.module.scss'
import Tags from "../components/tags"

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
                            tags
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
            <h1 className={logStyles.toptitle}>Log</h1>
            <hr />
            <ol className={logStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    const title = edge.node.frontmatter.title || edge.node.fields.slug
                    const tags = edge.node.frontmatter.tags
                    return (
                      <article key={edge.node.fields.slug}>
                        <header>
                          <h3
                            style={{
                              marginBottom: '20px',
                            }}
                          >
                            <Link style={{ boxShadow: `none` }} to={edge.node.fields.slug}>
                              {title}
                            </Link>
                          </h3>
                          <small>{edge.node.frontmatter.date}</small>
                          {tags && tags.length > 0 ? ` - ` : ``}
                          <Tags>{tags}</Tags>
                        </header>
                        {/* <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </section> */}
                      </article>
                    )
                 })}
                          
            </ol>
        </Layout>
    )
}

export default LogPage
