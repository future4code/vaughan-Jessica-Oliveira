import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goTologin } from "../routes/coordinator";

export default function useProtectedPage() {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goTologin(history);
    }
  }, [history]);
}
