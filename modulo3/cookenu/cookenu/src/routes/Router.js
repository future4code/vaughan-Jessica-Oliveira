import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ loginButton, setLoginButton }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage setLoginButton={setLoginButton} />}
      />
      <Route
        path="/cadastro"
        element={<SignUpPage setLoginButton={setLoginButton} />}
      />
      <Route path="/" element={<RecipesListPage />} />
      <Route path="/adicionar-receita" element={<AddRecipesPage />} />
      <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
