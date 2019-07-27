import React from "react"
import { Link } from "gatsby"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"

const PostEntry = ({ post, location, postsPrefix }) => {
  return (
    <article>
      <PostEntryMedia
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <PostEntryTitle
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <Date date={post.date} />
      <PostEntryContent location={location} post={post} />
      <div className="EntryFooter">
        <PostEntryMeta post={post} />
        {location !== "single" && (
          <Link to={`${postsPrefix}/${post.uri}`}>Read More</Link>
        )}
      </div>
    </article>
  )
}

export default PostEntry
