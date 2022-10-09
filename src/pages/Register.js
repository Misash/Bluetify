import React, { Fragment, useState, useEffect} from "react";
import "../CSS/Register.css"
import { Link } from "react-router-dom";
import logo from '../media/LOGO-B.png'
import Axios from "axios"

function Register(){
    const [usernameReg, setUsernameReg]=useState("");
    const [passwordReg, setPasswordReg]=useState("");
    const [fullNameReg, setfullNameReg]=useState("");

    const submitReg = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
            fullName: fullNameReg,
        }).then(res=>console.log('posting data',res)).catch(err => console.log(err))}
    
    return(
    <Fragment>
        <div className="App-logo" >
        <Link to="/"><img src={logo} alt="Logo" width="24%" height="24%"/></Link>
    </div>
    <div className="box-register">
        <div>
            <input className="input_register" type="text" id="user" name="usernameReg" required size="40vw" placeholder="ingrese su nombre de usuario"
            onChange={(e)=>{
                setUsernameReg(e.target.value);
            }}/>
        </div>
        <div>
            <input className="input_register" type="text" id="fullname" name="nombrec" required size="40vw" placeholder="Nombre completo"
            onChange={(e)=>{
                setfullNameReg(e.target.value);
            }}/>    
        </div>
        <div>
            <input className="input_register" type="password" id="pass" name="passwordReg" required size="40vw" placeholder="ingrese su contraseña"
            onChange={(e)=>{
                setPasswordReg(e.target.value);
            }}/>
        </div>
        <div>
            <input className="input_register" type="password" id="passreq" name="password" required size="40vw" placeholder="Confirmar contraseña"
            />    
        </div>
        <div>
            <button className="button_reg" type="button" onClick={submitReg}>Registrate en bluetify</button>
        </div>
        <div className="App-bottom">
            Copyright © 2022 Bluetify
        </div>
    </div>
    </Fragment>
    )
}

export default Register;