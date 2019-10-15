import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        image: file(relativePath: {eq: "images/allie.JPG"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }`)

    return (
        <Layout>
            <div className={indexStyles.container}>
                <div className={indexStyles.picture}><Img fluid={data.image.childImageSharp.fluid} alt="A picture of Allison." /></div>
                <div className={indexStyles.content}><p>I use computational models to explore volcanic flows.</p></div>
            </div>
        </Layout>
    )
} 

export default IndexPage

// this is a JavaScript file that exports a React component