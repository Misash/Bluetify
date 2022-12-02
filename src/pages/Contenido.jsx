import React, { Fragment, useState, useEffect } from "react";
import "../CSS/Contenido.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBarAdmin from "./NavbarAdmin";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Usamos este componente para la creacion de contenidos en la BD


function Contenido() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tipoReg, setTipoReg] = useState("");
  const [nombreReg, setNombreReg] = useState("");
  const [autorReg, setAutorReg] = useState("");
  const [categoriaReg, setCategoriaReg] = useState("");
  const [descripcionReg, setDescripcionReg] = useState("");
  const [precioReg, setPrecioReg] = useState("");
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [selectedFile1, setSelectedFile1] = useState(undefined);

  let tiposArchivos = ["mp3", "mid", "wav", "png", "jpg", "gif", "bmp", "wmv", "avi", "mpg", "mov"]

  //obtenemos la lista de categorias
  const [categorias, setCategorias] = useState([]);
  const url1 = "http://localhost:3001/get_categorias";
  useEffect(() => {
    async function getcat() {
      Axios.get(url1).then((response) => setCategorias(response.data));
    }
    getcat();
  }, []);

  //obtenemos la lista de autores
  const [autores, setAutores] = useState([]);
  const url2 = "http://localhost:3001/get_autores";
  useEffect(() => {
    async function getaut() {
      Axios.get(url2).then((response) => setAutores(response.data));
    }
    getaut();
  }, []);

  //enviando los inputs (excepto imagen y archivo) al backend
  const submitCont = () => {

    if (nombreReg.length && autorReg.length && categoriaReg.length && descripcionReg.length && precioReg.length
      && selectedFile != undefined && selectedFile1 != undefined && tipoReg.length) {
      //introduciendo la imagen y archivo en formData para poder enviarlo al backend

      const fd = new FormData();
      // const fd1 = new FormData();
      fd.append("archivo", selectedFile);
      fd.append("archivo", selectedFile1);
      fd.append("nombre" , nombreReg );
      fd.append("autor" , autorReg );
      fd.append("categoria" , categoriaReg );
      fd.append("descripcion" , descripcionReg);
      fd.append("precio" , precioReg );
      fd.append("tipo" , tipoReg);
   
      Axios.post("http://localhost:3001/contenido0",fd );
      // //introduciendo la imagen y archivo en formData para poder enviarlo al backend
      // const fd = new FormData();
      // const fd1 = new FormData();
      // fd.append("archivo", selectedFile);
      // fd1.append("archivo2", selectedFile1);
      // enviando el archivo al backend
      // Axios.post("http://localhost:3001/contenido1", fd);
      // // enviando la imagen al backend
      // Axios.post("http://localhost:3001/contenido2", fd1);

      window.location.reload(true);
    } else {
      handleShow()
    }
  };



  //se encarga de " capturar el archivo"
  const fileSelectedHandler = (event) => {
    // setArchivoFlag()
    console.log("target", JSON.stringify(event.target.files[0]))
    setSelectedFile(event.target.files[0]);
  };
  //se encarga de " capturar la imagen"
  const fileSelectedHandler2 = (event) => {
    setSelectedFile1(event.target.files[0]);
  };


  return (
    <Fragment>

      <NavBarAdmin />
      <br />
    
      <div class="box-contenido">
      <h1 style={{ color: 'white'}} >SUBIR CONTENIDO</h1>
        <div>
          <input
            class="input_contenido"
            type="text"
            id="nombre"
            name="name"
            required
            size="40vw"
            placeholder="ingrese el titulo "
            onChange={(e) => {
              setNombreReg(e.target.value);
            }}
          />{" "}
        </div>

        <form>
          <br />
          <br />
          <select
            name="selectAutor"
            onChange={(e) => {
              setAutorReg(e.target.value);
            }}
          >
            <option value="">
              seleccione autor
            </option>
            {autores != [] &&
              autores.map((autor) => (
                <option>{autor.nombre}</option>
              ))}
          </select>
        </form>
        <form>
          <br />
          <select
            name="selectCategoria"
            onChange={(e) => {
              setCategoriaReg(e.target.value);
            }}
          >
            <option value="">
              seleccione categoría
            </option>
            {categorias != [] &&
              categorias.map((categoria) => (
                <option>{categoria.nombre_categoria}</option>
              ))}
          </select>
        </form>

        <div>
          <input
            class="input_contenido"
            type="text"
            id="desc"
            name="name"
            required
            minlength="4"
            maxlength="100"
            size="40vw"
            placeholder="ingresar descripción"
            onChange={(e) => {
              setDescripcionReg(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            class="input_contenido"
            type="text"
            id="prec"
            name="name"
            required
            minlength="5"
            maxlength="60"
            size="40vw"
            placeholder="ingrese el precio del contenido"
            onChange={(e) => {
              setPrecioReg(e.target.value);
            }}
          />
        </div>

        <form>
          <br />
          <br />
          <select
            name="tipo"
            onChange={(e) => {
              setTipoReg(e.target.value);
            }}
          >
            <option value="" >
              tipo de archivo
            </option>
            {tiposArchivos.map((tipo) => (
              <option>{tipo}</option>
            ))}
          </select>

        </form>

        <input
          name="archivo"
          class="custom-btn btn-3"
          placeholder="seleccionar archivo"
          type="file"
          onChange={fileSelectedHandler}
        />
        <input
          name="imagen"
          class="custom-btn btn-3"
          placeholder="selecciona miniatura"
          type="file"
          onChange={fileSelectedHandler2}
        />
        {/*<button  onClick={() =>fileInput.click()} class="custom-btn btn-3" ><span>seleccionar archivo</span></button>
                <button class="custom-btn btn-3"><span>selecciona miniatura</span></button>*/}

        <br />
        <div>
          <button onClick={submitCont} class="button_ini" type="button">
            SUBIR CONTENIDO
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Importante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ingrese los campos de :
          <ul>
            <li> {!nombreReg.length && " Titulo "}  </li>
            <li> {!autorReg.length && "Autor "}</li>
            <li> {!categoriaReg.length && "Categoria"}</li>
            <li> {!descripcionReg.length && "Descripción"}</li>
            <li> {!precioReg.length && "Precio"}</li>
            <li> {!tipoReg.length && "Tipo Archivo"}</li>
            <li> {selectedFile === undefined && "Archivo"}</li>
            <li> {selectedFile1 === undefined && "Portada"}</li>
          </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <div className="App-bottom">Copyright © 2022 Bluetify</div>
    </Fragment >
  );
}

export default Contenido;
