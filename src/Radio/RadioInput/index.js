import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import RadioInput from "./RadioInput";

export default styled(RadioInput)`
  display: ${props =>
    props.direction == "horizontal" ? "inline-block" : "block"};

  position: relative;
  cursor: pointer;
  font-family: ${props => useTheme(props, "fontSans")};
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
    background-color: ${props => useTheme(props, "silver")};

    border-radius: 50%;
  }
  &:hover span {
    background-color: ${props => {
      switch (props.variant) {
        case "secondary":
          return useTheme(props, "secondaryLight");
        case "warning":
          return useTheme(props, "warningLight");
        default:
          return useTheme(props, "primaryLight");
      }
    }};
  }
  & input:checked ~ span {
    background-color: ${props => {
      switch (props.variant) {
        case "secondary":
          return useTheme(props, "secondary");
        case "warning":
          return useTheme(props, "warning");
        default:
          return useTheme(props, "primary");
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
    background: ${props => useTheme(props, "silver")};
    transform: translate(-50%, -50%);
  }
`;
