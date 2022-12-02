import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from "./Box2";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Tienda.css"
import Navbar from "./NavbarAdmin";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { useParams } from "react-router-dom";
// import Row from 'react-bootstrap/Row';
var ini=0;




function Tienda() {
    const [contenidos, setContenidos] = useState([]);
    const [filtro, setfiltro] = useState([]);
    let variant = "light"
    const[titulo,setTitulo] = useState("Ninguno");
    const [Clientes, setClientes] = useState([]);
    
    const url = "http://localhost:3001/";

    const { id } = useParams();
    
    useEffect(()=>{
        async function getcat(){
            axios.get(`${url}get_clientes`).then((response)=>setClientes(response.data));
        }
        getcat();
    },[]);

    const submitFiltro = () => {
        axios.get("http://localhost:3001/categorias/"+titulo).then((response)=>setContenidos(response.data));
    }
 
   
    return (
        <div>
            
            <Navbar
            id={id} 
            />

            <form  className="myForm" onChange={(e)=>{
                      setfiltro(e.target.value);
                    }}>
                <h3>Filtro</h3><br />
                <Row>
                    <Col >
                    <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title= {titulo}
        >
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Top Clientes</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Nombre_cliente</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Ninguno</Dropdown.Item>
            <Dropdown.Divider />
        </DropdownButton>
                    </Col>
                    <Col>
                        <input type="text" id="Autor" placeholder="Escribir nombre" /><br /><br />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <input type="button" value="Aplicar Filtro" onClick={submitFiltro}/>
                    </Col>
                </Row>

            </form>


            {console.log(Clientes)}
            <Form className="myContainer">
                <Row className="align-items-center">
                    {Clientes.map((cliente) => (
                        <Box
                            id = {cliente.id_cliente}
                            titulo={cliente.nombre}
                            //urlImg={require("../" + contenido.imagen)}
                            nombre_completo={cliente.nombre_completo}
                            saldo={cliente.saldo}
                        />
                    ))}
                </Row>
            </Form>


        </div>


    );
}



export default Tienda;