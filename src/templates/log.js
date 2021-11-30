import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import logStyles from '../pages/log.module.scss'
import Badge from 'react-bootstrap/Badge'
import kebabCase from 'lodash/kebabCase'
export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                tags
            }
            html
        }
    }
`

const Log = (props) => {
    return (
        <Layout>
            <logStyles.logcontainer>
                <h1 className={logStyles.postTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
                <p className={logStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
                <div >
                    {props.data.markdownRemark.frontmatter.tags.map(tag => (
                        <Link to={`/tags/${kebabCase(tag)}`}> 
                            <Badge variant="dark" className={logStyles.tags}>{tag}</Badge>{'  '}
                        </Link>
                    ))}
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            

            </logStyles.logcontainer>
        </Layout>
    )
}

export default Log

