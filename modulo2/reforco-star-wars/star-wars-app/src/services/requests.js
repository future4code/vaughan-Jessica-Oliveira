import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getCharacter = (url, saveData) => {
  axios
    .get(url)
    .then((response) => saveData(response.data))
    .catch((error) => console.log(error.response));
};

export const getHomeWorld = (url, saveData) => {
  axios
    .get(url)
    .then((response) => saveData(response.data.name))
    .catch((error) => console.log(error.response));
};

export const getCharactersList = (saveData) => {
  axios
    .get(`${BASE_URL}/people`)
    .then((res) => saveData(res.data.results))
    .catch((error) => console.log(error.response));
};
