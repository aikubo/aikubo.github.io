import React from 'react' 
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import logStyles from './log.module.scss'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Card, Col, Row, Container } from 'react-bootstrap'
import kebabCase from 'lodash/kebabCase'
import container from '../styles/pageStyle.scss'

const LogPage = () => (
    <Layout>
        <container>
    <Row>
        
        <Col md="8">
        <h1 className={logStyles.toptitle}>Log</h1> 
        </Col>
        
        <Col md ="2">
        <Link to='/tags/' className={logStyles.topics}>
                <button size="sm">topics</button>
        </Link>
        </Col>
        

       

    </Row>
    <Row>
    
    <Col>
    <StaticQuery 
        query={logQuery} 
        render={data => {
            return(
                <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <li className={logStyles.post}>
                            <Link to={`/log/${node.fields.slug}`}>

                            </Link>
                            <h1 className={logStyles.title}>
                                    {node.frontmatter.title}
                            </h1>

                            <p className={logStyles.date}>
                                {node.frontmatter.date}
                            </p>

                            <p>
                            <div >
                                    {node.frontmatter.tags.map(tag => (
                                        <Link to={`/tags/${kebabCase(tag)}`}> 
                                            <Badge variant="dark" className={logStyles.tags}>{tag}</Badge>{'  '}
                                        </Link>
                                    ))}
                            </div>
                            </p>

                            <Link to={`/log/${node.fields.slug}`} className="btn btn-outline-secondary btn-sm float right text-uppercase">Read More</Link>




                        </li>
                                
                    ))}
                </div>
        )
    }}
    />
    </Col>
   </Row>
   </container>
 </Layout>
)

const logQuery = graphql`
    query {
        allMarkdownRemark ( sort: {fields: [frontmatter___date], order: DESC}
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
                    excerpt(format: MARKDOWN)
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
`


export default LogPage
