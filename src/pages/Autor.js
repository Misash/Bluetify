import React, { Fragment, useState, useEffect } from "react";
import "../CSS/Autor.css"
import { Link } from "react-router-dom";
import Axios from "axios"


function Autor(){
  const [autorReg, setAutorReg]=useState("");

  const submitAutor = () => {
    Axios.post("http://localhost:3001/autor", {
        autor: autorReg,
    })}
    return(
        <Fragment>
            <h1> Bluetify </h1>
        <div className="wrapper">
            <div className="top_navbar">
              <div className="hamburguer">
                <i className="fa fa-bars"></i>
              </div>
              <nav className="top_menu">
                
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
        <h1 className = "formm">CREAR AUTOR</h1>
       <div >
        <section className="crear_autor">
            <div><input className = "input_autor" type="nombre" id = "autor" placeholder="Ingrese el nombre del autor"
            onChange={(e)=>{
              setAutorReg(e.target.value);
          }}/> </div>
            <button onClick={submitAutor} className = "button">Crear Autor</button>
        </section>
       </div>
       <div className="App-bottom">
            Copyright © 2022 Bluetify
        </div>       
        </Fragment>
    )
}

export default Autor