import React from 'react';
import Slider from '../ui/Slider';
import Card from '../ui/Card';
import styled from 'styled-components';

function Main(props) {
    return (
        <Wrapper>
            <Slider/>
            <Title>About Condition</Title>
            <Content>
                컨디션(condition)이란,
                <br/>사람의 현재 신체적, 정신적 상태를 일컫는 단어입니다.
                <br/>이 컨디션이 콩글리쉬였다는 사실을 알고 계셨나요?
                <br/>
                <br/>외국에서 컨디션은 근육, 몸매와 같이 눈에 보이는 상태, 환경, 조건을 뜻하며
                <br/>한국에서와는 살짝 다른 맥락으로 쓰이고 있습니다.
            </Content>
            <Title>~~~에서는...</Title>
            <CardWrapper>
                <Card contents={`자신의 컨디션을\n자가진단해보며\n현재 나의 상태를\n알아볼 수 있습니다.`}/>
                <Card contents={`상황에 따라\n세분화 된\n컨디션 관리에 대한 정보를\n알아볼 수 있습니다.`}/>
                <Card contents={`신체적, 정신적 상태 중\n하나의 상태에\n집중하여\n알아볼 수 있습니다.`}/>
            </CardWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 10px;
`

const Content = styled.div`
    font-size: 20px;
    text-align: center;
`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin-bottom: 240px;
`

export default Main;