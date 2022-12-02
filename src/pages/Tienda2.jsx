import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from "./Box";
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
import e from "cors";
// import Row from 'react-bootstrap/Row';
var ini=0;




function Tienda() {
    //Tienda2 es como la tienda pero esta parte del lado del admin, sera igual
    //La unica diferencia que el admin podra borrar contenidos al seleccionar uno.
    const [contenidos, setContenidos] = useState([]);
    const [filtro, setfiltro] = useState([]);
    let variant = "light"
    const[titulo,setTitulo] = useState("ninguno");
    const [categorias, setCategorias] = useState([]);
    const [autor, setautor] = useState([]);
    
    const url = "http://localhost:3001/";

    const { id } = useParams();
    
    useEffect(()=>{
        async function getcat(){
            axios.get(`${url}categorias`).then((response)=>setCategorias(response.data));
        }
        getcat();
    },[]);

    useEffect(()=>{
        async function getcont(){
            axios.get(`${url}tienda/ninguno`).then((response) => setContenidos(response.data));
        }
        getcont();
    },[]);
    const submitFiltro = () => {
        if (filtro=="autor/"){
            axios.get("http://localhost:3001/"+filtro+autor).then((response)=>setContenidos(response.data));
        }
        else{
        axios.get("http://localhost:3001/"+filtro+titulo).then((response)=>setContenidos(response.data));
        }
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
            <Dropdown.Item  onClick={(e)=> {setTitulo(e.target.textContent);setfiltro("")}}>Top_10_descargas</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> {setTitulo(e.target.textContent);setfiltro("")}}>Top_10_Calificaciones</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> {setTitulo(e.target.textContent);setfiltro("autor/");}}>Autor</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> {setTitulo(e.target.textContent);setfiltro("tienda/")}}>Ninguno</Dropdown.Item>
            <Dropdown.Divider />
            <DropdownButton
                as={ButtonGroup} 
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title="Categorias"
            >
                {categorias.map((categoria)=>(
                <Dropdown.Item onClick={(e)=> {setTitulo(e.target.textContent); setfiltro("categorias/");}}>{categoria.nombre_categoria}</Dropdown.Item>
                ))
                }
            </DropdownButton>


        </DropdownButton>
        {console.log(filtro)}
        {console.log(titulo)}
                    </Col>
                    <Col>
                        <input type="text" id="Autor" onChange={(e)=>{
                setautor(e.target.value);
            }} placeholder="Escribir Autor" /><br /><br />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <input type="button" value="Aplicar Filtro" onClick={submitFiltro}/>
                    </Col>
                </Row>

            </form>



            <Form className="myContainer">
                <Row className="align-items-center">
                    {contenidos.map((contenido) => (
                        <Box
                            id = {contenido.id_contenido}
                            id_cliente={id}
                            from = {"tienda2"}
                            calificar = {false}
                            titulo={contenido.nombre}
                            urlImg={require("../" + contenido.imagen)}
                            precioActual={contenido.precio}
                            precioAnterior="299"
                            ratingPromedio="3"
                        />
                    ))}
                </Row>
            </Form>


        </div>


    );
}



export default Tienda;