import React from "react";
import { FormEvent, useState } from "react";
import { BtnCadastrar, ContentDiv, FormStyle, InputContainer, InputForm, TitleForm } from "./createUserForm-styles";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";

export function CreateUserForm() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");
  const id = localStorage.getItem("id");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newRole = "";

    if (userRole == "MANAGER") {
      newRole = "OPERATOR";
    } else if (userRole == "OPERATOR") {
      newRole = "FRANCHISEE";
    } else if (userRole == "FRANCHISEE") {
      newRole = "EMPLOYEE";
    }

    const newUser: CreateUser = {
      name: e.currentTarget.userName.value,
      email: e.currentTarget.userEmail.value,
      password: e.currentTarget.userPassword.value,
      confirmPassword: e.currentTarget.userConfirmPassword.value,
      cpf: e.currentTarget.userCPF.value,
      address: e.currentTarget.userAddress.value,
      phone: e.currentTarget.userPhone.value,
    };

    let userResponse;
    const newUser2 = { ...newUser, role: newRole };
    console.log(newUser2);
    userResponse = await api.postUser(newUser2);
    console.log(userResponse);
  }

  return (
    <ContentDiv>
      <FormStyle onSubmit={handleSubmit}>
        <TitleForm>{"Cadastro de Usuario"}</TitleForm>
        <InputContainer>
          <label>Nome do Usuario</label>
          <InputForm
            placeholder="Ex: nome"
            type="text"
            name="userName"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>Email do usuario</label>
          <InputForm
            placeholder="Ex: nome@gmail.com"
            type="text"
            name="userEmail"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <InputForm
            placeholder="Ex: senha123"
            type="password"
            name="userPassword"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>Confirme Senha</label>
          <InputForm
            placeholder="Ex: senha123"
            type="password"
            name="userConfirmPassword"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>CPF</label>
          <InputForm
            placeholder="Ex: 12345678910"
            type="text"
            name="userCPF"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>Endereço</label>
          <InputForm
            placeholder="Ex: Rua Endereço"
            type="text"
            name="userAddress"
            required
          ></InputForm>
        </InputContainer>
        <InputContainer>
          <label>Telefone</label>
          <InputForm
            placeholder="Ex: 11991234567"
            type="text"
            name="userPhone"
            required
          ></InputForm>
        </InputContainer>
          <BtnCadastrar type="submit">CADASTRAR</BtnCadastrar>
      </FormStyle>
    </ContentDiv>
  );
}
