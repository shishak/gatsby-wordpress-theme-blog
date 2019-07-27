import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const SinglePost = ({ data }) => {
  const { title, excerpt, tags, categories } = data.wpgraphql.post

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostEntry post={data.wpgraphql.post} location="single" />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        excerpt
        date
        featuredImage {
          sourceUrl
          altText
        }
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
