
import React,{useState} from 'react';
import styled from 'styled-components';
import {Database} from './Database'
/* import Report from './Report' */
/* import { BrowserRouter, Route, NavLink} from 'react-router-dom'; */
import { BrowserRouter,Route,NavLink} from 'react-router-dom';
import coffeebeant from './../Imagenes/coffeebeant.png';
import Report from './Report'


const Auth = () => {
    var firebase = require('firebase/app');
    require("firebase/auth");
    const [email, setEmail]= useState('');
    
    const [password, setPassword]= useState('');

    const [sesion, cambiarEstadoSesion] = useState(true);
    

   /* useEffect(()=>{
    
// or
console.log('hola')
   },[sesion]); */

    const onSubmit = async (e)=>
    {  e.preventDefault();
        /* await firebase.auth().createUserWithEmailAndPassword(email,password); */ //registrousers
       //const res= await firebase.auth().signInWithEmailAndPassword(email, password)
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          //var user = userCredential.user;
          /* console.log(userCredential); */
          cambiarEstadoSesion(false);
           
          return(userCredential)
          // ...
        })
        .catch((error) => {
          /* var errorCode = error.code; */
          /* var errorMessage = error.message; */
         /*  console.log(errorCode); */
            /* console.log(errorMessage) */
        });
        //console.log(res);
        setEmail('');
        setPassword('');

    }
    const logout= async ()=>
    {
        await firebase.auth().signOut().then(() => {
            /* console.log('Sign-out successful.'); */
            cambiarEstadoSesion(true);
          }).catch((error) => {
            // An error happened.
          });
    }
    /* console.log(Fecha1);
    console.log(Fecha2); */
    return (  
      
      <BrowserRouter className="sesiondatos">

          
          {sesion === true ?
          <Login >
            <div > 
               <Legend>
                 <Imagen>
                 <img src={coffeebeant} alt="Logo" />
                 </Imagen> 
                 </Legend> 
               
              <label htmlFor="email" > {onSubmit.userCredential}</label>
              <Input type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
              
              <label htmlFor="password" ></label>
              <Input type="password" 
              id="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)} />
              {/* <Boton type="onSubmit" onClick={() => cambiarEstadoSesion(false)}>Iniciar Sesion </Boton> */} 
              <Boton onClick={onSubmit}>Iniciar Sesion </Boton>
              {/*        
              <NavLink to="/Database" className="btn btn-success">
              Base de Datos
              </NavLink>
              <Route  component={Database} /> */}
              
                  
              </div>
              </Login>
              :
              <div>
            <div className="fondo">   
         <Boton2 onClick={ logout } >cerrar Sesion </Boton2>
         </div> 
         {/* <div>
         <Report />
         </div> */}
         <Route path="/Report"><Report/></Route>
        <NavLink className="botonesBDG" to="/Report">Guia de usuario-actualizar</NavLink>
        <div>
         
        <Route path="/Database"><Database/></Route>
        <NavLink className="botonesBDD" to="/Database">Base de datos</NavLink>
         </div>
         </div>
         }
          


        
        </BrowserRouter>
    );
}

const Input = styled.input`

    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 1px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    &:focus {
      padding: 10px 5px 10px 10px;
      outline: 0;
    border: 2px solid #0af084;
    }
`;
 

const Imagen = styled.div`
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
`;

const Boton = styled.button`

    display: block;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: .3s ease all;
    outline: none;
    
    background: -moz-linear-gradient(top, rgba(254,231,154,1) 0%, rgba(254,193,81,1) 100%);
    background: -webkit-linear-gradient(top, rgba(254,231,154,1) 0%,rgba(254,193,81,1) 100%);
    
   
    color: #f9f9f9;
    font-size: 18px;
    margin: 15px auto -55px auto;
    &:hover {
      background-position: 0 -5px;
      color: #7E7E7E;
      
    }
`;
const Boton2 = styled.button`
position: absolute;
top: 180px;
left: 1000px;
    display: grid;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: .3s ease all;
    outline: none;
    background: rgb(254,231,154);
    background: -moz-linear-gradient(top, rgba(254,231,154,1) 0%, rgba(254,193,81,1) 100%);
    background: -webkit-linear-gradient(top, rgba(254,231,154,1) 0%,rgba(254,193,81,1) 100%);
    
   
    color: #1A374D;
    font-size: 18px;
    margin: 5px 60px 30px auto;
    &:hover {
      background-position: 0 -5px;
      color: #FF5722;
      
    }
`;
const Login = styled.div`
  position: inline-block;
  top: 0px;
	width: 250px;
  display: table;
  margin: 30px auto 0 auto;
  background: #ffffff;
  border-radius: 1px;
  font-size: 18px;
`;


const Legend = styled.legend`
  position: relative;
  width: 100%;
  display: block;
  background: #FFFFF8;
  padding: 15px;
  color: #fff;
 
  
  `;

export default Auth;