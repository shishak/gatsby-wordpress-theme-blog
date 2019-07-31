/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "../styles/elements/Buttons"

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div>
      {categories.length > 0 && (
        <span sx={{ color: "primary" }}>
          {categories.length > 1 ? "Categories: " : "Category: "}
        </span>
      )}
      {categories.map(cat => (
        <Button
          small
          secondary
          sx={{ mr: "15px", mb: "15px", fontSize: "14px", py: 0 }}
        >
          <Link
            sx={{ color: "#fff" }}
            to={`/category/${cat.slug}`}
            key={cat.id}
          >
            {cat.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default Categories
