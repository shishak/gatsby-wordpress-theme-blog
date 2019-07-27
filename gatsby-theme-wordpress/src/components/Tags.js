import React from "react"
import { Link } from "gatsby"

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <>
      {tags.length > 0 && <h5>{tags.length > 1 ? "Tags" : "Tag"}</h5>}
      {tags.map(tag => (
        <Link to={`/tag/${tag.slug}`} key={tag.id}>
          {tag.name}
        </Link>
      ))}
    </>
  )
}

export default Tags
