import React from "react"
import { Link } from "gatsby"

const Author = ({ post }) => {
  const { name, avatar, slug } = post.author
  return (
    <>
      <h5>
        Author: <Link to={`/author/${slug}`}>{name}</Link>
      </h5>
      <img src={avatar.url} alt="" />
    </>
  )
}

export default Author
