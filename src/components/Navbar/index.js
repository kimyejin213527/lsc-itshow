import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
            로고
		</NavLink>
		<NavLink to='/test' activeStyle>
			테스트
		</NavLink>
		<NavLink to='/info' activeStyle>
			정보
		</NavLink>
		<NavLink to='/mypage' activeStyle>
			마이페이지
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
