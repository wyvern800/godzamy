import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// import { Container } from './styles';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Godzamy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey="commands"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Link className="home" href="#home">
            Home
          </Nav.Link>
          <Nav.Link href="#commands">Comandos</Nav.Link>
          <Nav.Link disabled href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link disabled href="#store">
            Loja
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Twitch</Nav.Link>
          <Nav.Link href="#deets">Github</Nav.Link>
          <Nav.Link href="#deets">Facebook</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
