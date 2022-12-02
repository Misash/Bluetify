import React from "react"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../CSS/NavBar.css"


function NavBar(props) {
    return (
        <Navbar className="NavBar" bg="ligth" expand="lg">
            <Container>
            <Navbar.Brand href="/">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/61/61089.png?w=360"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Bluetify logo"
                />
            </Navbar.Brand>
                <Navbar.Brand href="/">Bluetify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={"/CrearSaldo/"} >Cargar Saldo</Nav.Link>
                        <Nav.Link href={"/CrearContenido"}>Subir Contenido</Nav.Link>
                        <Nav.Link href={"/CrearCategoria"}>Crear Categoria</Nav.Link>
                        <Nav.Link href={"/CrearAutor"}>Crear Autor</Nav.Link>
                        <Nav.Link href={"/Promocion"}>Crear Promoción</Nav.Link>
                        <Nav.Link href={"/Clientes"}>Clientes</Nav.Link>
                        <Nav.Link href={"/tienda2"}>Tienda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

