import React, { FormEvent } from "react";
import {
  BtnLogin,
  ContainerForm,
  ContainerInput,
  ContainerPage,
  FormLogin,
  ImgLogin,
  InputLogin,
  TitleInput,
} from "./login-styled";
import { api } from "../../utils/api/api";
import { LoginRequest } from "../../utils/types/requests";
import { useNavigate } from "react-router-dom";

export function PageLogin() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const Login: LoginRequest = {
      email: e.currentTarget.loginEmail.value,
      password: e.currentTarget.loginPassword.value,
    };

    const userData = await api.login(Login);
    const getUser = await api.getUser();

    if (getUser) {
      const id = getUser.id;
      localStorage.setItem("id", id);
      const role = getUser.role;
      localStorage.setItem("role", role);
      navigate("/" + role + "/" + id);
    } else {
      navigate("/");
      return;
    }
  }
  return (
    <ContainerPage>
      <ImgLogin
        src="https://www.acif.org.br/wp-content/uploads/2019/02/Plano-de-negócio.jpg"
        alt=""
      />
      <ContainerForm>
        <h2>Login</h2>
        <FormLogin onSubmit={handleSubmit}>
          <ContainerInput>
            <TitleInput>Email</TitleInput>
            <InputLogin
              type="text"
              placeholder="Ex: nome@gmail.com"
              name="loginEmail"
              required
            />
          </ContainerInput>

          <ContainerInput>
            <TitleInput>Senha</TitleInput>
            <InputLogin
              type="password"
              placeholder="Ex: senha123"
              name="loginPassword"
              required
            />
          </ContainerInput>
          <ContainerInput>
            <BtnLogin type="submit">Login</BtnLogin>
          </ContainerInput>
        </FormLogin>
      </ContainerForm>
    </ContainerPage>
  );
}
