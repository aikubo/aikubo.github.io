const path = require('path')
const _ = require('lodash')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const logTemplate = path.resolve('./src/templates/log.js')
    const resumeTemplate = path.resolve('./src/templates/resume.js')
    const researchTemplate = path.resolve('./src/templates/research.js')
    const tagTemplate = path.resolve('./src/templates/tags.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            sourcetype
                            tags
                        }
                    }
                }
            }
            tagsGroup: allMarkdownRemark(limit:2000){
                group(field: frontmatter___tags){
                    fieldValue
                }
            }
        }
    `)
    
    let tags=[]
    _.each(res.data.allMarkdownRemark.edges, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags=tags.concat(edge.node.frontmatter.tags)
        }
    })

    tags=_.uniq(tags)

    tags.forEach( tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}`,
            component: tagTemplate,
            context: {
                tag,
            },
        })
    })

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.frontmatter.sourcetype === 'log') {
            createPage({
                component: logTemplate,
                path: `/log/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
            
        }  

        if (edge.node.frontmatter.sourcetype === 'resume-exp') {
            createPage({
                component: resumeTemplate,
                path: `/resume/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }

        if (edge.node.frontmatter.sourcetype === 'research') {
            createPage({
                component: researchTemplate,
                path: `/research/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
        if (edge.node.frontmatter.sourcetype === 'research') {
            createPage({
                component: researchTemplate,
                path: `/research/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })
}