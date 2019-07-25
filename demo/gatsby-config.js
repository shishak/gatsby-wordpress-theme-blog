/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `Gatsby theme WordPress Starter Demo`,
    description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
    author: `@alexadark`,
    wordPressUrl: config.wordpressUrl,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wordpress`,
      options: {
        wordPressUrl: config.wordPressUrl,
        postsPrefix: `posts`,
        blogPage: `blog`,
        paginationPrefix: ``,
        postsPerPage: 5,
      },
    },
  ],
}
