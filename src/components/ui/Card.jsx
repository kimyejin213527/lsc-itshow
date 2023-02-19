import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 270px;
    height: 380px;
    background-color: #B0B0B0;
    border-radius: 5px;
`;

function Card() {
    const { contents } = props;

    return <StyledCard>{contents || ""}</StyledCard>;
}

export default Card;