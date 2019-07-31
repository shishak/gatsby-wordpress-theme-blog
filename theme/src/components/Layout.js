/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import theme from "gatsby-plugin-theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"

// import { GlobalStyles } from "../styles"
import { Layout as StyledLayout, Container } from "theme-ui"
// import { Container } from "../styles/Layouts"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  </ThemeProvider>
)

export default Layout
