import React from "react";
import { FormEvent, useState } from "react";
import { ContentDiv } from "./createUser-styles";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../utils/types/requests";
import { api } from "../../utils/api/api";
import MenuChoice from "../../components/menus/menuChoice";

export function PageCreateUser() {
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
    <div>
      <MenuChoice />
      <ContentDiv>
        <h2>{"Cadastro de Usuario"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do Usuario</label>
          <input
            placeholder="Ex: nome"
            type="text"
            name="userName"
            required
          ></input>
          <label>Email do usuario</label>
          <input
            placeholder="Ex: nome@gmail.com"
            type="text"
            name="userEmail"
            required
          ></input>
          <label>Senha</label>
          <input
            placeholder="Ex: senha123"
            type="password"
            name="userPassword"
            required
          ></input>
          <label>Confirme Senha</label>
          <input
            placeholder="Ex: senha123"
            type="password"
            name="userConfirmPassword"
            required
          ></input>
          <label>CPF</label>
          <input
            placeholder="Ex: 12345678910"
            type="text"
            name="userCPF"
            required
          ></input>
          <label>Endereço</label>
          <input
            placeholder="Ex: Rua Endereço"
            type="text"
            name="userAddress"
            required
          ></input>
          <label>Telefone</label>
          <input
            placeholder="Ex: 11991234567"
            type="text"
            name="userPhone"
            required
          ></input>
          <button type="submit">{"Cadastrar"}</button>
        </form>
      </ContentDiv>
    </div>
  );
}
