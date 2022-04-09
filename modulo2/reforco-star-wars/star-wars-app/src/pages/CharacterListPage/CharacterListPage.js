import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { CharacterCard } from "./styled";

export default class CharacterListPage extends React.Component {
  state = {
    charactersList: [],
  };

  componentDidMount() {
    this.getCharactersList();
  }

  getCharactersList = () => {
    axios
      .get(`${BASE_URL}/people`)
      .then((res) => this.setState({ charactersList: res.data.results }))
      .catch((error) => console.log(error.response));
  };

  render() {
    const characters = this.state.charactersList.map((person) => {
      return (
        <CharacterCard
          key={person.url}
          onClick={() => this.props.goToDetailPage(person.url)}
        >
          {person.name}
        </CharacterCard>
      );
    });
    return (
      <>
        <div>{characters}</div>
      </>
    );
  }
}
