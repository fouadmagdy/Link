import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import ICONS from "../helpers/icons";
import { Container } from "react-bootstrap";
export default function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="navbar-component">
        <Navbar.Brand href="#home">
          <img
            src={ICONS.linkLogo}
            alt="logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">News</Nav.Link>
            <Nav.Link href="#about">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">
              <Button variant="outline-secondary">Sign up</Button>
            </Nav.Link>
            <NavDropdown title="En" id="basic-nav-dropdown">
              <NavDropdown.Item href="#en">En</NavDropdown.Item>
              <NavDropdown.Item href="#ar">Ar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
