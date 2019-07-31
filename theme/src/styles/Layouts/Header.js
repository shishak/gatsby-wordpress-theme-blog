import styled from "@emotion/styled"
import { above, below } from "../utilities"

export const Header = styled.header`
  background: #fff;
  border-bottom: 1px solid #ddd;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
  ${below.m`padding: 15px 0`}
  .fa-bars {
    ${above.m`
    display: none
    `};
  }
`
