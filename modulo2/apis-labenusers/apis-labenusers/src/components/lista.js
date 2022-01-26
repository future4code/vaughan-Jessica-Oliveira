import styled from "styled-components";
import axios from "axios";
import React from "react";

export default class Lista extends React.Component {
  render() {
    return (
      <div>
        <p>Lista de Usuários</p>
        <button onClick={this.props.registerPage}>Cadastrar usuário</button>
      </div>
    );
  }
}
