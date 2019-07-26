module.exports = ({
  wordPressUrl = `http://alexandraspalato.com/webstantly/`,
  postsPath = ``,
  paginationPrefix = `/page`,
  postsPrefix = `blog`,
  postsPerPage = 10,
  colors = {
    primary: "tomato",
    secondary: "olive",
  },
}) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${wordPressUrl}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Playfair Display", "Montserrat", "Oswald"],
        },
      },
    },
  ],
})
