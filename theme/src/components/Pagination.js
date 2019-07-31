/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import {
  Pagination as StyledPagination,
  PageNumbers,
  PrevNextLinks,
} from "../styles/elements"

const Pagination = ({
  pageNumber,
  hasNextPage,
  allPosts,
  itemsPerPage,
  postsPath,
  paginationPrefix,
}) => {
  const isLast = pageNumber === allPosts / itemsPerPage
  return (
    <StyledPagination>
      {pageNumber > 1 && (
        <PrevNextLinks>
          {pageNumber !== 1 ? (
            <Link
              to={
                pageNumber > 2
                  ? `${postsPath}${paginationPrefix}/${pageNumber - 1}`
                  : `/`
              }
            >
              ← Prev
            </Link>
          ) : (
            <>
              <div sx={{ color: "muted" }}> ← Prev</div>
            </>
          )}
        </PrevNextLinks>
      )}
      <PageNumbers>
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
      </PageNumbers>
      {hasNextPage && (
        <PrevNextLinks>
          {!isLast ? (
            <Link to={`${postsPath}/${paginationPrefix}/${pageNumber + 1}`}>
              Next →
            </Link>
          ) : (
            <div sx={{ color: "muted" }}> Next →</div>
          )}
        </PrevNextLinks>
      )}
    </StyledPagination>
  )
}

export default Pagination
