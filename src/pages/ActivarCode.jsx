import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Navbar from "./Navbar"
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import "../CSS/ActivarCodigo.css"

function ActivarCodigo() {


    const { id } = useParams();
    console.log(id)

    const [codigo, setCodigo] = useState('');
    const [contenido, setContenido] = useState('');
    console.log("codigo: ", codigo)
    console.log("contenido: ", contenido)

    //manejar cambios en el input
    const handleUserInputChange = (e) => {
        let key = window.atob(e.target.value)
        setCodigo(key);
    };

    const url = "http://localhost:3001/";

    //buscar el regalo y obtener id_contenido
    const getidContenido = () => {
        if (codigo !== ''){
            axios.get(`${url}getIdContenido/` + codigo).then((response) => setContenido(response.data));
        }
    }


    //añadir a biblioteca el id_contenido 
    const addContenido2Biblioteca = () => {
        axios.post(`${url}saveRegaloBiblioteca`, {
            id_cliente: id,
            id_contenido: contenido.id_contenido,
        });
    }

    const deleteRegalo = () => {
        axios.post(`${url}deleteRegalo`, {
            id_regalo: codigo,
        });
    }


    //despues que  obtengamos contenido añador a biblioteca del cliente y borramos regalo
    useEffect(() => {
        if (contenido != '') {
            addContenido2Biblioteca()
            deleteRegalo()
        }
    }, [contenido]);




    const handleButton = () => {
        getidContenido()
    };



    return (
        <div>
            <Navbar id={id} />

            <Form className="activarCodigo">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Codigo Regalo</Form.Label>
                    <Form.Control type="text" placeholder="ingresa el codigo" onChange={handleUserInputChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleButton}>
                    Activar Codigo
                </Button>
            </Form>

        </div>
    )
}



export default ActivarCodigo