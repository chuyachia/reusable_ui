import styled from "@emotion/styled";
import InputValidator from "./InputValidator";
import useTheme from "../useTheme";

export default styled(InputValidator)`
  display: ${props => {
    return props.children.props.inline ? "inline-block" : "block";
  }};
  font-family: ${props => useTheme(props, "fontSans")};
  font-size: ${props => useTheme(props, "footnoteFontSize")};
  vertical-align: top;
  & span {
    color: ${props => useTheme(props, "primary")};
  }
  & .warning {
    color: ${props => useTheme(props, "warning")};
  }
`;
