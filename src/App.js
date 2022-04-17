import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Componentes/Header'
import Inicio from './Componentes/inicio';
import Manual from './Componentes/Manual';
/* import Database from './Componentes/Database'; */
import styled from 'styled-components';
import Error404 from './Componentes/Error404'
import Auth from './Componentes/Auth'

const App = () => {
    return ( 
        <BrowserRouter>
            <ContenedorPrincipal>
            
             <Header/>

        <Main>
            <Switch>
            <Route path="/" exact={true} ><Inicio/></Route>
            <Route path="/Manual"><Manual/></Route>
            
            {/* <Route path="/Database"><Database/></Route> */}
            <Route path="/Auth"><Auth/></Route>
            <Route component={Error404} />
            </Switch>
        </Main>
        </ContenedorPrincipal>
        </BrowserRouter>
     );
}
const ContenedorPrincipal = styled.div`
	padding: 1px;
	width: 100%;
	max-width: 1000px;
    margin-bottom: 0%;
    
`;
const Main = styled.main`
background: #fff;
padding: 0px;
border-radius: 10px;

`;
export default App;