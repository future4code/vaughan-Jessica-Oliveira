import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipesListPage = () => {
  useProtectedPage();

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);
  console.log(recipes);

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        // onClick={() => null}
      />
    );
  });

  return <div>{recipeCards}</div>;
};

export default RecipesListPage;
