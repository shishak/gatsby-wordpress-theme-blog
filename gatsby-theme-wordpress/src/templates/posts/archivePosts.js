import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import Pagination from "../../components/Pagination"

const Blog = ({ data, pageContext }) => {
  const posts = data.wpgraphql.posts.nodes
  const {
    pageNumber,
    hasNextPage,
    postsPerPage,
    allPosts,
    options: { postsPrefix, postsPath, paginationPrefix },
  } = pageContext
  return (
    <Layout>
      {data &&
        data.wpgraphql &&
        posts.map(post => (
          <article key={post.id}>
            {post.featuredImage && (
              <img
                src={post.featuredImage.sourceUrl}
                alt={post.featuredImage.altText}
              />
            )}

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
      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={postsPerPage}
        postsPath={postsPath}
        paginationPrefix={paginationPrefix}
      />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID], $postsPerPage: Int!) {
    wpgraphql {
      posts(first: $postsPerPage, where: { in: $ids }) {
        nodes {
          id
          uri
          title
          excerpt
          date
          featuredImage {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`
