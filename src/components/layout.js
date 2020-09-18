import React from 'react'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import Sidebar from './sidebar'
import { Col,Container,Row } from 'react-bootstrap'
import Topbar from './topbar'

const Layout = (props) => {
    return (
        <div>
            <Topbar/>
            <Container fluid>
            <Row>
            <Container fluid>
                    <div className={layoutStyles.content}>
                        {props.children}
                    </div>

            </Container>
                  
            </Row> 

            <Row>
                <Footer />
            </Row>
            </Container>
                 

                
        </div>
    )
}

export default Layout