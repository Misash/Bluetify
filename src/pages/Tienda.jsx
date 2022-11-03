import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from "./Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Tienda.css"
import Navbar from "./Navbar";

import DropDown from "./DropDown";
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';


function Tienda() {
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
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                        ratingPromedio="3"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                        ratingPromedio="4"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                        ratingPromedio="2"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                    <Box
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />

                </Row>
            </Form>


        </div>


    );
}



export default Tienda;