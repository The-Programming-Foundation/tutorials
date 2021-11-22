import React from 'react';
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../style/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <Container fluid style={{ padding: "0 15" }} >
      <Navbar collapseOnSelect expand="md" bg="white" variant="black">
        <Navbar.Brand href="https://www.smarterus.org/" className="navbarbrand">The Programming Foundation</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive">
          <FontAwesomeIcon icon={faBars} style={{ color: "#000" }} aria-controls="navbarResponsive" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Nav.Link href="https://www.smarterus.org/home" activeclassname="active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://www.theprogrammingfoundation.org/charter" activeclassname="active">Charter</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://www.theprogrammingfoundation.org/donate" activeclassname="active">Donate</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeclassname="active">Learn</Link>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
