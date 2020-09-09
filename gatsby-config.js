module.exports = {
  siteMetadata: {
    title: 'Allison Kubo Hutchison',
    author: 'Kirk Hutchison'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          { resolve: `gatsby-plugin-sitemap`,
          options:{
            output: `/src/components/sitemap.xml`
            
          }}
        ]
      }
    }
  ]
}