import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = () => {
    const data = useStaticQuery(`
    query MyQuery {
        image: file(relativePath: {eq: "images/allie.JPG"}) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }`)

    return (
        <Layout>
            <Img fluid={data.image.childImageSharp.fluid}>
            </Img>
            <h1>Hello.</h1>
            <h2>I'm Allison, a PhD student living in beautiful Eugene Oregon.</h2>
            <p>Need a rock doc? <Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
} 

export default IndexPage

// this is a JavaScript file that exports a React component