import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../CSS/infoContenido.css"


function InfoContenido() {
    return (
        <div>

            <NavBar />


            <Card calssName="info">
                <Card.Header as="h5">
                    <Row>
                        <Col> <h1>Don't Cry</h1></Col>
                        <Col>.MP4</Col>
                    </Row>
                    <Row>
                        <Col><h3>Guns N' Roses</h3></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>********</Col>
                        <Col> -- 32</Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>#10  #6 Descargas</p>
                            <p>#3  #10 Descargas</p>
                            <h4> Descripcion:</h4>
                            <p> Una canción perteneciente al
                                grupo Guns N' Roses, la primera canción escrita del grupo</p>
                            <p> $ 20</p>
                        </Col>
                        <Col>
                            <h4>Lista Generacional</h4>
                            <div className="overflow-scroll" style={{ maxHeight: "200px" }}  >
                                <p> #HardRock</p>
                                <p> #HardRock</p>
                                <p> #HardRock</p>
                                <p> #HardRock</p>
                                <p> #HardRock</p>
                                <p> #HardRock</p>

                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Button variant="primary">Comprar</Button>
                        </Col>
                        <Col>
                            <Button variant="primary">Regalar Contenido</Button>
                        </Col>
                    </Row>


                </Card.Body>
            </Card>


        </div>




    )
}

export default InfoContenido



{/* <Container className="info">
<Row>
    <Col> <h1>Don't Cry</h1></Col>
    <Col>.MP4</Col>
</Row>
<Row>
    <Col><h2>Guns N' Roses</h2></Col>
</Row>
<Row>
    <Col>********</Col>
    <Col> -- 32</Col>
</Row>
<Row>
    <Col>
        <p>#10  #6 Descargas</p>
        <p>#3  #10 Descargas</p>
        <h4> Descripcion:</h4>
        <p> Una canción perteneciente al
            grupo Guns N' Roses, la primera canción escrita del grupo</p>
        <p> $ 20</p>
    </Col>
    <Col>
        <h4>Lista Generacional</h4>
        <div className="overflow-scroll" style={{ maxHeight: "200px" }}  >
            <p> #HardRock</p>
            <p> #HardRock</p>
            <p> #HardRock</p>
            <p> #HardRock</p>
            <p> #HardRock</p>
            <p> #HardRock</p>

        </div>
    </Col>
</Row>
</Container> */}