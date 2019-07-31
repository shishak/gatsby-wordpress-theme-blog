/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header as StyledHeader } from "../styles/Layouts"
import Menu from "./Menu"
import SiteBranding from "./SiteBranding"
import { Menu as StyledMenu, MobileMenu } from "../styles/Layouts"
import Hamburger from "./Hamburger"
import SlidingPanel from "react-sliding-panel"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState("side")

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
      <Container sx={{ maxWidth: "large" }}>
        <SiteBranding title={title} />
        <StyledMenu>
          <Menu wordPressUrl={url} />
        </StyledMenu>
        <Hamburger
          onClick={() => {
            setType("side")
            setIsOpen(true)
          }}
        />
      </Container>

      <SlidingPanel
        type={type}
        isOpen={isOpen}
        closeFunc={() => setIsOpen(false)}
      >
        <MobileMenu>
          <Menu wordPressUrl={url} />
        </MobileMenu>
      </SlidingPanel>
    </StyledHeader>
  )
}

export default Header
