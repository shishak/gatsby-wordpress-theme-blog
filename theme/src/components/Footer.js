/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from 'theme-ui'

const Footer = () => (
  <StyledFooter sx={{ bg: `secondary`, color: 'white' }}>
    <Container
      sx={{
        maxWidth: `l`,
        textAlign: 'center',
        fontSize: 1,
        a: {
          color: 'muted',
          textDecoration: 'underline',
          '&:hover': {
            color: 'primary',
          },
        },
      }}
    >
      © {new Date().getFullYear()} | Built with{` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </StyledFooter>
)

export default Footer
