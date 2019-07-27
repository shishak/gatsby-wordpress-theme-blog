import React from "react"

const PostEntryContent = ({ post, location }) => {
  const content = location === "single" ? post.content : post.excerpt
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostEntryContent
