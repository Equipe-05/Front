import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateFranchise } from "../../../../utils/types/requests";
import { DivFranchise } from "./createFranchiseForm-styles";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../user/createUserForm-styles";

export function CreateFranchiseForm() {
  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newFranchise: CreateFranchise = {
      name: e.currentTarget.nome.value,
      address: e.currentTarget.address.value,
      phone: e.currentTarget.phone.value,
      cnpj: e.currentTarget.cnpj.value,
    };

    const productData = await api.postFranchise(newFranchise);

    console.log(newFranchise);
  }

  return (
    <DivFranchise>
      <FormStyle onSubmit={HandleSubmit}>
        <TitleForm>Adicionar Franquia</TitleForm>
        <InputContainer>
          <label>Nome</label>
          <InputForm placeholder="Ex: Franquia do João" name="nome" />
        </InputContainer>

        <InputContainer>
          <label>Endereço</label>
          <InputForm placeholder="Ex: Rua dos Bobos" name="address" />
        </InputContainer>

        <InputContainer>
          <label>Telefone</label>
          <InputForm placeholder="Ex: 11 98888-8888" name="phone" />
        </InputContainer>

        <InputContainer>
          <label>CNPJ</label>
          <InputForm placeholder="Ex: 11.111.111/1111-01" name="cnpj" />
        </InputContainer>

        <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
      </FormStyle>
    </DivFranchise>
  );
}
