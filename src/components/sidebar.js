import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

const Sidebar = () => {
    const data = useStaticQuery(graphql`query { site { siteMetadata { title } } }`)

    return (
        <header className={sidebarStyles.sidebar}>
            <h1>
                <Link className={sidebarStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={sidebarStyles.navList}>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/resume'>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Sidebar