import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import coffeebean from './../Imagenes/coffeebean.png';
const Header = () => {
    return ( 
        
        <ContenedorHeader >
        <Titulo className='cab'>Planta Fermentacion de cafe</Titulo>
		<Imgen src={coffeebean} alt="Logo" />
        <Menu>
		
            <NavLink to="/" exact={true}>Informacion General </NavLink>
            <NavLink to="/Manual">Manual De Usuario y Recomendaciones</NavLink>
            {/* <NavLink to="/Database">Base de Datos</NavLink> */}
			<NavLink to="/Auth">Login</NavLink>
         </Menu>
		 
		         </ContenedorHeader>

     );
}
const ContenedorHeader = styled.header`
	text-align: center;
	margin-left: 15px;
	margin-bottom: 1px;
	background-color: #1A374D;
	padding: 0px 5px 0px 5px;
	width: 970px;
	border-radius: 15px;
	font-size: 14 px;
	font-weight: 400;
	word-spacing:1px;
	letter-spacing: 1px;
	height: 250px;
`;

const Titulo = styled.h1`
	margin-bottom: 5px;
	font-size: 50px;
	text-transform: uppercase;
	color: #DFF4F3;
	vertical-align: middle;
	padding: 10px 15px 10px 15px;
`;
const Imgen=styled.img`
	display: inline-block;
	vertical-align: middle;
	width: 100px;
	margin: 0px 0px 0px 20px;
	height: auto;
`;

const Menu = styled.nav`
margin-left: 10%;
display: inline-block;
height: 80px;
	a {
		text-decoration: none;
		color: #B1D0E0;
		margin: 0px 10px;
		
		vertical-align: middle;
		
	}

	a:hover {
		color: #ECB365;
	}

	a.active {
		border-bottom: 2px solid #165168;
		padding-bottom: 3px;
	}
`; 
export default Header;


