import styled from "@emotion/styled"
import { below } from "../utilities"

export const Menu = styled.nav`
  ${below.m`
display: none;
`}
  a {
    text-decoration: none;
  }
  .menu-item,
  a {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    > .menu-item {
      padding-left: 30px;
      font-size: 2rem;
    }
    .sub-menu {
      opacity: 0;
      visibility: hidden;
      transform: translateY(5px);
      transition: all 0.4s ease-in-out;
      position: absolute;
      left: 0;
      top: 50px;
      padding: 0;
      background: #fff;
      border: 1px solid ${({ theme }) => theme.colors.muted};

      > .menu-item {
        width: auto;
        border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
        padding: 5px 10px;
        width: 180px;
        font-size: 1.4rem;

        &:last-child {
          border: none;
        }
      }
    }
    .has-subMenu.menu-item {
      position: relative;
      &:hover {
        > .sub-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }
  }
`
