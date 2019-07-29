import styled from "@emotion/styled"
import { above, below } from "../utilities"
import { BoxShadow } from "../utilities"

export const Card = styled.div`
  background: #fff;
  ${BoxShadow[0]};
  margin-bottom: 50px;
  .content {
    padding: 30px 50px 50px;
  }
  .entry-media {
  }
`

export const Article = Card.withComponent("article")
