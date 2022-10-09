import React, { Fragment, useState, useEffect } from "react";
import "../CSS/saldo.css"
import { Link } from "react-router-dom";
import Axios from "axios"

function Saldo(){
    const [usernameReg, setUsernameReg]=useState("");
    const [saldoReg, setsaldoReg]=useState("");
    const [saldostatus, saldostatusReg]=useState("");

    const submitSaldo = () => {
      Axios.post("http://localhost:3001/saldo", {
          username: usernameReg,
          saldo: saldoReg,
      }).then((response)=>{
        if (response.data.message){
          saldostatusReg(response.data.message)
        }
    })}
    return (
        <Fragment>
            <div class="wrapper">
            <div class="top_navbar">
              <div class="hamburguer">
                <i class="fa fa-bars"></i>
              </div>
              <nav class="top_menu">
                
      </nav>
      </div>
            <div class="sidebar">
              <ul>
                <li>
                  <Link to="/CrearSaldo">
                    <span class="icon">
                      <i class="fa fa-book" aria-hidden="true"></i>
                    </span>
                    <span class="title">CARGAR SALDO</span>
                  </Link>
                </li>
                <li>
                <Link to="/CrearContenido">
                    <span class="icon">
                      <i class="fa fa-file-video" aria-hidden="true"></i>
                    </span>
                    <span class="title">SUBIR CONTENIDO</span>
                  </Link>
                </li>
                <li>
                <Link to="/CrearCategoria">
                    <span class="icon">
                      <i class="fa fa-volleyball-ball" aria-hidden="true"></i>
                    </span>
                    <span class="title">CREAR CATEGORIA</span>
                  </Link>
                </li>
                <li>
                <Link to="/CrearAutor">
                    <span class="icon">
                      <i class="fa fa-blog" aria-hidden="true"></i>
                    </span>
                    <span class="title">CREAR AUTOR</span>              
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fa fa-leaf" aria-hidden="true"></i>
                    </span>
                    <span class="title">CREAR PROMOCIONES</span>              
                  </a>
                </li>
                <li>
                    <a href="#">
                      <span class="icon">
                        <i class="fa fa-blog" aria-hidden="true"></i>
                      </span>
                      <span class="title">DESCARGAS</span>              
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon">
                        <i class="fa fa-blog" aria-hidden="true"></i>
                      </span>
                      <span class="title">REVISAR CALIFICACION</span>              
                    </a>
                  </li>
              </ul>
              </div>
            </div>
            <h1 className = "formm">CARGAR SALDO</h1>
            <div class="box-saldo">
                <input class="input_saldo" type="text" id="user" name="username" required
                size="40vw" placeholder="ingrese su nombre de usuario"
                onChange={(e)=>{
                  setUsernameReg(e.target.value);
              }}/>
                <div>
                <input class="input_saldo" type="text" id="pass" name="saldo" required
                 size="40vw" placeholder="ingrese el monto"
                onChange={(e)=>{
                  setsaldoReg(e.target.value);
              }}/>
                </div>
                <br/><br/><br/><br/><br/><br/>
                <div>
                    <button class="button_ini" type="button" onClick={submitSaldo}>CARGAR SALDO</button>
                </div>
            </div>
            <div className="App-bottom">
            Copyright © 2022 Bluetify
        </div>
        </Fragment>
    )
}

export default Saldo;