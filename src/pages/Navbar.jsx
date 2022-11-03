import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../CSS/NavBar.css"

function NavBar() {
    return (
        <Navbar className="NavBar" bg="ligth" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
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
                        <Nav.Link href="/Biblioteca">Biblioteca</Nav.Link>
                        <Nav.Link href="/Tienda">Tienda</Nav.Link>
                        <Nav.Link href="/Codigo">Activar Codigo</Nav.Link>
                        <Nav.Link href="/Perfil">Ver Perfil</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;