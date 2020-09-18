import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import topbarStyles from './topbar.module.scss'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap/'

const Topbar = () => {
    return (
       <Navbar>
           <NavbarBrand href="/">
                AKH           
           </NavbarBrand>
           
            <Nav>
                <Nav.Link href="/resume" className={topbarStyles.navItem} activeClassName={topbarStyles.activeNavItem}> CV</Nav.Link>
                <Nav.Link href="/research" className={topbarStyles.navItem} activeClassName={topbarStyles.activeNavItem}> Research</Nav.Link>
                <Nav.Link href="/log" className={topbarStyles.navItem} activeClassName={topbarStyles.activeNavItem}> Log</Nav.Link>
                <Nav.Link href="/tags" className={topbarStyles.navItem} activeClassName={topbarStyles.activeNavItem}> Topics</Nav.Link>
            </Nav>
       </Navbar>
    )
}

export default Topbar