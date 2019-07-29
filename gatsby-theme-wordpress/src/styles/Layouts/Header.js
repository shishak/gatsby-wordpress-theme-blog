import styled from "@emotion/styled"
import { above, below } from "../utilities"

export const Header = styled.header`
  background: #fff;
  border-bottom: 1px solid #ddd;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    h1 {
      margin: 0;
      font-size: 3rem;
    }
  }
`
