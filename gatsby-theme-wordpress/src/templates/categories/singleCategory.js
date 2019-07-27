import React from "react"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const Category = ({ data, pageContext }) => {
  const { name, posts } = data.wpgraphql.category
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} category`} />
      <h1>Posts for category:{name}</h1>
      {posts.nodes &&
        posts.nodes.map(post => (
          <PostEntry
            key={post.id}
            location="archive"
            post={post}
            postsPrefix={postsPrefix}
          />
        ))}
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wpgraphql {
      category(id: $id) {
        name
        slug
        posts(first: 100) {
          nodes {
            title
            uri
            date
            excerpt
            featuredImage {
              altText
              sourceUrl
            }
            author {
              name
              slug
            }
            categories {
              nodes {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  }
`
