import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const SinglePost = ({ data }) => {
  const {
    content,
    featuredImage,
    title,
    excerpt,
    tags,
    categories,
  } = data.wpgraphql.post

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      {featuredImage && (
        <img src={featuredImage.sourceUrl} alt={featuredImage.altText} />
      )}

      <Styled.h1
        className="page-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        excerpt
        featuredImage {
          sourceUrl
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
