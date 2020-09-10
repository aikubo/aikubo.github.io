module.exports = {
  siteMetadata: {
    title: 'Allison Kubo Hutchison',
    author: 'Kirk Hutchison and Allison Kubo Hutchison',
    siteUrl: 'http://www.allisonkubo.com/'
  },
  plugins: [ 'gatsby-plugin-react-helmet',
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
          { resolve: `gatsby-plugin-sitemap`,},

          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                'Noto Sans', 'Roboto Slab'
                
              ]
            }
          }
        ]
      }
    }
  ]
}