import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";

export const login = (form, clear, history) => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      clear();
      goToRecipesList(history);
    })
    .catch((error) => {
      console.log(error);
      alert("Erro no login, tente novamente.");
    });
};

export const signUp = (form, clear, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToRecipesList(history);
    })
    .catch((error) => {
      alert("Erro no cadastro, tente novamente");
    });
};
