import React from "react";
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setLoginButton }) => {
  const history = useNavigate();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    // console.log(form);
    event.preventDefault();
    signUp(form, clear, history, setLoginButton);
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          variant={"outlined"}
          label={"Nome"}
          fullWidth
          margin={"normal"}
          type={"text"}
          required
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          variant={"outlined"}
          label={"Email"}
          fullWidth
          margin={"normal"}
          type={"email"}
          required
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          variant={"outlined"}
          label={"Senha"}
          fullWidth
          margin={"normal"}
          type={"password"}
          required
        />
        <Button
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          type={"submit"}
        >
          Cadastrar
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
