import Navbar from "./Navbar"
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
import axios from "axios";
import "../CSS/infoContenido.css"
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import GenRegalo from "./GenRegalo";

function InfoContenido() {



    //obtener el id del contenido


    const { id } = useParams();
    console.log(id)

    const location = useLocation()
    const { from, id_cliente, precio } = location.state
    console.log(from)

    const submitCompra = () => {
        axios.post("http://localhost:3001/comprar", {
            id_user: id_cliente,
            contenido: id,
            price: precio
        })
    }

    const [contenido, setContenido] = useState({});
    const [listaGen, setlistaGen] = useState([]);
    const url = "http://localhost:3001/Contenido/" + id
    useEffect(() => {
        async function getcat() {
            axios.get(url).then((response) => setContenido(response.data));
        }
        getcat();
    }, []);

    //obtiene la lista generacional de la categoria 
    const getListaGen = async () => {
        const url2 = "http://localhost:3001/listaGen/" + contenido.id_categoria
        axios.get(url2).then((response) => setlistaGen(response.data));
    }


    useEffect(() => {
        if (listaGen.length == 0) {
            getListaGen();
        }
    }, [listaGen]);




    console.log(contenido)


    //rating guarda el valor de start rating
    const [rating, setRating] = useState(0); //estrellas del contenido
    const [hover, setHover] = useState(0);

    return (
        <div>

            <Navbar
                id={id_cliente}
            />

            <Card className="info">
                <Card.Header as="h5">
                    <Row>
                        <Col> <h1>{contenido.nombre}</h1></Col>
                        <Col>{contenido.tipo}</Col>
                    </Row>
                    <Row>
                        <Col><h3> {contenido.autor}</h3></Col>
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
                                            onClick={() => from == "biblioteca" && setRating(index)}
                                            onMouseEnter={() => from == "biblioteca" && setHover(index)}
                                            onMouseLeave={() => from == "biblioteca" && setHover(rating)}
                                        >
                                            <span className="star">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </Col>
                        <Col> <FaFileDownload /> numero_descargas</Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p className="rankings"> <AiOutlineNumber /> 10  <span className="line"> <AiOutlineNumber />  5</span> Descargas</p>
                            <p className="rankings"> <AiOutlineNumber /> 3  <span className="line"> <AiOutlineNumber />   10</span> Calificaciones</p>
                            <h3> Descripcion:</h3>
                            <p> {contenido.descripcion}</p>
                            <p> <FaDollarSign /> {contenido.precio}</p>
                        </Col>
                        <Col>
                            <h4>Lista Generacional</h4>
                            <div className="overflow-scroll" style={{ maxHeight: "400px" }}  >
                                {listaGen.map((categoria) => (
                                    <p>{categoria.nombre_categoria}</p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            {from == "tienda" && <Button variant="primary" onClick={submitCompra} href={"http://localhost:3000/Contenido/" + id}>Comprar</Button>}
                            {from == "biblioteca" && <Button variant="primary" href={"http://localhost:3001/testget/" + id}>Descargar</Button>}

                        </Col>
                        <Col>


                            {/* {from == "tienda" && <Button variant="primary">Regalar Contenido</Button>} */}
                            <GenRegalo 
                                id_cliente = {id_cliente} 
                                id_contenido = {id}
                                precio = {contenido.precio}
                            />

                        </Col>
                    </Row>


                </Card.Body>
            </Card>


        </div>




    )
}

export default InfoContenido



