import React from 'react';
import img from '../../img/mypage.png';
import styled from 'styled-components';


function MyPage(props) {
    return (
        <>

            <Img src={img} />
            <p>아이디 : <br /> 이름 : <br /> 나이 : <br /> 성별 : <br /> 이메일 : </p>
            <Img />

        </>
    )
}


const Img = styled.img
    `
width: 200px;
height: 200px;
`



export default MyPage;