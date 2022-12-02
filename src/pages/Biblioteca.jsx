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
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useParams } from "react-router-dom"
var ini=0;



//La biblioteca tendra contenidos que el usuario halla comprado
function Biblioteca() {
    const [contenidos, setContenidos] = useState([]);
    const [filtro, setfiltro] = useState([]);
    let variant = "light"
    const[titulo,setTitulo] = useState("Ninguno");
    const [categorias, setCategorias] = useState([]);
    
    const url = "http://localhost:3001/";
    
    const { id } = useParams();


    //Conseguimos las categorias de la base de datos
    useEffect(()=>{
        async function getcat(){
            axios.get(`${url}categorias`).then((response)=>setCategorias(response.data));
        }
        getcat();
    },[]);

    //Conseguimos los contenidos de la biblio
    useEffect(()=>{
        async function getcont(){
            axios.get(`${url}biblioteca/`+id).then((response) => setContenidos(response.data));
        }
        getcont();
    },[]);
    const submitFiltro = () => {
        axios.get("http://localhost:3001/categorias/"+titulo).then((response)=>setContenidos(response.data));
    }
 
   //Creamos boxes donde estara la informacion de los contenidos que hemos conseguido previamente
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
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Top 10 descargas</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Top 10 Calificaciones</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Autor</Dropdown.Item>
            <Dropdown.Item  onClick={(e)=> setTitulo(e.target.textContent)}>Ninguno</Dropdown.Item>
            <Dropdown.Divider />
            <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title="Categorias"
            >
                {categorias.map((categoria)=>(
                <Dropdown.Item onClick={(e)=> setTitulo(e.target.textContent)}>{categoria.nombre_categoria}</Dropdown.Item>
                ))
                }
            </DropdownButton>


        </DropdownButton>
                    </Col>
                    <Col>
                        <input type="text" id="Autor" placeholder="Escribir Autor" /><br /><br />
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
                            from = {"biblioteca"}
                            id_cliente={id}
                            calificar = {true}
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



export default Biblioteca;