import React from "react"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const Tag = ({ data, pageContext }) => {
  const { name, posts } = data.wpgraphql.tag
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} tag`} />
      <h1>Posts for tag:{name}</h1>
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

export default Tag

export const pageQuery = graphql`
  query GET_TAG($id: ID!) {
    wpgraphql {
      tag(id: $id) {
        name
        slug
        id
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
              avatar {
                url
              }
            }
            categories {
              nodes {
                slug
                name
                id
              }
            }
            tags {
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
