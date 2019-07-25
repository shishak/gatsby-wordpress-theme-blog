module.exports = ({
  wordPressUrl = `http://alexandraspalato.com/webstantly/`,
  blogPage = ``,
  paginationPrefix = `/page`,
  postsPrefix = `blog`,
  postsPerPage = 10,
}) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
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
  ],
})
