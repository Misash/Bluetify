import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../CSS/NavBar.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

function NavBar(props) {
    //Esta navBar solo nos ayudara a desplazarnos mejor en la pagina
    //estara presente en el lado de cliente.
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
                        <Nav.Link href={"/Biblioteca/"+props.id} >Biblioteca</Nav.Link>
                        <Nav.Link href={"/Tienda/"+props.id}>Tienda</Nav.Link>
                        <Nav.Link href={"/ActivarCodigo/"+ props.id}>Activar Codigo</Nav.Link>
                        <Nav.Link href={"/Cliente/"+props.id}>Ver Perfil</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;