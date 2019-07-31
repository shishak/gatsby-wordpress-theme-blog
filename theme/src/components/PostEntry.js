/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"
import PostEntryInfo from "./PostEntryInfo"
import { Article } from "../styles/elements"
import { Button } from "../styles/elements"

const PostEntry = ({ post, location, postsPrefix }) => {
  return (
    <Article>
      <PostEntryMedia
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <div className="content">
        <PostEntryTitle
          location={location}
          post={post}
          postsPrefix={postsPrefix}
        />
        <PostEntryInfo className="entry-info" post={post} />
        <PostEntryContent location={location} post={post} />
        <div className="entry-footer">
          <PostEntryMeta post={post} />
          {location !== "single" && (
            <Button primary className="read-more">
              <Link
                sx={{ color: "#fff" }}
                to={`${postsPrefix}/${post.uri}`}
                aria-label="Read More from this post"
              >
                Read More
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Article>
  )
}

export default PostEntry
