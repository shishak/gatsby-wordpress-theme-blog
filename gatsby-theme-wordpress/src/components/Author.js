import React from "react"
import { Link } from "gatsby"

const Author = ({ post }) => {
  const { name, slug } = post.author
  return (
    <>
      <Link to={`/author/${slug}`}>{name}</Link>
    </>
  )
}

export default Author
