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
import NavBarAdmin from './NavbarAdmin';
function InfoContenido() {

    //Este componente nos dara a detalle la informacion de un contenido,
    //Tambien nos permitira comprar, regalar, borrar o descargar dependiendo
    //De que otro componente hallamos entrado, por ejemplo :
    //Si venimos de biblioteca podremos descargar.

    //obtener el id del contenido
    const { id } = useParams();

    const location = useLocation()
    const { from, id_cliente, precio } = location.state
    console.log(from)

    //Hace una compra, llama a comprar de index.js
    const submitCompra = () => {
        axios.post("http://localhost:3001/comprar", {
            id_user: id_cliente,
            contenido: id,
            price: precio
        })
    }

    //Hace una descarga, llama a descarga de index.js
    const submitDescarga = () => {
    
        axios.post("http://localhost:3001/descarga", {
            id_user: id_cliente,
            contenido: id,
        })
    }

    //Crea una calificacion, llama a calificacion de index.js
    const submitCalificacion = () => {
        console.log("entrooooooooooooo")
        axios.post("http://localhost:3001/calificacion", {
            id_user: id_cliente,
            contenido: id,
            rate: rating,
        })
    }

    

    // useEffect(() => {
    //    submitCalificacion()
    // }, [rating]);



    const [contenido, setContenido] = useState({});
    const [listaGen, setlistaGen] = useState([]);
    const [RankingCalAct, setRankingCalAct] = useState([]);
    const [RankingCalPas, setRankingCalPas] = useState([]);
    const [RankingDesAct, setRankingDelAct] = useState([]);
    const [RankingDesPas, setRankingDelPas] = useState([]);
    const url = "http://localhost:3001/Contenido/" + id
    const url1= "http://localhost:3001/rankingCalAct/"+ id
    const url2= "http://localhost:3001/rankingCalPas/"+ id
    const url3= "http://localhost:3001/rankingDesAct/"+ id
    const url4= "http://localhost:3001/rankingDesPas/"+ id
    //consiguiento la informacion del contenido
    useEffect(() => {
        async function getcat() {
            axios.get(url).then((response) => setContenido(response.data));
        }
        getcat();
    }, []);

    //Consiguien el ranking de calificaciones de la semana actual
    useEffect(() => {
        async function getcat() {
            axios.get(url1).then((response) => setRankingCalAct(response.data));
        }
        getcat();
    }, []);

    //Consiguien el ranking de calificaciones de la semana pasada
    useEffect(() => {
        async function getcat() {
            axios.get(url2).then((response) => setRankingCalPas(response.data));
        }
        getcat();
    }, []);

    //Consiguien el ranking de descargas de la semana actual
    useEffect(() => {
        async function getcat() {
            axios.get(url3).then((response) => setRankingDelAct(response.data));
        }
        getcat();
    }, []);

    //Consiguien el ranking de descargas de la semana pasada
    useEffect(() => {
        async function getcat() {
            axios.get(url4).then((response) => setRankingDelPas(response.data));
        }
        getcat();
    }, []);

    //obtiene la lista generacional de la categoria 
    const getListaGen = async () => {
        const url2 = "http://localhost:3001/listaGen/" + contenido.id_categoria
        axios.get(url2).then((response) => setlistaGen(response.data));
    }


    //borrar contenido 
    const borrarContenido = () =>{
        axios.post("http://localhost:3001/borrarContenido", {
            id_contenido: id,
        })
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

            {(from == "admin")?
                 <NavBarAdmin /> :
                <Navbar
                    id={id_cliente}
                />
            }
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
                                            onClick={() => {from == "biblioteca" && setRating(index);submitCalificacion()}}
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
                            <p className="rankings"> <AiOutlineNumber /> {}  <span className="line"> <AiOutlineNumber />  {}</span> Descargas</p>
                            <p className="rankings"> <AiOutlineNumber /> {}  <span className="line"> <AiOutlineNumber />   {} </span> Calificaciones</p>
                            <h3> Descripcion:</h3>
                            {console.log(RankingCalAct)}
                            {console.log(RankingDesAct)}
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
                            {from == "biblioteca" && <Button variant="primary" onClick={submitDescarga} href={"http://localhost:3001/testget/" + id}>Descargar</Button>}
                            {from == "admin" && <Button variant="primary" onClick={borrarContenido} href={"http://localhost:3000/Tienda/admin"} >Borrar contenido</Button>}

                        </Col>
                        <Col>


                            { from == "tienda" && 
                                    <GenRegalo 
                                        id_cliente = {id_cliente} 
                                        id_contenido = {id}
                                        precio = {contenido.precio}
                                    />
                            }

                        </Col>
                    </Row>


                </Card.Body>
            </Card>


        </div>




    )
}

export default InfoContenido



