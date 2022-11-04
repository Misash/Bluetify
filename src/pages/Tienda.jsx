import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from "./Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Tienda.css"
import Navbar from "./Navbar";


import DropDown from "./DropDown";
import Col from 'react-bootstrap/Col';
import Axios from "axios"

import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
// import Row from 'react-bootstrap/Row';





function Tienda() {
    const [contenidos, setContenidos] = useState([]);
    const url = "http://localhost:3001/";
    axios.get(`${url}tienda`).then((response) => setContenidos(response.data));
 
   
    return (
        <div>
            <Navbar />

            <form action="/action_page" className="myForm">
                <h3>Filtro</h3><br />
                <Row>
                    <Col >
                        <DropDown />
                    </Col>
                    <Col>
                        <input type="text" id="Autor" placeholder="Escribir Autor" /><br /><br />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <input type="submit" value="Aplicar Filtro" />
                    </Col>
                </Row>

            </form>



            <Form className="myContainer">
                <Row className="align-items-center">
                    {contenidos.map((contenido) => (
                        <Box
                            id = {contenido.id_contenido}
                            titulo={contenido.nombre}
                            urlImg={require("../" + contenido.imagen)}
                            precioActual={contenido.precio}
                            precioAnterior="299"
                            ratingPromedio="3"
                        />
                    ))}
                </Row>
            </Form>


        </div>


    );
}



export default Tienda;