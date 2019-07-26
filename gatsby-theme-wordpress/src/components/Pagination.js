import React from "react"
import { Link } from "gatsby"

const Pagination = ({
  pageNumber,
  hasNextPage,
  allPosts,
  itemsPerPage,
  postsPath,
  paginationPrefix,
}) => (
  <div className="pagination">
    {pageNumber > 1 && (
      <button>
        <Link
          to={
            pageNumber > 2
              ? `${postsPath}${paginationPrefix}/${pageNumber - 1}`
              : `/`
          }
        >
          Previous Posts
        </Link>
      </button>
    )}

    {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
      <Link
        key={`pagination-number${i + 1}`}
        to={
          i === 0
            ? `${postsPath}/`
            : `${postsPath}/${paginationPrefix}/${i + 1}`
        }
      >
        {i + 1}
      </Link>
    ))}
    {hasNextPage && (
      <button>
        <Link to={`${postsPath}/${paginationPrefix}/${pageNumber + 1}`}>
          Next Posts
        </Link>
      </button>
    )}
  </div>
)

export default Pagination
