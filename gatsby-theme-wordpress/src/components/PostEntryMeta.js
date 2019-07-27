import React from "react"
import Categories from "./Categories"
import Tags from "./Tags"
import Author from "./Author"

const PostEntryMeta = ({ post }) => {
  return (
    <>
      <Categories post={post} />
      <Tags post={post} />
      <Author post={post} />
    </>
  )
}

export default PostEntryMeta
