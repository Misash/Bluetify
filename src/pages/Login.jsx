import React, { Fragment, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../CSS/Login.css"
import logo from '../media/LOGO-B.png'
import Axios from "axios"

function Login(){

    const navigatev=useNavigate();

    const [usernamelog, setUsernamelog]=useState("");
    const [passwordlog, setPasswordlog]=useState("");
    
    const [loginstatus, setloginstatus]=useState("");

    const submitlogin = () => {
        Axios.post("http://localhost:3001/login", {
            username: usernamelog,
            password: passwordlog, 
        }).then((response)=>{
            if (response.data.message){
                setloginstatus(response.data.message)
            }else{
                navigatev("/CrearSaldo")
            }
        })}
    
    return(
    <Fragment>
         <div className="App-logo" >
        <Link to="/"><img src={logo} alt="Logo" width="24%" height="24%"/></Link>
    </div>
    <div className="App-login ">
        <p><strong> Tu sitio favorito para <br /> descargar</strong> imágenes, fotos, <br /> video y mucho más.<br />
        <br />Todo al alcance de tu mano,<br /> solo aquí en <strong> Bluetify.</strong></p>
    </div> 
    <div className="box-login">
        <div>
            <input className="input_login_original" type="text" id="user" name="username" required
            minlength="4" maxlength="20" size="40vw" placeholder="ingrese su nombre de usuario"
            onChange={(e)=>{
                setUsernamelog(e.target.value);
            }}/>
        </div>
        <div>
            <input className="input_login_original" type="password" id="pass" name="password" required
            minlength="4" maxlength="20" size="40vw" placeholder="ingrese su contraseña"
            onChange={(e)=>{
                setPasswordlog(e.target.value);
            }}/>    
        </div>
        <div>
                <button className="button_ini" type="button" onClick={submitlogin}>INICIAR SESION</button>
        </div>
        <div className="text_box_login">
            ¿No tienes cuenta ?
        </div>
        <div>
            <Link to="/register"> <button className="button_reg" type="button">Registrate en bluetify</button></Link>
        </div>
        <div className="error">
            {loginstatus}
        </div>
    </div>
        <div className="App-bottom">
        Copyright © 2022 Bluetify
        </div>
    </Fragment>
    )
}

export default Login