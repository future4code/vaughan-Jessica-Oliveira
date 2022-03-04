import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecipesPage = () => {
  useProtectedPage();
  return (
    <>
      <h1>AddRecipesPage</h1>
    </>
  );
};

export default AddRecipesPage;
