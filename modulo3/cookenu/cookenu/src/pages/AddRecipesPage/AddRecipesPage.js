import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function AddRecipesPage() {
  useProtectedPage();
  return (
    <>
      <h1>AddRecipesPage</h1>
    </>
  );
}
