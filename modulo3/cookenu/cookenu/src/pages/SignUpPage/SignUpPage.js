import React from "react";
import { LoginButtonContainer, LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm";
import { goTologin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import useUnProtectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({ setLoginButton }) => {
  useUnProtectedPage();
  const history = useNavigate();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm setLoginButton={setLoginButton} />
      <LoginButtonContainer>
        <Button
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
          type={"submit"}
          onClick={() => goTologin(history)}
        >
          Já possui conta? Entre aqui!
        </Button>
      </LoginButtonContainer>
    </ScreenContainer>
  );
};

export default SignUpPage;
