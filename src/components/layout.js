import React from 'react'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import Sidebar from './sidebar'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}> 
            <Sidebar />           
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout