import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToRecipesList } from "../routes/coordinator";

const useUnProtectedPage = () => {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToRecipesList(history);
    }
  }, [history]);
};

export default useUnProtectedPage;
