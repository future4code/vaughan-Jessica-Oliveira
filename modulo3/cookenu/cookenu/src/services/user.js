import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";

export const login = (form, clear, history, setLoginButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(history);
      setLoginButton("Logout");
    })
    .catch((error) => {
      setIsLoading(false);
      alert(error.response.data.message);
    });
};

export const signUp = (form, clear, history, setLoginButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(history);
      setLoginButton("Logout");
    })
    .catch((error) => {
      setIsLoading(false);
      alert(error.response.data.message);
    });
};
