import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"

const Category = ({ data, pageContext }) => {
  const { name, slug, posts } = data.wpgraphql.category
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <h1>Posts for category:{name}</h1>
      {posts.nodes &&
        posts.nodes.map(post => (
          <article key={post.id}>
            <h2>
              <Link
                to={`/${postsPrefix}/${post.uri}`}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </h2>
            <p
              className="content"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </article>
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
              title
            }
            author {
              name
              slug
            }
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`
