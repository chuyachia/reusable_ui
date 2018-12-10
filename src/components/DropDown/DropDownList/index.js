import styled from "@emotion/styled";

import DropDownList from "./DropDownList";

export default styled(DropDownList)`
    padding:0;
    margin:0;
    border-width: ${props => props.theme.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.lightGrey};
    box-shadow: ${props=>props.theme.boxShadow}
`;