import react from "react";
import styled from "styled-components";
import axios from "axios";

export default function AppBar(props) {
  return (
    <>
      <button onClick={props.goToChooseProfilePage}>Perfis</button>
      <p>Astromatch</p>
      <button onClick={props.goToMatchListPage}>Matches</button>
    </>
  );
}
