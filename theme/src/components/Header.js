/** @jsx jsx */
import { jsx, Container, Flex, Box, Header as StyledHeader } from "theme-ui"
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
    <StyledHeader sx={{ bg: `white`, borderBottom: `1px solid #ddd` }}>
      <Container sx={{ py: [3, 1] }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <SiteBranding title={title} />
          <div sx={{ display: ["none", "none", "block"] }}>
            <Menu wordPressUrl={url} />
          </div>

          <Hamburger
            onClick={() => {
              setType("side")
              setIsOpen(true)
            }}
          />
        </Flex>
      </Container>

      <SlidingPanel
        type={type}
        isOpen={isOpen}
        closeFunc={() => setIsOpen(false)}
      >
        <Menu wordPressUrl={url} />
      </SlidingPanel>
    </StyledHeader>
  )
}

export default Header
