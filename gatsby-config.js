module.exports = {
  siteMetadata: {
    title: `Oliver Day`,
    description: "Oliver Day is a user experience designer and developer",
    author: `Oliver Day`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oliver Day Portfolio`,
        short_name: `O Day`,
        start_url: `/`,
        icon: `src/assets/images/portrait_pic.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-images-zoom`, // Important!
            options: {margin: 48, background: "rgba(0, 0, 0, 0.75)"}
          }
        ],
        remarkPlugins: [require('remark-unwrap-images')],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              linkImagesToOriginal: false // Important!
            }
          },
          `gatsby-remark-images-zoom`,
          `gatsby-remark-figure-caption`,
          "gatsby-remark-copy-relative-linked-files",
          `gatsby-remark-normalize-paths`,
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 2,
              className: "table-of-contents"
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
