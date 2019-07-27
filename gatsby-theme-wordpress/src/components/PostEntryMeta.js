import React from "react"
import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => {
  //   const categories = post.categories.nodes
  return (
    <>
      {post.categories.nodes &&
        post.categories.nodes.map(cat => (
          <Link to={`/category/${cat.slug}`} key={cat.id}>
            {cat.name}
          </Link>
        ))}
    </>
  )
}

export default PostEntryMeta
