import React from 'react'
import Layout from '../components/layout'
import PropTypes from "prop-types"
import logStyles from '../pages/log.module.scss'
// Components
import { Link, graphql } from "gatsby"

import { Badge, Card, Col, Row, Container } from 'react-bootstrap'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
      <Layout>
    <div>
      <h1 >{tagHeader}</h1>

      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={node.frontmatter.path} className={logStyles.title}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}

    <Row>
        <Col>
        <Link to="/tags">
          <button className={logStyles.topics}>
          All tags
          </button>
          
          
          </Link>
        </Col>
        <Col>
        
        <Link to='/log/' >
            <h2>
                <button className={logStyles.topics}>Log</button>
            </h2>
    </Link>
        </Col>


    </Row>


    </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`