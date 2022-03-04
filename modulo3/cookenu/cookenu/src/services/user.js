import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";

export const login = (form, clear, history, setLoginButton) => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      clear();
      goToRecipesList(history);
      setLoginButton("Logout");
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    });
};

export const signUp = (form, clear, history, setLoginButton) => {
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToRecipesList(history);
      setLoginButton("Logout");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
