import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import awardStyles from './awards.module.scss'

const Awards = () => {
    const award = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resumeAwards"
                        }
                    }
                }) {

                edges {
                    node {
                        frontmatter {
                            organization
                            role
                            date
                            order
                            amount
                        }
                    }
                }
            }
        }
    `)
    return (
        <div>
            <h2 className={awardStyles.subtitle}>Awards and Grants</h2>
            <ol className={awardStyles.items}>
                {award.allMarkdownRemark.edges.map((edge) => {
                    return (
                    <li className={awardStyles.item}>
                        <div className={awardStyles.head}>
                            {edge.node.frontmatter.organization} {edge.node.frontmatter.role}, {edge.node.frontmatter.date} {edge.node.frontmatter.amount}
                        </div>
                    </li>
                    )})}
            </ol>
        </div>
    )

}

export default Awards