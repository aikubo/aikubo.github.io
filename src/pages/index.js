import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import indexStyles from './index.module.scss'
import Header from '../components/header'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        image: file(relativePath: {eq: "images/allie.JPG"}) {
          childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }`)

    return (
        <Layout>
            <Header />
            <div className={indexStyles.container}>
                <Img className={indexStyles.picture} fixed={data.image.childImageSharp.fixed} alt="A picture of Allison." />
                <p>I use computational models to explore volcanic flows.</p>
            </div>
        </Layout>
    )
} 

export default IndexPage

// this is a JavaScript file that exports a React component