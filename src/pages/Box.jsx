import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import "../CSS/Box.css"

import { Link } from 'react-router-dom';

// componente para usar como template para
// los contenidos , tiene parametros como
// titulo , urlImg , precioActual ,precioAnterior , ratingPromedio
// y puede modificar el rating de un contenido 
// con la variable rating 

function Box(props) {
    //rating guarda el valor de start rating
    const [rating, setRating] = useState(props.ratingPromedio);
    const [hover, setHover] = useState(0);


    
    return (
        <Col xs="auto">
            <Card className="Box" >
                <div style={{ transform: "rotate(0)" }}>
                    <Card.Img variant="top" src={props.urlImg} />
                    {/* <a href={"/Contenido/" + props.id} class="stretched-link" state={{ from: "occupation" }}  ></a> */}
                    <Link class="stretched-link" to={"/Contenido/" + props.id}
                        state={{
                            from: props.from, id_cliente: props.id_cliente, precio: props.precioActual
                        }} ></Link>
                </div>
                <Card.Body>
                    <Card.Title > {props.titulo}</Card.Title>
                    <Container>
                        <Row>
                            <Col className="price"> $ {props.precioActual}</Col>
                            <Col className="line"> $ {props.precioAnterior} </Col>
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
                                    onClick={() => props.calificar && setRating(index)}
                                    onMouseEnter={() => props.calificar && setHover(index)}
                                    onMouseLeave={() => props.calificar && setHover(rating)}
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

export default Box
