import React, { Component, useState, useEffect } from "react";
import Body from "../components/Body";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import api from "../services/api";
import { GoRuby } from "react-icons/go";
import { GrCode } from "react-icons/gr";
import Alert from "react-bootstrap/Alert";
import Legends from "../components/Legends";
import Spinner from "react-bootstrap/Spinner";

// import { Container } from './styles';

function getCommandBadge(price) {
  if (price <= 0) {
    return <Badge variant="success">GRÁTIS</Badge>;
  } else if (price <= 100) {
    return (
      <Badge variant="secondary">
        {price} <GoRuby />
      </Badge>
    );
  } else if (price <= 350) {
    return (
      <Badge variant="warning">
        {price} <GoRuby />
      </Badge>
    );
  } else if (price >= 350) {
    return (
      <Badge variant="danger">
        {price} <GoRuby />
      </Badge>
    );
  }
  return (
    <Badge variant="success">
      {price} <GoRuby />
    </Badge>
  );
}

function getCommandCooldown(cooldown) {
  return cooldown === 0 ? "Não tem" : cooldown + " minutos";
}

function getCommandAction(example, action) {
  if (example !== null) {
    return action;
  } else {
    return action !== null ? action : "Sem ações";
  }
}

function getCommandPlate(name) {
  return (
    <Badge className="command" variant="dark">
      !{name}
    </Badge>
  );
}

function getCategoryName(categoryId) {
  switch (categoryId) {
    case 16: //Geral
      return "Geral";
    case 17:
      return "Social";
    case 18:
      return "Moderador";
    case 19:
      return "Song Request";
    case 20:
      return "Minigames";
    case 21:
      return "Special";
    case 22:
      return "Efeitos Sonoros";
  }
}

export default class TableCommands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Commands: [],
    };
  }

  componentWillMount() {
    <Spinner animation="border" />;
  }

  componentDidMount() {
    this.renderCommands();
  }

  renderCommands = async () => {
    try {
      let res = await api.get("/commands");
      let commands = res.data;
      // this will re render the view with new data
      this.setState({
        Commands: commands.map((command) => (
          <tbody key={command.id}>
            <tr>
              <td className="command-name">
                {getCommandPlate(command.commandname)}
              </td>
              <td className="command-action">
                {command.action !== null ? command.action : "Sem Ações"}
              </td>
              <td className="command-example">
                {command.example !== null ? command.example : ""}
              </td>
              <td className="command-cooldown">
                {getCommandCooldown(command.cooldown)}
              </td>
              <td className="command-price">
                {getCommandBadge(command.price)}
              </td>
            </tr>
          </tbody>
        )),
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Com o mesmo nome do arquivo
  render() {
    return (
      <Body icon={<GrCode />} title="Lista de Comandos da Live">
        <div className="commands-table">
          <div className="teta-points-explanation">
            <Alert key="success" variant="success">
              <GoRuby /> (Teta Points) são obtidos assistindo minha live, a cada
              minuto que passa, <strong>5 pontos</strong> são adicionados à
              você!
            </Alert>
          </div>

          <Table bordered hover size="sm" className="tabela">
            <thead>
              <tr className="trcomandos">
                <th width="10%">Comando</th>
                <th width="50%">Ação</th>
                <th width="20%">Exemplo</th>
                <th width="10">Cooldown</th>
                <th width="10%">Preço</th>
              </tr>
            </thead>
            {this.state.Commands}
          </Table>
          <div>
            <Legends />
          </div>
        </div>
      </Body>
    );
  }
}

/**
 * abaixo de : <tbody key={command.id}>
 * 
 * <tr id="test1">
              <td className="category" colSpan="5">
                <strong>{getCategoryName(command.category)}</strong>
              </td>
            </tr>
 */
