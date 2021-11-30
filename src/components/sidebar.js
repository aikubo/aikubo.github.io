import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import sidebarStyles from './sidebar.module.scss'
import Container from 'react-bootstrap/Container'

const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query UOQuery {
        image: file(relativePath: {eq: "images/UOSignature-STK-BAR-BLK.png"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
    return (
        <header>
            <div className={sidebarStyles.logo}>
                <Link to='/'>
                    <Img fluid={data.image.childImageSharp.fluid} alt="UO Logo." />
                </Link>
            </div>
            <div className={sidebarStyles.content}>
                <h1>
                    <Link to='/' className={sidebarStyles.title}>AKH</Link>
                </h1>
                <nav>
                    <ul className={sidebarStyles.navList}>
                        <li>
                            <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/resume'>
                                CV
                            </Link>
                        </li>
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

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Sidebar