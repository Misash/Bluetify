import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

import { FaFileDownload } from 'react-icons/fa';
import { GiPodium } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";

import "../CSS/infoContenido.css"





function InfoContenido(props) {

    //rating guarda el valor de start rating
    const [rating, setRating] = useState(props.rating); //estrellas del contenido
    const [hover, setHover] = useState(0);

    return (
        <div>

            <NavBar />


            <Card className="info">
                <Card.Header as="h5">
                    <Row>
                        <Col> <h1>props.titulo</h1></Col>
                        <Col>props.extension</Col>
                    </Row>
                    <Row>
                        <Col><h3>props.autor</h3></Col> 
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            {/* START RATING */}
                            <div className="star-rating">
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className={index <= (hover || rating) ? "on" : "off"}
                                        // onClick={() => setRating(index)}
                                        // onMouseEnter={() => setHover(index)}
                                        // onMouseLeave={() => setHover(rating)}
                                        >
                                            <span className="star">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </Col>
                        <Col> <FaFileDownload/> props.numero_descargas</Col> 
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p className="rankings"> <AiOutlineNumber/> props.ranking_descargas  <span className="line"> <AiOutlineNumber/>  props.ranking_descargas_anterior</span> Descargas</p>
                            <p className="rankings"> <AiOutlineNumber/> props.ranking_nota  <span className="line"> <AiOutlineNumber/>  props.ranking_nota_anterior</span> Calificaciones</p>
                            <h3> Descripcion:</h3>
                            <p> props.descripcion</p>
                            <p> <FaDollarSign/> props.precio</p>
                        </Col>
                        <Col>
                            <h4>Lista Generacional</h4>
                            <div className="overflow-scroll" style={{ maxHeight: "400px" }}  >
                                <p> props.categorias </p>
                            </div>
                        </Col>
                    </Row>
                    <br />
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



