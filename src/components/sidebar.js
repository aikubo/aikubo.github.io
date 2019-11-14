import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import sidebarStyles from './sidebar.module.scss'

const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query UOQuery {
        image: file(relativePath: {eq: "images/uo.png"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
    return (
        <header className={sidebarStyles.sidebar}>
                        <Img fluid={data.image.childImageSharp.fluid} alt="UO Logo." />

            <h1>
                <Link className={sidebarStyles.title}>
                    Allison Kubo
                </Link>
            </h1>
            <nav>
                <ul className={sidebarStyles.navList}>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/research'>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/log'>
                            Log
                        </Link>
                    </li>
                    <li>
                        <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/resume'>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Sidebar