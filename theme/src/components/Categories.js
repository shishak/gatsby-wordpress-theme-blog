/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div>
      {categories.length > 0 && (
        <span sx={{ color: 'primary' }}>
          {categories.length > 1 ? 'Categories: ' : 'Category: '}
        </span>
      )}
      {categories.map(cat => (
        <button sx={{ variant: `buttons.primary`, mr: 2, py: 2 }}>
          <Link
            sx={{ color: '#fff' }}
            to={`/category/${cat.slug}`}
            key={cat.id}
            aria-label={`visit category ${cat.name} page`}
          >
            {cat.name}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default Categories
