import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function RecipesListPage() {
  useProtectedPage();
  return (
    <>
      <h1>RecipesListPage</h1>
      <Button variant="contained" color="primary">
        Lista de Receitas
      </Button>
    </>
  );
}
