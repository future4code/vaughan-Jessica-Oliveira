import React from "react";
import styled from "styled-components";
import axios from "axios";
import CreatePlaylists from "./components/CreatePlaylists.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <CreatePlaylists />
      </>
    );
  }
}
