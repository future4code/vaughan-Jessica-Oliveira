import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ScreenContainer, RecipeContainer } from "./styled";
import AddRecipesForm from "./AddRecipesForm";
import { Typography } from "@material-ui/core";

const AddRecipesPage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography
          gutterBottom
          variant={"h4"}
          align={"center"}
          color={"textPrimary"}
        >
          Adicionar Nova Receita
        </Typography>
        <AddRecipesForm />
      </RecipeContainer>
    </ScreenContainer>
  );
};

export default AddRecipesPage;
