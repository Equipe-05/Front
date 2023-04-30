import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateCustomer } from "../../../../utils/types/requests";
import { DivCustomer } from "./createCustomerForm-styles";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../user/createUserForm-styles";

export function CreateCustomerForm() {
  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newCustomer: CreateCustomer = {
      name: e.currentTarget.nome.value,
      address: e.currentTarget.address.value,
      phone: e.currentTarget.phone.value,
      cnpj: e.currentTarget.cnpj.value,
      franchiseId: e.currentTarget.franchiseId.value,
    };

    const productData = await api.postCustomer(newCustomer);

    console.log(newCustomer);
  }

  return (
    <DivCustomer>
      <FormStyle onSubmit={HandleSubmit}>
        <TitleForm>Adicionar Cliente</TitleForm>
        <InputContainer>
          <label>Nome</label>
          <InputForm placeholder="Ex: John Doe" name="nome" />
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

        <InputContainer>
          <label>Id Franquia</label>
          <InputForm
            placeholder="Ex: f88c5ef9-badb-4523-af6e-dbea69aadb3c"
            name="franchiseId"
          />
        </InputContainer>

        <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
      </FormStyle>
    </DivCustomer>
  );
}
