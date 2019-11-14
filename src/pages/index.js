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
                <div className={indexStyles.content}>
                  <p className={indexStyles.tagline}>I use computational models to explore volcanic flows.</p>
                  <p>PhD Student at the University of Oregon</p>
                  <p>Volcanology 103</p>
                  <p>akubo@uoregon.edu</p>
                  <p>Advised by <a href="https://pages.uoregon.edu/jdufek/" target="_blank" rel="noopener noreferrer">Joe Dufek</a> and <a href="https://pages.uoregon.edu/leif/" target="_blank" rel="noopener noreferrer">Leif Karlstrom</a></p>
                  <p className={indexStyles.github}>Check out my work on <a href="https://github.com/aikubo" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                </div>
            </div>
        </Layout>
    )
} 

export default IndexPage

