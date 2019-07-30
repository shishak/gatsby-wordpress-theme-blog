/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container } from "../styles/Layouts"

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
      <Container>
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
