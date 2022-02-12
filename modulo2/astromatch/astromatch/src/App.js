import react, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import HomePage from "./components/HomePage/HomePage";
import MatchesPage from "./components/MatchesPage/MatchesPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home-page");

  const switchPage = () => {
    switch (currentPage) {
      case "home-page":
        return <HomePage />;
      case "matches-page":
        return <MatchesPage />;
    }
  };

  const goToHomePage = () => {
    setCurrentPage("home-page");
  };

  const goToMatchesPage = () => {
    setCurrentPage("matches-page");
  };

  return (
    <>
      <div>{switchPage()}</div>
    </>
  );
}

export default App;
