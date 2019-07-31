import styled from "@emotion/styled"

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-right: 50px;
  margin-bottom: 40px;
  .mutted {
    color: #bbb;
  }
`

export const PageNumbers = styled.div`
  ul {
    display: flex;
    justify-content: center;
  }
  a {
    padding: 5px 10px;
    background: #f5f5f5;
    border: none;
    margin-right: 5px;
    &:hover,
    &[aria-current="page"] {
      background-color: #222;
      color: #fff;
    }
  }
`

export const PrevNextLinks = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  a {
    padding-bottom: 5px;
  }
`
