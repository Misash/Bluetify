import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarRating from "./StartRating";


function Contenido() {
    return (
        <Col xs="auto">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://puntoseguidorevista.files.wordpress.com/2016/10/gunsnroses.jpg" />
                <Card.Body>
                    <Card.Title>Titulo Contenido</Card.Title>
                    <Container>
                        <Row>
                            <Col> $ 249 </Col>
                            <Col> $ 299 </Col>
                        </Row>
                    </Container>
                    <StarRating/>
                    {/* <Button variant="primary">Ver Info</Button> */}
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Contenido
