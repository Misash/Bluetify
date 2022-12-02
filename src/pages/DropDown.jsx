import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

function DropDown() {

//Este componente solo lo usaremos para seleccionar filtros en la tienda, 
//Un dropdown nos permite escoger una de varias determinadas opciones,

    let variant = "light"
    const[titulo,setTitulo] = useState("Ninguno");
    const [categorias, setCategorias] = useState([]);
    const url="http://localhost:3001/";
    
    //Conseguimos todas las categorias para poder filtrar por categoria
    useEffect(()=>{
        async function getcat(){
            axios.get(`${url}categorias`).then((response)=>setCategorias(response.data));
        }
        getcat();
    },[]);

    return (
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
    )
}

export default DropDown;