import React from "react";
import styled from "styled-components";

function Card(props) {
    const { contents } = props;

    return <StyledCard>{contents || ""}</StyledCard>;
}
    
const StyledCard = styled.div`
    width: 270px;
    height: 380px;
    background-color: #B0B0B0;
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: pre-wrap;
    text-align: center;
`;

export default Card;