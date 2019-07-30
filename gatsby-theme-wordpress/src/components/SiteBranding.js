/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { SiteTitle } from "../styles/elements"

const SiteBranding = ({ title }) => {
  return (
    <SiteTitle>
      <Link to="/" rel="home">
        {title}
      </Link>
    </SiteTitle>
  )
}

export default SiteBranding
