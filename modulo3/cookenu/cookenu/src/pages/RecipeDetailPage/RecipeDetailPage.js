import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function RecipeDetailPage() {
  useProtectedPage();
  return (
    <>
      <h1>RecipeDetailPage</h1>
    </>
  );
}
