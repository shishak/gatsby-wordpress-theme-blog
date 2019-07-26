/** @jsx jsx */
import { jsx } from "theme-ui"
// import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container, Styled } from "theme-ui"

const Layout = ({ children }) => (
  <StyledLayout>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />

    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </StyledLayout>
)

export default Layout
