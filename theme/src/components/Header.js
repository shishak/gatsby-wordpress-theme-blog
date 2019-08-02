/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "./Menu"
import SiteBranding from "./SiteBranding"

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
    <header>
      <Container sx={{ maxWidth: "large" }}>
        <SiteBranding title={title} />

        <Menu wordPressUrl={url} />

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
        <Menu wordPressUrl={url} />
      </SlidingPanel>
    </header>
  )
}

export default Header
