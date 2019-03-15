import styled from "@emotion/styled";
import InputGroup from "./InputGroup";
import useTheme from "../useTheme";

export default styled(InputGroup)`
  & button:first-child,
  & input:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & button:last-child,
  & input:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & button:not(:first-child):not(:last-child),
  & input:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;
