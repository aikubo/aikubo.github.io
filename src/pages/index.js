import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import indexStyles from './index.module.scss'


import Helmet from 'react-helmet';




const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        image: file(relativePath: {eq: "images/allieMSHgray.JPG"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }`)

    return (
  
        <Layout>   
    
            <p className={indexStyles.myname}> Allison Kubo Hutchison</p>
            <div className={indexStyles.container}>
                <div className={indexStyles.picture}><Img fluid={data.image.childImageSharp.fluid} alt="Hello, I am Allison." /></div>
                <div className={indexStyles.content}>
                  <p className={indexStyles.tagline}> <i>I use computational models to explore fluids produced by volcanoes. </i> </p>
                  <p>Ph.D. Candidate at the University of Oregon</p>
                  <p>Advised by <a href="https://pages.uoregon.edu/jdufek/" target="_blank" rel="noopener noreferrer">Joe Dufek</a> and <a href="https://pages.uoregon.edu/leif/" target="_blank" rel="noopener noreferrer">Leif Karlstrom</a></p>
                  <p className={indexStyles.github}>Check out my work on <a href="https://github.com/aikubo" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                  
                  <p className={indexStyles.email}><a href="mailto:akubo@uoregon.edu">akubo@uoregon.edu </a> </p>
                
                                
                  
                  
                </div>
            </div>
        </Layout>
    )
} 

export default IndexPage

