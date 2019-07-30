/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Date from "./Date"
import Author from "./Author"

const PostEntryInfo = ({ post }) => {
  return (
    <div className="entry-info" sx={{ fontSize: 0 }}>
      <span sx={{ color: "muted" }}>Posted on:</span> <Date post={post} /> by{" "}
      <Author post={post} />
    </div>
  )
}

export default PostEntryInfo
