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
      Name: e.currentTarget.userName.value,
      Email: e.currentTarget.userEmail.value,
      Password: e.currentTarget.userPassword.value,
      CPF: e.currentTarget.userCPF.value,
    };
    console.log(newUser);
  }

  return (
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
        <label>Password</label>
        <input
          placeholder="Sua senha"
          type="password"
          name="userPassword"
          required
        ></input>
        <label>CPF</label>
        <input
          placeholder="Seu CPF"
          type="text"
          name="userCPF"
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
  );
}
