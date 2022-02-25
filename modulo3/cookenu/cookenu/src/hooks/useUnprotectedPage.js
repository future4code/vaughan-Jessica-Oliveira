import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToRecipesList } from "../routes/coordinator";

export default function useUnProtectedPage() {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToRecipesList(history);
    }
  }, [history]);
}
