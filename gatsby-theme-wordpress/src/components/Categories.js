import React from "react"
import { Link } from "gatsby"

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <>
      {categories.length > 0 && (
        <h5>{categories.length > 1 ? "Categories" : "Category"}</h5>
      )}
      {categories.map(cat => (
        <Link to={`/category/${cat.slug}`} key={cat.id}>
          {cat.name}
        </Link>
      ))}
    </>
  )
}

export default Categories
