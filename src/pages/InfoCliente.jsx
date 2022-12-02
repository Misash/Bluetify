import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import axios from "axios";
import "../CSS/infoContenido.css"
import { useParams } from "react-router-dom"


function InfoCliente() {

    //Este componente nos dara 

    //obtener el id del cliente
    const { id } = useParams();

    const [cliente, setCliente] = useState({});
    const [listaDes, setlistaDes] = useState([]);
    const [listaCal, setlistaCal] = useState([]);
    const url = "http://localhost:3001/get_clientes2/" + id
    const url2 = "http://localhost:3001/listaDescargas/" + id
    const url3 = "http://localhost:3001/listaCalificaciones/" + id
    useEffect(() => {
        async function getcat() {
            axios.get(url).then((response) => setCliente(response.data));
        }
        getcat();
    }, []);

    //obtiene el historial de descargas
    const getListaDes = async () => {
        axios.get(url2).then((response) => setlistaDes(response.data));
    }
    
    //obtiene el historial de calificaciones
    const getListaCal = async () => {
        axios.get(url3).then((response) => setlistaCal(response.data));
    }



    useEffect(() => {
        if (listaDes.length == 0) {
            getListaDes();
        }
    }, [listaDes]);

    useEffect(() => {
        if (listaCal.length == 0) {
            getListaCal();
        }
    }, [listaCal]);



    return (
        <div>


            {console.log(cliente)}
            <Card className="info">
                <Card.Header as="h5">
                    <Row>
                        <Col> <h1>{cliente.nombre}</h1></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <br />
                    <Row>
                        <Col>
                            <p> {cliente.nombre_completo} </p>
                            <h5> saldo disponible: <FaDollarSign/> {cliente.saldo} </h5>
                            <h5> Ultimos 6 meses:</h5>
                            <p> 5 </p>
                        </Col>
                        <Col>
                        
                            <h4>Historial de descargas</h4>
                            <div className="overflow-scroll" style={{ maxHeight: "400px" }}  >
                                {listaDes.map((Descarga) => (
                                    <p>{Descarga.nombre}</p>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <h4>Calificaciones</h4>
                            <div className="overflow-scroll" style={{ maxHeight: "400px" }}  >
                                {listaCal.map((Calificacion) => (
                                    <p>{Calificacion.nombre}</p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Button variant="primary" href={"http://localhost:3000/Clientes"}>Volver</Button>
                        </Col>
                        <Col>
                            <Button variant="secondary">Deshabilitar cuenta</Button>
                        </Col>
                    </Row>


                </Card.Body>
            </Card>


        </div>




    )
}

export default InfoCliente



