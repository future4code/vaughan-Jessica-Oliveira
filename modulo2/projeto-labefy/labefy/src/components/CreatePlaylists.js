import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class CreatePlaylists extends React.Component {
  state = {
    playlistName: "",
  };

  handlePlaylistName = (event) => {
    this.setState({ playlistName: this.state.playlistName });
  };

  createPlaylist = () => {
    const urlCreatePlaylist =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const bodyCreatePlaylist = { name: this.state.playlistName };

    const headersAxios = {
      headers: { Authorization: "jessica-oliveira-vaughan" },
    };
    axios
      .post(urlCreatePlaylist, bodyCreatePlaylist, headersAxios)
      .then(alert("Playlist criada com sucesso"))
      .catch(alert("Não foi possível criar sua playlist, tente novamente"));
  };
  render() {
    return (
      <>
        <h2>Crie aqui sua playlist</h2>
        <input
          placeholder="nome da playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylist}>Criar</button>
      </>
    );
  }
}
