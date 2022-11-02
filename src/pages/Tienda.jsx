import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Contenido from "./Contenido.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Tienda.css"


function Tienda() {
    return (
        <div>

            <Form>
                <Row className="align-items-center">
                    <Contenido/>
                    <Contenido/>
                    <Contenido/>
                    <Contenido/>
                </Row>
            </Form>


        </div>


    );
}



export default Tienda;