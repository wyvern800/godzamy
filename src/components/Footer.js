import React from "react";

// import { Container } from './styles';
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

export default function Footer() {
  return (
    <footer className="container">
      <Navbar bg="light" variant="light" sticky="bottom">
        <strong className="credits">Made with ♥ by Godzamy</strong>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Version:
            <Badge pill variant="dark">
              0.2
            </Badge>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
}
