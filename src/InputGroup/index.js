import styled from "@emotion/styled";
import InputGroup from "./InputGroup";
import useTheme from "../useTheme";

export default styled(InputGroup)`
  & button:first-of-type,
  & input:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & button:last-of-type,
  & input:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & button:not(:first-of-type):not(:last-of-type),
  & input:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }
`;
