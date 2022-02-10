import react, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import HomeScreen from "./pages/HomeScreen";
import MatchScreen from "./pages/MatchScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  return (
    <>
      {HomeScreen}
      {MatchScreen}
    </>
  );
}

export default App;
