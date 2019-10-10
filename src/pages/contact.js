import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'


const ContactPage = () => {
    return (
        <Layout>
            <Header />
            <h1>Get in touch!</h1>
            <p>akubo@uoregon.edu</p>
            <p><a href="https://github.com/aikubo" target="_blank" rel="noopener noreferrer">Check out my Github!</a>
            </p>
        </Layout>
    )
}

export default ContactPage