import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import EducationStyles from './education.module.scss'

const Education = () => {
    const Education = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: {
                    frontmatter: {
                        sourcetype: {
                            eq: "resumeEducation"
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
                        html
                    }
                }
            }
        }
    `)
    return (
        <div>
            <h2 className={EducationStyles.subtitle}>Education</h2>
            <ol className={EducationStyles.items}>
                {Education.allMarkdownRemark.edges.map((edge) => {
                    return (
                    <li className={EducationStyles.item}>
                        <div dangerouslySetInnerHTML={{__html: edge.node.html}}>
                           
                        </div>
                    </li>
                    )})}
            </ol>
        </div>
    )

}
//{edge.node.frontmatter.organization} {edge.node.frontmatter.role}, {edge.node.frontmatter.date} {edge.node.frontmatter.order} {edge.node.frontmatter.amount}

export default Education