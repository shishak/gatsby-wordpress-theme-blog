import styled from "@emotion/styled"
import { above, below } from "../utilities"
import { BoxShadow } from "../utilities"

export const Card = styled.div`
  background: #fff;
  ${BoxShadow[0]};
  margin-bottom: 50px;
  .entry-title {
    text-transform: uppercase;

    a {
      position: relative;
      &:before {
        content: "";
        width: 100%;
        height: 2px;
        color: ${({ theme }) => theme.colors.primary};
        position: absolute;
        left: 0;
        bottom: 0;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
  .content {
    ${above.m`
     padding: 30px 50px 50px;
    `}
    padding: 20px;
  }
  .entry-info,
  .entry-content {
    a {
      position: relative;
      &:before {
        content: "";
        width: 50%;
        height: 50%;
        position: absolute;
        left: -5px;
        bottom: 0;

        background: ${({ theme }) => theme.colors.primary};
        opacity: 0.3;
        transition: all 0.4s ease-in-out;
      }
      &:hover {
        &:before {
          width: 110%;
        }
      }
    }
  }
  .entry-media {
    width: 100%;
  }
  .read-more {
    margin-top: 20px;
  }
`

export const Article = Card.withComponent("article")
