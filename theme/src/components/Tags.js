/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

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
        <button
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
        </button>
      ))}
    </div>
  )
}

export default Tags
