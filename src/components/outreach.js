import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import outreachStyles from './outreach.module.scss'

const Outreach = () => {
    const outreach = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resume-out"
                        }
                    }
                }) {

                edges {
                    node {
                        frontmatter {
                            organization
                            date
                            order
                        }
                        html
                    }
                }
            }
        }
    `)
    return (
        <div className={outreachStyles.whole}>
            <h2 className={outreachStyles.subtitle}>Broader Impacts and Selected Outreach</h2>
            <ol className={outreachStyles.items}>
                {outreach.allMarkdownRemark.edges.map((edge) => {
                    return (
                    <li className={outreachStyles.item}>
                        <div className={outreachStyles.head}>
                            <h2>{edge.node.frontmatter.organization}</h2>
                        </div>
                        <div className={outreachStyles.body} dangerouslySetInnerHTML={{ __html: edge.node.html}}>
                        </div>
                    </li>
                    )})}
            </ol>
        </div>
    )

}

export default Outreach