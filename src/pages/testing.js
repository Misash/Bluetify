import React, { Fragment, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../CSS/Login.css"
import logo from '../media/LOGO-B.png'
import Axios from "axios"

function Test(){

    const [testLog, setUsernameTest]=useState("");
    

    const submitTest = () => {
        Axios.post("http://localhost:3001/testpost", {
            test: testLog,
        })
    }
    
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
            minlength="4" maxlength="20" size="40vw" placeholder="ingrese test"
            onChange={(e)=>{
                setUsernameTest(e.target.value);
            }}/>
        </div>
        <div>
                <button className="button_ini" type="button" onClick={submitTest}>INICIAR TEST</button>
        </div>
    </div>
        <div className="App-bottom">
        Copyright © 2022 Bluetify
        </div>
    </Fragment>
    )
}

export default Test