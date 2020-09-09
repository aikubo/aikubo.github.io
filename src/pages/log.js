import React from 'react' 
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import logStyles from './log.module.scss'
import { Link } from 'gatsby'
import { slugify } from "../../util/utilfunc"
//import logCard from '../components/logCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import kebabCase from 'lodash/kebabCase'

const LogPage = () => (
    <Layout>
        <h1 className={logStyles.toptitle}>Log</h1> <Link to='/tags/' className={logStyles.topics}>Topics</Link>
    <Row>
    
    <Col>
    <StaticQuery 
        query={logQuery} 
        render={data => {
            return(
                <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        
                            <Card>  
                                
                                <Link to={`/log/${node.fields.slug}`}>
                                    <Card.Title className={logStyles.title}> {node.frontmatter.title} </Card.Title>
                                </Link>

                                <Card.Subtitle className={logStyles.date}>

                                    {node.frontmatter.date}
                                    <div >
                                    {node.frontmatter.tags.map(tag => (
                                        <Link to={`/tags/${kebabCase(tag)}`}> 
                                            <Badge variant="dark" className={logStyles.tags}>{tag}</Badge>{'  '}
                                        </Link>
                                    ))}
                                    </div>
                                    </Card.Subtitle>
                                
                                <Card.Body>

                                    {node.excerpt}
                                
                                </Card.Body>

                                <Link to={`/log/${node.fields.slug}`} className="btn btn-outline-secondary btn-sm float right text-uppercase">Read More</Link>

                            </Card>
                            
                        //</Container>
                    ))}
                </div>
        )
    }}
    />
    </Col>
   </Row>
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
