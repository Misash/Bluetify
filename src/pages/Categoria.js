import React, { Fragment, useState, useEffect} from "react";
import "../CSS/Categoria.css"
import { Link } from "react-router-dom";
import Axios from "axios"

function Categoria(){
  const [categoriaReg, setCategoriaReg]=useState("");
  const [subcategoriaReg, setSubcategoriaReg]=useState("");

    const submitCat = () => {
        Axios.post("http://localhost:3001/categoria", {
            categoria: categoriaReg,
            subcategoria: subcategoriaReg,
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
        <h1 className = "formm">CREAR CATEGORIA</h1>
       <div >
        <section className="categoria">
            <div><input className = "input_login" type="nombre" id = "autor" placeholder="Ingrese el nombre de categoria"
            onChange={(e)=>{
              setCategoriaReg(e.target.value);
              }}/>
             <div className="text_box">
             Es subcategoria de 
             </div>
            <form className="form_cat">
                    <br/><br/>
                    <select name="selectAutor"
                    onChange={(e)=>{
                      setSubcategoriaReg(e.target.value);
                      }}>
                        <option disabled selected="">seleccione Categoria</option>
                        <option>SubCategoria 1</option>
                        <option>SubCategoria 2</option>
                        <option>SubCategoria 3</option>
                    </select>
                </form>
            </div>
            <button className = "button" type="button" onClick={submitCat}>Categoria</button>
        </section>
       </div>
       <div className="App-bottom">
            Copyright © 2022 Bluetify
        </div>
        </Fragment>
    )
}

export default Categoria