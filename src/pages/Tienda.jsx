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
                    <Contenido
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                     <Contenido
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                     <Contenido
                        titulo="At last Night"
                        urlImg="https://i.guim.co.uk/img/media/5051ce64f29e28bb6a7a010b263eda252401e530/0_355_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=0ea6986688c3268d5468469500c9cbb9"
                        precioActual="248"
                        precioAnterior="299"
                    />
                     <Contenido
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