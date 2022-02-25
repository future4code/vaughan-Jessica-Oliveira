import * as React from "react";
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { StyledToolBar } from "./styled";
import { goTologin, goToRecipesList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const history = useNavigate();
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipesList(history)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={() => goTologin(history)} color="inherit">
          Login
        </Button>
      </StyledToolBar>
    </AppBar>
  );
}
