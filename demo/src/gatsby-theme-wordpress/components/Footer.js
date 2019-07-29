/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
// import { Container, Footer as StyledFooter } from "theme-ui"

// const Footer = () => (
//   <StyledFooter>
//     <Container >
//       © {new Date().getFullYear()} | Built with{` `}
//       <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
//       <a href="https://www.gatsbyjs.org"> the Gatsby</a>
//     </Container>
//   </StyledFooter>
// )

// export default Footer
import Footer from "gatsby-theme-wordpress/src/components/Footer"

export default props => <Footer sx={{ bg: "primary" }} {...props} />
