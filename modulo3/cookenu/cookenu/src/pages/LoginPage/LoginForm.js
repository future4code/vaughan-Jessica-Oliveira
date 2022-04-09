import React, { useState } from "react";
import { InputsContainer } from "./styled";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ setLoginButton }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setLoginButton, setIsLoading);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"email"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          type={"submit"}
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Fazer Login!</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
