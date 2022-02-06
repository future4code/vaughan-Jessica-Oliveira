import React from "react";
import axios from "axios";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

export default class App extends React.Component {
  state = {
    currentPage: "lista",
    clickedCharacterUrl: "",
  };

  selectPage = () => {
    switch (this.state.currentPage) {
      case "list":
        return <CharacterListPage goToDetailPage={this.goToDetailPage} />;
      case "detail":
        return (
          <CharacterDetailPage
            goToListPage={this.goToListPage}
            url={this.state.clickedCharacterUrl}
          />
        );
      default:
        return <CharacterListPage goToDetailPage={this.goToDetailPage} />;
    }
  };

  goToDetailPage = (url) => {
    this.setState({ currentPage: "detail", clickedCharacterUrl: url });
  };

  goToListPage = () => {
    this.setState({ currentPage: "list", clickedCharacterUrl: "" });
  };
  render() {
    return <div>{this.selectPage()}</div>;
  }
}
