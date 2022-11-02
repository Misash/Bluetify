import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";

// componente para usar como temnplate para
// los contenidos , tiene parametros como
// titulo , urlImg , precioActual ,precioAnterior , ratingPromedio
// y puede modificar el rating de un contenido 
// con la variable rating 

function Contenido(props) {
    //rating guarda el valor de start rating
    const [rating, setRating] = useState(props.ratingPromedio);
    const [hover, setHover] = useState(0);
    return (
        <Col xs="auto">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.urlImg} />
                <Card.Body>
                    <Card.Title> {props.titulo}</Card.Title>
                    <Container>
                        <Row>
                            <Col> $ {props.precioActual}</Col>
                            <Col className = "line"> $ {props.precioAnterior} </Col>
                        </Row>
                    </Container>

                    {/* START RATING */}
                    <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || rating) ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                            );
                        })}
                    </div>
                    {/* END START RATING */}
                    
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Contenido
