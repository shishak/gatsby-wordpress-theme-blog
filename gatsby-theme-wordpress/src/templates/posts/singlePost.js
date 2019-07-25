import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const SinglePost = ({ data }) => {
  const {
    content,
    featuredImage,
    title,
    tags,
    categories,
  } = data.wpgraphql.post

  return (
    <Layout>
      {featuredImage && (
        <img src={featuredImage.sourceUrl} alt={featuredImage.altText} />
      )}

      <h1 className="page-title" dangerouslySetInnerHTML={{ __html: title }} />

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
