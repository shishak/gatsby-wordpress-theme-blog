// module.exports = ({
//   wordPressUrl = `http://alexandraspalato.com/webstantly/`,
//   postsPath = `blog`,
//   paginationPrefix = `/page`,
//   postsPrefix = ``,
//   postsPerPage = 10,
//   colors = {
//     primary: "tomato",
//     secondary: "olive",
//   },
// }) => ({
//   siteMetadata: {
//     title: "Gatsby Theme Jam Example Submission",
//   },
//   plugins: [
//     `gatsby-plugin-theme-ui`,
//     {
//       resolve: `gatsby-source-graphql`,
//       options: {
//         // This type will contain remote schema Query type
//         typeName: `WPGraphQL`,
//         // This is field under which it's accessible
//         fieldName: `wpgraphql`,
//         // Url to query from
//         url: `${wordPressUrl}/graphql`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-web-font-loader`,
//       options: {
//         google: {
//           families: ["Playfair Display", "Montserrat", "Oswald"],
//         },
//       },
//     },
//   ],
// })

module.exports = options => {
  const {
    wordPressUrl = `http://alexandraspalato.com/webstantly/`,
    postsPath = `blog`,
    paginationPrefix = `/page`,
    postsPrefix = ``,
    postsPerPage = 10,
    colors = {
      primary: "tomato",
      secondary: "olive",
    },
  } = options

  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/gatsbyjs`,
        },
        {
          name: `github`,
          url: `https://github.com/gatsbyjs`,
        },
      ],
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
  }
}
