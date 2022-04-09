import React from "react";
import axios from "axios";

export default class CharacterDetailPage extends React.Component {
  state = {
    character: {},
    homeWorld: "",
  };

  componentDidMount() {
    this.getCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.character !== prevState.character) {
      this.getHomeWorld();
    }
  }

  getCharacter = () => {
    axios
      .get(this.props.url)
      .then((response) => this.setState({ character: response.data }))
      .catch((error) => console.log(error.response));
  };

  getHomeWorld = () => {
    axios
      .get(this.state.character.homeworld)
      .then((response) => this.setState({ homeWorld: response.data.name }))
      .catch((error) => console.log(error.response));
  };
  render() {
    console.log(this.state.character);
    return (
      <>
        {this.state.character.name && this.state.homeWorld ? (
          <div>
            <p>Nome: {this.state.character.name}</p>
            <p>Planeta: {this.state.homeWorld}</p>
          </div>
        ) : (
          <p>Carregando...</p>
        )}

        <button onClick={this.props.goToListPage}>Voltar para lista</button>
      </>
    );
  }
}
