/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container } from "../styles/Layouts"

import { Header as StyledHeader } from "../styles/Layouts"
import Menu from "./Menu"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings

  return (
    <StyledHeader>
      <Container>
        <h1 sx={{ textTransform: "uppercase", letterSpacing: 3 }}>
          <Link sx={{ borderColor: "primary" }} to="/" rel="home">
            {title}
          </Link>
        </h1>

        <Menu wordPressUrl={url} />
      </Container>
    </StyledHeader>
  )
}

export default Header
