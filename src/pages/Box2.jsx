import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import "../CSS/Box.css"
import user from '../media/user.png'

import { Link } from 'react-router-dom';

// componente para usar como temnplate para
// los clientes , tiene parametros como
// titulo , nombre_completo , saldo

function Box2(props) {

    return (
        <Col xs="auto">
            <Card className="Box" >
                <div style={{ transform: "rotate(0)" }}>
                    <Card.Img variant="top" src={user} />
                    {/* <a href={"/Contenido/" + props.id} class="stretched-link" state={{ from: "occupation" }}  ></a> */}
                    <Link class="stretched-link" to={"/Cliente/" + props.id}
                        state={{
                            id: props.id, titulo: props.titulo, nombre_completo: props.nombre_completo, saldo: props.saldo
                        }} ></Link>
                </div>
                <Card.Body>
                    <Card.Title > {props.titulo}</Card.Title>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Box2
