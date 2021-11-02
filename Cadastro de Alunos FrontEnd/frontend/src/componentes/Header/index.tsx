import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Header: React.FC = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={Link} className="nav-Item" to="/">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} className="nav-Item" to="/aluno" >Consulta</Nav.Link>
                <Nav.Link as={Link} className="nav-Item" to="/aluno_cadastro" >Cadastrar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    );
}
 
export default Header;
