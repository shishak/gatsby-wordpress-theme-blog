/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Categories from "./Categories"
import Tags from "./Tags"

const PostEntryMeta = ({ post }) => {
  return (
    <div className="entry-meta">
      <Categories post={post} />
      <Tags post={post} />
    </div>
  )
}

export default PostEntryMeta
