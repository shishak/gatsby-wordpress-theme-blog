/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "../styles/elements"

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <div>
      {tags.length > 0 && (
        <span sx={{ color: "muted" }}>
          {tags.length > 1 ? "Tags: " : "Tag: "}
        </span>
      )}
      {tags.map(tag => (
        <Button small sx={{ mr: "15px", mb: "15px", fontSize: "14px", py: 0 }}>
          <Link sx={{ color: "#888" }} to={`/tag/${tag.slug}`} key={tag.id}>
            {tag.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default Tags
