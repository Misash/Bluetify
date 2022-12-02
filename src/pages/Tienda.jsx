import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from "./Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Tienda.css"
import Navbar from "./Navbar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavBarAdmin from "./NavbarAdmin"
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
    //En tienda podremos visualizar todos los contenidos y filtrarlos.

    const [contenidos, setContenidos] = useState([]);
    const [filtro, setfiltro] = useState([]);
    let variant = "light"
    const[titulo,setTitulo] = useState("ninguno");
    const [categorias, setCategorias] = useState([]);
    const [autor, setautor] = useState([]);
    
    const url = "http://localhost:3001/";

    const { id } = useParams();

    console.log("contenido: ", contenidos)
    
    //Consiguiendo todas las categorias para los filtros
    useEffect(()=>{
        async function getcat(){
            axios.get(`${url}categorias`).then((response)=>setCategorias(response.data));
        }
        getcat();
    },[]);

    //Aqui conseguimos los contenidos que aparecen por default
    useEffect(()=>{
        async function getcont(){
            axios.get(`${url}tienda/ninguno`).then((response) => setContenidos(response.data));
        }
        getcont();
    },[]);

    //Submit filtro usa las variables 'filtro' y 'autor' para llamar una funcion del backend que buscara con esos
    //parametros
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

            {(id == "admin" )? <NavBarAdmin/> : <Navbar id={id} /> }
    
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
                            from = { (id == "admin")? "admin" : "tienda"}
                            calificar = {false}
                            titulo={contenido.nombre}
                            urlImg={require("../" + contenido.imagen)}
                            precioActual={ contenido.promocion?  contenido.precio - contenido.descuento : contenido.precio}
                            precioAnterior= { contenido.promocion?  contenido.precio  : ""}
                            ratingPromedio="3"
                        />
                    ))}
                </Row>
            </Form>


        </div>


    );
}



export default Tienda;