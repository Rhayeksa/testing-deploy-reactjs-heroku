import { useState } from 'react';
import { X } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand='xxl' className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Rhayeksa Dewanga Setiawan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xxl"
            aria-labelledby="offcanvasNavbarLabel-expand-xxl"
            placement="end"
            show={show}
          >
            <Offcanvas.Header>
              <Offcanvas.Title
                as={Link} to="/"
                id="offcanvasNavbarLabel-expand-xxl"
                onClick={handleClose}
                style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}
              >
                Rhayeksa Dewangga Setiawan
              </Offcanvas.Title>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl" onClick={handleClose}>
                <Button variant='outline-secondary'>
                  <X />
                </Button>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" onClick={handleClose}>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/study">Study</Nav.Link>
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default OffcanvasExample;