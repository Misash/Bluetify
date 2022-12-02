import React, { Fragment, useState, useEffect } from "react";
import "../CSS/Categoria.css";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavBarAdmin from "./NavbarAdmin";

//Usamos este componente para la creacion de categorias

function Categoria() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoriaReg, setCategoriaReg] = useState("");
  const [subcategoriaReg, setSubcategoriaReg] = useState("");
  console.log(categoriaReg);
  console.log(subcategoriaReg);

  const [categorias, setCategorias] = useState([]);
  //Hacemos un get de todas las categorias de la BD, para escoger subcategoria
  const url = "http://localhost:3001/get_categorias";
  useEffect(() => {
    async function getcat() {
      axios.get(url).then((response) => setCategorias(response.data));
    }
    getcat();
  }, []);

  //enviamos la inforacion a index.js para ingresar la categoria a la BD
  const submitCat = () => {

    if (categoriaReg.length != 0 ) {
      axios.post("http://localhost:3001/categoria", {
        categoria: categoriaReg,
        subcategoria: subcategoriaReg,
      });
      window.location.reload(true);
    } else {
      handleShow()
    }
  };

  return (
    <Fragment>

      <NavBarAdmin/>
   

      <div>
        <section className="categoria">
        <h1 style={{ color: 'white'}} > CREAR CATEGORIA</h1>
          <div>
            <input
              className="input_login"
              type="nombre"
              id="autor"
              placeholder="Ingrese el nombre de categoria"
              onChange={(e) => {
                setCategoriaReg(e.target.value);
              }}
            />
            <div className="text_box">Es subcategoria de</div>
            <form className="form_cat">
              <br />
              <br />
              <select
                name="selectAutor"
                onChange={(e) => {
                  setSubcategoriaReg(e.target.value);
                }}
              >
                <option value="" >
                  Ninguno
                </option>
                {categorias != [] &&
                  categorias.map((categoria) => (
                    <option>{categoria.nombre_categoria}</option>
                  ))}
              </select>
            </form>
          </div>
          <button className="button" type="button" onClick={submitCat}>
            Crear Categoria
          </button>

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
              Ingrese un nombre de Categoria 
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </section>
      </div>
      <div className="App-bottom">Copyright © 2022 Bluetify</div>
    </Fragment>
  );
}

export default Categoria;
