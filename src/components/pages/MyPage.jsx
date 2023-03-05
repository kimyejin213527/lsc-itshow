import React from 'react';
import img from '../../img/mypage.png';
import styled from 'styled-components';


function MyPage(props) {
    return (
        <>
            <Profile>
                <Img src={img} />
                <P>아이디 : 알약<br /> 이름 : 김알약 <br /> 나이 : 19<br /> 성별 : 여<br /> 이메일 : djfkd@gmail.com</P>
                <Img />
            </Profile>
            <Boxes>
                <Box><a href='https://www.youtube.com/watch?v=9Ocwo7I0xTU' target='_blank'>초보자도 쉽게 따라하는 8분 요가 스트레칭!</a></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Boxes>

        </>
    )
}
const Profile = styled.div
    `
    width: 1000px;
    display : flex;
    flex-wrap: wrap;
`

const Boxes = styled.div
    ` 
    width: 1000px;
    display : flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 40px;
`

const Img = styled.img
    `
    float : left;
    margin : 50px;
    width: 150px;
    height: 150px;
`
const P = styled.p
    `
    margin : 70px;
    float : left;
    color : #193C00;
`

const Box = styled.div
    `
    cursor: pointer;
    width: 300px;
    height: 200px;
    display : flex;
    background-color : #D8D8D8;
    border-radius : 15px;
    border : 10px solid #D8D8D8;

`



export default MyPage;