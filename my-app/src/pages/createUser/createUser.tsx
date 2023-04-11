import React from "react";
import { FormEvent, useState } from "react";
import { ContentDiv } from "./createUser-styles";
import { useNavigate } from "react-router-dom";
import { UserInput } from "../../utils/types/requests";

export function CreateUser() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newUser: UserInput = {
      name: e.currentTarget.userName.value,
      email: e.currentTarget.userEmail.value,
      password: e.currentTarget.userPassword.value,
      confirmPassword: e.currentTarget.userConfirmPassword.value,
      cpf: e.currentTarget.userCPF.value,
      address: e.currentTarget.userAddress.value,
      phone: e.currentTarget.userPhone.value,
    };
    console.log(newUser);
  }

  return (
    <div>
      <ContentDiv>
        <h2>{"Cadastro de Usuario"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do Usuario</label>
          <input
            placeholder="Seu Nome"
            type="text"
            name="userName"
            required
          ></input>
          <label>Email do usuario</label>
          <input
            placeholder="Seu Email"
            type="text"
            name="userEmail"
            required
          ></input>
          <label>Senha</label>
          <input
            placeholder="Sua senha"
            type="password"
            name="userPassword"
            required
          ></input>
          <label>Confirme Senha</label>
          <input
            placeholder="Sua Repita Senha"
            type="password"
            name="userConfirmPassword"
            required
          ></input>
          <label>CPF</label>
          <input
            placeholder="Seu CPF"
            type="text"
            name="userCPF"
            required
          ></input>
          <label>Endereço</label>
          <input
            placeholder="Seu Endereço"
            type="text"
            name="userAddress"
            required
          ></input>
          <label>Telefone</label>
          <input
            placeholder="Seu Telefone"
            type="text"
            name="userPhone"
            required
          ></input>
          <button type="submit">{"Cadastrar"}</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Sair
          </button>
        </form>
      </ContentDiv>
    </div>
  );
}
