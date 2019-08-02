/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const Author = ({ post }) => {
  const { name, slug } = post.author
  return (
    <>
      <Link
        sx={{ variant: "links.decorated" }}
        aria-label={`visit ${name} page`}
        to={`/author/${slug}`}
      >
        {name}
      </Link>
    </>
  )
}

export default Author
