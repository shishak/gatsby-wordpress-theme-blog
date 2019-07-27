import React from "react"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const User = ({ data, pageContext }) => {
  const { name, posts } = data.wpgraphql.user
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts from ${name}`} />
      <h1>Posts from:{name}</h1>
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

export default User

export const pageQuery = graphql`
  query GET_USER($id: ID!) {
    wpgraphql {
      user(id: $id) {
        name
        slug
        id
        description
        avatar {
          url
        }
        posts(first: 100) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
