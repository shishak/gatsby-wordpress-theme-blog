/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location, postsPrefix }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <h2
          sx={{ fontSize: 5, "a:hover": { color: "primary" } }}
          className="entry-title"
        >
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
