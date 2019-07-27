import React from "react"
import { Link } from "gatsby"

const WithLink = ({ post, location, children, postsPrefix }) =>
  location === "single" ? (
    children
  ) : (
    <Link to={`/${postsPrefix}/${post.uri}`}>{children}</Link>
  )

const PostEntryMedia = ({ post, location, postsPrefix }) => {
  const img = post.featuredImage

  return (
    <>
      {img && (
        <WithLink location={location} post={post} postsPrefix={postsPrefix}>
          <img src={img.sourceUrl} alt={img.altText} />
        </WithLink>
      )}
    </>
  )
}

export default PostEntryMedia
