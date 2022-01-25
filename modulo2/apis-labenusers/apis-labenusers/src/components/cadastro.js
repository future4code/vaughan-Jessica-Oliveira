import styled from "styled-components";
import axios from "axios";
import React from "react";

export default class Cadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    list: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

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
      headers: { Authorization: "jessica-oliveira-vaughan" },
    };
    const body = { name: this.state.inputName, email: this.state.inputEmail };

    axios
      .post(urlCreateUsers, body, axiosConfig)
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ name: "" });
        this.setState({ email: "" });
        this.getAllUsers();
      })
      .catch((error) => {
        // alert("Não foi possível cadastrar o usuário, tente novamente");
        alert(error);
        this.setState({ name: "" });
        this.setState({ email: "" });
      });
  };

  getAllUsers = () => {
    const urlGetAllUsers =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "jessica-oliveira-vaughan" },
    };
    axios
      .get(urlGetAllUsers, axiosConfig)
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
    const userList = this.state.list.map((user) => {
      return (
        <div>
          <p>{user.name}</p>
        </div>
      );
    });
    console.log("estado: ", this.state);
    return (
      <div>
        <p>Cadastre seu usuário</p>
        <input
          value={this.state.inputName}
          onChange={this.handleName}
          placeholder="Nome"
        />
        <input
          value={this.state.inputEmail}
          onChange={this.handleEmail}
          placeholder="Email"
        />
        <button onClick={this.createUser}>Cadastrar usuário</button>
        <button onClick={this.getAllUsers}>Lista de Usuários</button>
      </div>
    );
  }
}
