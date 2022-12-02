import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

var ini = 0

function DropDownPromo() {

    let variant = "light"
    const [titulo, setTitulo] = useState("Ninguno");
    const [categorias, setCategorias] = useState([]);
    const url = "http://localhost:3001/";
    console.log(titulo)

    useEffect(() => {
        async function getcat() {
            axios.get(`${url}categorias`).then((response) => setCategorias(response.data));
        }
        getcat();
    }, []);

    //obtenemos la lista de autores
    const [autores, setAutores] = useState([]);
    const url2 = "http://localhost:3001/get_autores";
    useEffect(() => {
        async function getaut() {
            axios.get(url2).then((response) => setAutores(response.data));
        }
        getaut();
    }, []);

    console.log("autores", autores)


    return (
        <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={titulo}
        >
   

            <Dropdown.Divider />
            
            <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title="Categorias"
            >
                {categorias.map((categoria) => (
                    <Dropdown.Item onClick={(e) => setTitulo(e.target.textContent)}>{categoria.nombre_categoria}</Dropdown.Item>
                ))
                }
            </DropdownButton>

            <Dropdown.Divider />
            <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title="Autores"
            >
                {autores.map((autor) => (
                    <Dropdown.Item onClick={(e) => setTitulo(e.target.textContent)}>{autor.nombre}</Dropdown.Item>
                ))
                }
            </DropdownButton>


        </DropdownButton>
    )
}

export default DropDownPromo;