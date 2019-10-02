import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutMe = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>My name is Allison and I love rocks. I also love volcanos. Ramen too.</p>
            <p>Want to get in touch? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutMe