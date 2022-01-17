import logo from "./logo.svg";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Etapa1 />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };
  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        <Button onClick={this.irParaProximaEtapa}>Próxima Etapa</Button>
      </div>
    );
  }
}
