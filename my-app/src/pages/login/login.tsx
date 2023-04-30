import React, { FormEvent } from "react";
import {
  BtnLogin,
  ContainerForm,
  ContainerInput,
  ContainerPage,
  FormLogin,
  ImgLogin,
  InputLogin,
  TitleContainer,
  TitleInput,
} from "./login-styled";
import { api } from "../../utils/api/api";
import { LoginRequest } from "../../utils/types/requests";
import { useNavigate } from "react-router-dom";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../../components/forms/create/user/createUserForm-styles";

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
        <div>
          <FormStyle onSubmit={handleSubmit}>
          <TitleForm>HYPERLOCAL</TitleForm>
            <InputContainer>
              <label>Email</label>
              <InputForm
                type="text"
                placeholder="Ex: nome@gmail.com"
                name="loginEmail"
                required
              />
            </InputContainer>

            <InputContainer>
              <label>Senha</label>
              <InputForm
                type="password"
                placeholder="Ex: senha123"
                name="loginPassword"
                required
              />
            </InputContainer>
            <BtnCadastrar type="submit">LOGIN</BtnCadastrar>
          </FormStyle>
        </div>
      </ContainerForm>
    </ContainerPage>
  );
}
