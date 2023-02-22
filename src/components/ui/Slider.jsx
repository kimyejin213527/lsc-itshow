import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const contents = useRef([
        {src: "http://sanriokorea.co.kr/wp-content/themes/sanrio/images/kuromi.png"}, 
        {src: "http://sanriokorea.co.kr/wp-content/themes/sanrio/images/n_fairilu_v1.png"}, 
        {src: "http://sanriokorea.co.kr/wp-content/themes/sanrio/images/m_cinnamo.png"}]);
    
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });
    const contentSize = useRef(contents.current.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;
        
        if (nextIndex < 0) nextIndex = contentSize.current - 1;
        else if (nextIndex >= contentSize.current) nextIndex = 0;

        setCurrent(nextIndex);
    };

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);
  
    return(
        <Wrapper>
            <Container>
            <Slide>
                <Button onClick={() => { moveSlide(-1); }}> <FontAwesomeIcon icon={faChevronLeft} /></Button>
                <Window>
                <ImgWrapper style={style}>
                    {contents.current.map((img, i) => (
                    <Img
                        key={i}
                        style={{ backgroundImage: `url(${img.src})` }}
                    ></Img>
                    ))}
                </ImgWrapper>
                </Window>
                <Button onClick={() => { moveSlide(1); }}> <FontAwesomeIcon icon={faChevronRight} /></Button>
            </Slide>
            <Position>
                {contents.current.map((x, i) => (
                <Dot
                    key={i}
                    style={{ background: `${(i === current ? 'grey' : 'lightgrey')}` }}
                    ></Dot>
                ))}
            </Position>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;

const Window = styled.div`
    background: white;
    width: 1000px;
    height: 650px;
    overflow: hidden;
`;

const ImgWrapper = styled.div`
    display: flex;  
`;

const Img = styled.div`
    width: 1000px;
    height: 650px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 3.3rem;
    color: gray;
    padding: 0 10px;
`;

const Position = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`;

const Dot = styled.div`
    border-radius: 100%;
    height: 10px;
    width: 10px;
    margin-right: 10px;
`;

export default Slider;