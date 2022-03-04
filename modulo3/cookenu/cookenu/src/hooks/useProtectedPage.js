import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goTologin } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goTologin(history);
    }
  }, [history]);
};
export default useProtectedPage;
