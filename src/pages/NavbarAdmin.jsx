import React from "react"
import { Link } from "react-router-dom";

function NavBarAdmin(){
    return (
        <>
        <h1> Bluetify </h1>
        <div className="wrapper">
          <div className="top_navbar">
            <div className="hamburguer">
              <i className="fa fa-bars"></i>
            </div>
            <nav className="top_menu"></nav>
          </div>
          <div className="sidebar">
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
              <Link to="/clientes">
                  <span class="icon">
                    <i class="fa fa-blog" aria-hidden="true"></i>
                  </span>
                  <span class="title">DESCARGAS</span>
                </Link>
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
        </>
    )
}


export default NavBarAdmin