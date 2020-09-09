import React from 'react' 
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import logStyles from './log.module.scss'
import { Link } from 'gatsby'
import Tags from "../components/tags"
//import logCard from '../components/logCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Button } from 'react-bootstrap'

const LogPage = () => (
    <Layout>
        <h1 className={logStyles.toptitle}>Log</h1>
    <StaticQuery 
        query={logQuery} 
        render={data => {
            return(
                <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        
                        <Container>
                            <Card>  
                                <Card.Header>{node.frontmatter.date}</Card.Header>
                                <Card.Title> {node.frontmatter.title} </Card.Title>
                                <Tags>{node.frontmatter.tags}</Tags>
                                <Link to={node.frontmatter.path} className="btn btn-outline-secondary btn-sm">Read More</Link>
                            </Card>
                            
                        </Container>
                    ))}
                </div>
        )
    }}
    />
   
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
