import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnProtectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ loginButton, setLoginButton }) => {
  useUnProtectedPage();
  const history = useNavigate();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm loginButton={loginButton} setLoginButton={setLoginButton} />
      <SignUpButtonContainer>
        <Button
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
          type={"submit"}
          onClick={() => goToSignUp(history)}
        >
          Não possui conta? Cadastre-se aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
