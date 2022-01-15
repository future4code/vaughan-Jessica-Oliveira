import React from "react";
import styled from "styled-components";
import messages from "components/messages";

export class sending extends React.Component {
    state = {
        message = [],
    }

    sendButton = () => {
        const newMessage = {
            user: this.state.userName,
            message: this.state.messageContent
        }
  };



  render() {
    return (
      <>
        <button>Enviar</button>;
      </>
    );
  }
}
