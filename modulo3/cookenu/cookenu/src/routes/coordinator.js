export const goTologin = (history) => {
  return history("/login");
};

export const goToSignUp = (history) => {
  return history("/cadastro");
};

export const goToAddRecipes = (history) => {
  return history("/adicionar-receita");
};

export const goToRecipeDetail = (history, id) => {
  return history(`/detalhe/${id}`);
};

export const goToRecipesList = (history) => {
  return history("/");
};
