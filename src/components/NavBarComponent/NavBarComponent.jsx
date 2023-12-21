import CarWidget from './CarWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Link to='/' style={{backgroungColor: 'blue'}}>YCDesings</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Principal</Nav.Link>
            <NavDropdown title="Mujeres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Camisetas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
               Productos Destacados
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hombres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Camisetas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
               Productos Destacados
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Niños" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action8">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Camisetas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10">
               Productos Destacados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CarWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent