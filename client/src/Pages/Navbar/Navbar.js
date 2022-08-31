import './Navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap'

import logo from '../images/d.png'

function Barra() {
  return (
    <>
      <Navbar fixed="top" className="barra">
        <Container>
          <Navbar.Brand href="/grid">
            <img
              alt=""
              src={logo}
              width="44"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bienvenido
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/reporte">Reporte</Nav.Link>
              <Nav.Link href="/grid">Vista</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Barra;


