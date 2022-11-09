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
import axios from "axios";
import "../CSS/infoContenido.css"
import { useParams } from "react-router-dom"




function InfoContenido() {



    //obtener el id del contenido
    const { id } = useParams();
    console.log(id)


    const [contenido, setContenido] = useState({});
    const [listaGen, setlistaGen] = useState([]);
    const url = "http://localhost:3001/Contenido/" + id
    useEffect(()=>{
        async function getcat(){
          axios.get(url).then((response) => setContenido(response.data));
        }
        getcat();
    },[]);

    // console.log(contenido)
    const url2 = "http://localhost:3001/listaGen/" + contenido.id_categoria
    axios.get(url2).then((response) => setlistaGen(response.data));

    // console.log(listaGen)


    //rating guarda el valor de start rating
    const [rating, setRating] = useState(0); //estrellas del contenido
    const [hover, setHover] = useState(0);

    return (
        <div>

            <NavBar />


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
                                {listaGen != []  && listaGen.map((categoria) => (
                                   <p>{categoria.nombre_categoria}</p>
                                ))}
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



