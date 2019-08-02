/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const SiteBranding = ({ title }) => {
  return (
    <h1>
      <Link to="/" rel="home">
        {title}
      </Link>
    </h1>
  )
}

export default SiteBranding
