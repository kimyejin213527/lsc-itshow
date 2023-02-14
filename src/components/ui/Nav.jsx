
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    border: solid 2px;
`

const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nav = () => {
  return (
    <Wrapper>
      <Menu>
          로고
      </Menu>
      <Menu>
          테스트
      </Menu>
      <Menu>
          정보
      </Menu>
      <Menu>
          마이페이지
      </Menu>
    </Wrapper>
  );
};

export default Nav;