import React, { Component } from "react";

// import { Container } from './styles';
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

export default class Legends extends Component {
  render() {
    return (
      <Alert key="secondary" variant="secondary">
        <p align="center">
          <font size="1px">Legenda dos Preços</font>{" "}
        </p>
        <p align="center">
          <Badge variant="success">GRÁTIS</Badge>{" "}
          <Badge variant="secondary">Barato</Badge>{" "}
          <Badge variant="warning">Caro</Badge>{" "}
          <Badge variant="danger">Muito Caro</Badge>{" "}
        </p>
      </Alert>
    );
  }
}
