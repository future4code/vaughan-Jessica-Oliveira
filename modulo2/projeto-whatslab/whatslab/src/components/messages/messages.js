import React from "react";
import styled from "styled-components";

export class Messaging extends React.Component {
  state = {
    userName: "",
    messageContent: "",
  };

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeMessageContent = (event) => {
    this.setState({ messageContent: event.target.value });
  };

  render() {
    return (
      <>
        <input
          name={"Usuário"}
          onChange={this.onChangeUserName}
          value={this.state.userName}
          placeholder="Usuário"
        />
        <input
          name={"Mensagem"}
          onChange={this.onChangeMessageContent}
          value={this.state.messageContent}
          placeholder="Mensagem"
        />
      </>
    );
  }
}
