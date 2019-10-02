import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Allison, a PhD student living in beautiful Eugene Oregon.</h2>
            <p>Need a rock doc? <Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
} 

export default IndexPage

// this is a JavaScript file that exports a React component