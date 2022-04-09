import styled from "styled-components";
import axios from "axios";
import React from "react";

export default class Cadastro extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const urlCreateUsers =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "jessica-vaughan" },
    };
    const body = { name: this.state.name, email: this.state.email };
    axios
      .post(urlCreateUsers, body, axiosConfig)
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ name: "" });
        this.setState({ email: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
        this.setState({ name: "" });
        this.setState({ email: "" });
      });
  };

  render() {
    return (
      <div>
        <h2>Cadastre-se aqui!</h2>
        <input
          placeholder={"nome"}
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          placeholder={"email"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.createUser}>Cadastrar</button>
        <button onClick={this.props.usersListPage}>Lista de Usuários</button>
      </div>
    );
  }
}
