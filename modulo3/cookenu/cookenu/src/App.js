import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout" : "Login");
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton} />
        <Router setLoginButton={setLoginButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
