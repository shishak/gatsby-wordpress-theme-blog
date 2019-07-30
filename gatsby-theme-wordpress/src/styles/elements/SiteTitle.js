import styled from "@emotion/styled"
import { above, below } from "../utilities"

export const SiteTitle = styled.h1`
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  font-size: 2.4rem;
  font-weight: 300;
  word-break: normal;
  ${above.m`
  font-size: 3.6rem;
  `};
`
