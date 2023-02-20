import React from 'react';
import DropdownMenu from '../ui/DropdownMenu';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	return (
		<>
		<Nav>
			<Bars />
			<NavMenu>
			<Logo to='/'>
				로고
			</Logo>
			<DropdownMenu/>
			</NavMenu>
		</Nav>
		</>
	);
};

const Nav = styled.nav`
background: #558B2F;
width: 100vw;
height: 60px;
display: flex;
justify-content: space-around;
z-index: 12;
border-bottom: 1px solid #E4E7EC;
`;

const Logo = styled(Link)`
	color: #000000;
	text-decoration: none;
`;

const NavMenu = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: -24px;
width: 100vw;
@media screen and (max-width: 768px) {
	display: none;
}
`;


const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export default Navbar;