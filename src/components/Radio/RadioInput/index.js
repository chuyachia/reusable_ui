import styled from "@emotion/styled";

import RadioInput from "./RadioInput";

export default styled(RadioInput)`
  display: ${props =>
    props.direction == "horizontal" ? "inline-block" : "block"};

  position: relative;
  cursor: pointer;
  font-family: ${props => props.theme.fontSans};
  padding-left: 1.5em;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: ${props => props.theme.silver};

    border-radius: 50%;
  }
  &:hover span {
    background-color: ${props => {
      switch (props.variant) {
        case "secondary":
          return props.theme.secondaryLight;
        case "warning":
          return props.theme.warningLight;
        default:
          return props.theme.primaryLight;
      }
    }};
  }
  & input:checked ~ span {
    background-color: ${props => {
      switch (props.variant) {
        case "secondary":
          return props.theme.secondary;
        case "warning":
          return props.theme.warning;
        default:
          return props.theme.primary;
      }
    }};
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  & input:checked ~ span:after {
    display: block;
  }
  & span:after {
    top: 50%;
    left: 50%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: ${props => props.theme.silver};
    transform: translate(-50%, -50%);
  }
`;
