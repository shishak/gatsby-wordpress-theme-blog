/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { Global, css } from "@emotion/core"
import theme from "gatsby-plugin-theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"

import { Layout as StyledLayout, Container } from "theme-ui"
// import { Container } from "../styles/Layouts"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: "62.5%",
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          fontSize: `18px`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
          color: `text`,
          backgroundColor: `background`,
          fontFamily: `body`,
          lineHeight: `body`,
          fontWeight: `body`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `background`,
        },
        "#___gatsby": {
          position: `relative`,
          overflowX: `hidden`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          textDecoration: `none`,
          outline: `none`,
          "&:focus": {
            boxShadow: `outline`,
          },
        },
        nav: {
          li: {
            listStyleType: "none",
          },
        },
        button: {
          transition: `all 0.3s ease-in-out`,
          "&:hover, &:focus": {
            transform: `translateY(-1px)`,
          },
        },
      })}
    />
    <StyledLayout sx={{ bg: `background` }}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  </ThemeProvider>
)

export default Layout
