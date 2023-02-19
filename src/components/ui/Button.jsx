import React from "react";
import styled from "styled-components";

const styledButton = styled.button`
    width: 250px;
    height: 80px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || ""}</StyledButton>;
}

export default Button;