import React, { Fragment, useState, useEffect } from "react";
import "../CSS/Contenido.css"
import { Link } from "react-router-dom";
import Axios from "axios"


function Contenido(){

    const [nombreReg, setNombreReg]=useState("");
    const [autorReg, setAutorReg]=useState("");
    const [categoriaReg, setCategoriaReg]=useState("");
    const [descripcionReg, setDescripcionReg]=useState("");
    const [precioReg, setPrecioReg]=useState("");
    const[selectedFile, setSelectedFile]=useState("");
    const[selectedFile1, setSelectedFile1]=useState("");


    const submitCont = () => {
      Axios.post("http://localhost:3001/contenido0",{
      nombre: nombreReg,
      autor: autorReg, 
      categoria: categoriaReg,
      descripcion: descripcionReg,
      precio: precioReg,
})
      const fd=new FormData();
      const fd1=new FormData();  
      fd.append('archivo',selectedFile);
      fd1.append('archivo2',selectedFile1)
      /*fd.append('nombre',nombreReg);
      fd.append('autor',autorReg);
      fd.append('categoria',categoriaReg);
      fd.append('descripcion',descripcionReg);
      fd.append('precio',precioReg); 
      fd.append('archivo',selectedFile);
      fd.append('image',selectedFile1);*/
        
Axios.post("http://localhost:3001/contenido1",fd)
    Axios.post("http://localhost:3001/contenido2",fd1)
  }

    const fileSelectedHandler=(event)=>{
            setSelectedFile(event.target.files[0])
        }
    const fileSelectedHandler2=(event)=>{
            setSelectedFile1(event.target.files[0])
        }
    return(
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
            <h1 className = "form">SUBIR CONTENIDO</h1>
            <div class="box-contenido">
                <div>
                <input class="input_contenido" type="text" id="nombre" name="name" required
                size="40vw" placeholder="ingrese su nombre de usuario"
                onChange={(e)=>{
                  setNombreReg(e.target.value); 
                  }} /> </div>

                <form>
                    <br/><br/>
                    <select name="selectAutor"  
                    onChange={(e)=>{
                      setAutorReg(e.target.value);
                    }} >
                        <option disabled selected="">seleccione autor</option>
                        <option>test_autor</option>
                        <option>testing_interface</option>
                        <option>Autor3</option>
                    </select>
                </form>
                <form>
                    <br/>
                    <select name="selectCategoria"
                    onChange={(e)=>{
                      setCategoriaReg(e.target.value);
                    }}>

                        <option disabled selected="">seleccione categoría</option>
                        <option>test_categoria</option>
                        <option>test_categoria2</option>
                        <option>testing3</option>
                    </select>
                </form>

                <div>
                <input class="input_contenido" type="text" id="desc" name="name" required
                minlength="4" maxlength="20" size="40vw" placeholder="ingresar descripción"
                onChange={(e)=>{
                  setDescripcionReg(e.target.value);
                  }}/>
                </div>
                <div>
                <input class="input_contenido" type="text" id="prec" name="name" required
                minlength="5" maxlength="60" size="40vw" placeholder="ingrese el precio del contenido"
                onChange={(e)=>{
                  setPrecioReg(e.target.value);
                  }}/></div>

                <form>
                    <br/><br/>
                    <select>

                        <option disabled selected="">seleccione tipo de archivo</option>
                        <option>mp3</option>
                        <option>sa</option>
                        <option>Archivo3</option>
                    </select>
                    
                </form>
                  
                <input name="archivo" class="custom-btn btn-3" placeholder="seleccionar archivo" type="file" onChange={fileSelectedHandler}/>
                <input name="imagen" class="custom-btn btn-3" placeholder="selecciona miniatura" type="file" onChange={fileSelectedHandler2}/>
                {/*<button  onClick={() =>fileInput.click()} class="custom-btn btn-3" ><span>seleccionar archivo</span></button>
                <button class="custom-btn btn-3"><span>selecciona miniatura</span></button>*/}


                <br/>
                <div>
                    <button onClick={submitCont} class="button_ini" type="button">SUBIR CONTENIDO</button>
                </div>
            </div>
            <div className="App-bottom">
            Copyright © 2022 Bluetify
        </div>
        </Fragment>
    
        )
    }

export default Contenido;