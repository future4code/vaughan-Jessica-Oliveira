import { Navigate } from "react-router-dom";

export const goTologin = () => {
  const history = useNavigate();

  return history("/login");
};

export const goToSignUp = () => {
  const history = useNavigate();

  return history("/cadastro");
};

export const goToAddRecipes = () => {
  const history = useNavigate();

  return history("/adicionar-receita");
};

export const goToRecipeDetail = (id) => {
  const history = useNavigate();

  return history(`/detalhe/${id}`);
};

export const goToRecipesList = () => {
  const history = useNavigate();

  return history("/");
};
