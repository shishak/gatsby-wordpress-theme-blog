/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "../styles/elements"

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <div>
      {tags.length > 0 && (
        <span sx={{ color: "primary" }}>
          {tags.length > 1 ? "Tags: " : "Tag: "}
        </span>
      )}
      {tags.map(tag => (
        <Button
          small
          secondary
          sx={{ mr: "15px", mb: "15px", fontSize: "14px", py: 0 }}
        >
          <Link
            aria-label={`visit tag ${tag.name} page`}
            sx={{ color: "#fff" }}
            to={`/tag/${tag.slug}`}
            key={tag.id}
          >
            {tag.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default Tags
