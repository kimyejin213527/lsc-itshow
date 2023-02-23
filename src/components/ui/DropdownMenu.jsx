import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);

  const logoutClickHandler = () => {
    console.log("logout");
  };

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          테스트
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="/condition">컨디션 테스트</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/body">신체·정서 테스트</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </DropdownContainer>

      <DropdownContainer>
        <DropdownButton onClick={boardHandler} ref={boardRef}>
          정보
        </DropdownButton>
        <Menu isDropped={boardIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="/medicine">상황별 약 추천</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/fitness">체형에 맞는 운동법</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/menses">월경</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/yoga">요가 및 명상</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </DropdownContainer>
      <LinkWrapper href="/mypage">마이페이지</LinkWrapper>
      <Logout onClick={logoutClickHandler}>로그아웃</Logout>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 16px;
  width: 50vw;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;

  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;

const Menu = styled.div`
  background: #558B2F;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 180px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-width: 0;
    border-bottom-color: 558B2F;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & > li:first-of-type {
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  border-bottom: 1px solid white;
  width: 100%;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;

const Logout = styled.div`
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: white;

  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;
