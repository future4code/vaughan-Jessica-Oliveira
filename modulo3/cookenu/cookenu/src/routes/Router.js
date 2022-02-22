import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/" element={<RecipesListPage />} />
        <Route path="/adicionar-receita" element={<AddRecipesPage />} />
        <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;