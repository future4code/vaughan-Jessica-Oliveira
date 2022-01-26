import "./App.css";
import styled from "styled-components";
import axios from "axios";
import React from "react";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";

export default class App extends React.Component {
  state = {
    currentPage: "cadastro",
  };

  switchPage = () => {
    switch (this.state.currentPage) {
      case "cadastro":
        return <Cadastro usersListPage={this.usersListPage} />;
      case "lista":
        return <Lista registerPage={this.registerPage} />;
      default:
        return <div>Página não encontrada, tente novamente!</div>;
    }
  };

  registerPage = () => {
    this.setState({ currentPage: "cadastro" });
  };

  usersListPage = () => {
    this.setState({ currentPage: "lista" });
  };

  render() {
    return <>{this.switchPage()}</>;
  }
}
