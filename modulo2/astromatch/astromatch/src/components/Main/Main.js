import react from "react";
import styled from "styled-components";
import axios from "axios";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import AppBar from "../AppBar/AppBar";
import { useState } from "react";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("choose-profile");

  const switchPage = () => {
    switch (currentPage) {
      case "choose-profile":
        return <ChooseProfilePage />;
      case "match-list":
        return <MatchListPage />;
      default:
        <ChooseProfilePage />;
    }
  };

  const goToChooseProfilePage = () => {
    setCurrentPage("choose-profile");
  };

  const goToMatchListProfile = () => {
    setCurrentPage("match-list");
  };

  return (
    <>
      <AppBar
        chooseProfilePage={goToChooseProfilePage}
        matchListProfile={goToMatchListProfile}
      />
      {switchPage}
    </>
  );
}
