import React from "react"
import { Link } from "gatsby"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
// import PostEntryMeta from "./PostEntryMeta"

const PostEntry = ({ post, location, postsPrefix }) => {
  return (
    <article>
      <PostEntryMedia location={location} post={post} />
      <PostEntryTitle
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <Date date={post.date} />
      <PostEntryContent location={location} post={post} />
      {/* <EntryFooter>
        <PostEntryMeta location={location} post={post} />
        {location !== "single" && (
          <Link to={`posts${frontmatter.slug}`}>
            <ReadMore>Read More</ReadMore>
          </Link>
        )}
      </EntryFooter> */}
    </article>
  )
}

export default PostEntry
