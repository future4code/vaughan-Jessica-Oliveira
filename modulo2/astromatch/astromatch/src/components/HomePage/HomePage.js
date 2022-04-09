import react, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function HomePage() {
  const [getProfileToChoose, setGetProfileToChoose] = useState({});

  const profileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jessica/person"
      )
      .then((response) => {
        setGetProfileToChoose(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>{profileToChoose()}</div>
    </>
  );
}
