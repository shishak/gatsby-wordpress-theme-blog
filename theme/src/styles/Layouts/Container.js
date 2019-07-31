import styled from "@emotion/styled"
import { above, below } from "../utilities"

export const Container = styled.div`
  max-width: ${props => props.width || "1200px"};
  margin: 0 auto;
  padding: 0 30px !important;
`
export const PostsContainer = styled(Container)`
  ${below.m`
    width: 100%;
    padding: 0;
  `}
`
