import styled from "@emotion/styled";

import Button from "./Button";

export default styled(Button)`
  background-color: ${props =>
    props.pink ? props.theme.primary : props.theme.secondary};
`;
