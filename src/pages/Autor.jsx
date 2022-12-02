import React, { Fragment, useState, useEffect } from "react";
import "../CSS/Autor.css"
import { Link } from "react-router-dom";
import Axios from "axios"
import NavBarAdmin from "./NavbarAdmin";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Autor() {

//Este componente se encargara de crear un autor

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [autorReg, setAutorReg] = useState("");

  //enviando los inputs al backend, para crear el autor
  const submitAutor = () => {
    if(autorReg.length !=0){
      Axios.post("http://localhost:3001/autor", {
        autor: autorReg,
      })
      window.location.reload(true);
    }else{
      handleShow()
    }
  }
  return (
    <Fragment>

      <NavBarAdmin />

      <h1 className="formm">CREAR AUTOR</h1>
      <div >
        <section className="crear_autor">
          <div><input className="input_autor" type="nombre" id="autor" placeholder="Ingrese el nombre del autor"
            onChange={(e) => {
              setAutorReg(e.target.value);
            }} /> </div>
          <button onClick={submitAutor} className="button">Crear Autor</button>
        </section>
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
          Ingrese un nombre de Autor
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <div className="App-bottom">
        Copyright © 2022 Bluetify
      </div>
    </Fragment>
  )
}

export default Autor