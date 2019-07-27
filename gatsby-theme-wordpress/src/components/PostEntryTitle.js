import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location, postsPrefix }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <h2>
          <Link
            to={`${postsPrefix}/${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h2>
      )}
    </>
  )
}

export default PostEntryTitle
