import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';

function DropDown() {

    let variant = "light"
    const[titulo,setTitulo] = useState("Ninguno");

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
                <Dropdown.Item onClick={(e)=> setTitulo(e.target.textContent)}>action1</Dropdown.Item>
                <Dropdown.Item onClick={(e)=> setTitulo(e.target.textContent)}>action2</Dropdown.Item>
                <Dropdown.Item onClick={(e)=> setTitulo(e.target.textContent)}>action3</Dropdown.Item>
            </DropdownButton>


        </DropdownButton>
    )
}


export default DropDown;