import * as React from "react";
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { StyledToolBar } from "./styled";
import { goTologin, goToRecipesList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ loginButton, setLoginButton }) => {
  const history = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const loginButtonAction = () => {
    if (token) {
      logout();
      setLoginButton("Login");
      goTologin(history);
    } else {
      goTologin(history);
    }
  };
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipesList(history)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={loginButtonAction} color="inherit">
          {loginButton}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
