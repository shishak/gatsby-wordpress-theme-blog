import styled from "@emotion/styled"
import { above, below, BoxShadow } from "../utilities"

export const Button = styled.button`
  cursor: pointer;
  background: ${props =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : "#EEE"};
  padding: 20px;
  color: #fff;
  /* ${BoxShadow[0]}; */
  padding: ${props =>
    props.small ? "10px" : props.large ? "20px 30px" : "10px 20px"};
  border: none;
  letter-spacing: 1px;
  border-radius: 3px;
  transition: all 0.4s ease-in-out;
  &:hover {
    ${BoxShadow[1]};
    transform: translateY(-5px);
    background: ${props =>
      props.primary
        ? props.theme.colors.secondary
        : props.secondary
        ? props.theme.colors.primary
        : "#e1e1e1"};
  }
`
