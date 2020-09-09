const path = require('path')

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
    const tagTemplate = path.resolve('./src/templages/tags.js')
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
                        }
                    }
                }
            }
        }
    `)
    
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