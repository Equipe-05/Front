import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateSale } from "../../../../utils/types/requests";
import { DivSale } from "./createSaleForm-styles";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../user/createUserForm-styles";

export function CreateSaleForm() {
  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newSale: CreateSale = {
      description: e.currentTarget.description.value,
      customerId: e.currentTarget.customerId.value,
      franchiseId: e.currentTarget.franchiseId.value,
      productId: e.currentTarget.productId.value,
      userId: e.currentTarget.userId.value,
    };

    const saleData = await api.postSale(newSale);

    console.log(newSale);
  }

  return (
    <DivSale>
      <FormStyle onSubmit={HandleSubmit}>
        <TitleForm>Criar Venda</TitleForm>
        <InputContainer>
          <label>Descrição</label>
          <InputForm
            placeholder="Ex: E-COMMERCE - 1 ano - para 10 usuários"
            name="description"
          />
        </InputContainer>

        <InputContainer>
          <label>Id Cliente</label>
          <InputForm
            placeholder="Ex: d4e56668-8cb9-44a7-abe2-ed054dcf3352"
            name="customerId"
          />
        </InputContainer>

        <InputContainer>
          <label>Id Franquia</label>
          <InputForm
            placeholder="Ex: f88c5ef9-badb-4523-af6e-dbea69aadb3c"
            name="franchiseId"
          />
        </InputContainer>

        <InputContainer>
          <label>Id Produto</label>
          <InputForm
            placeholder="Ex: 84fd6a07-1d08-4523-87de-6b4bf14a92d5"
            name="productId"
          />
        </InputContainer>

        <InputContainer>
          <label>Id Usuario</label>
          <InputForm
            placeholder="Ex: b2234007-f0c9-4f9d-a2cd-6d82d4040756"
            name="userId"
          />
        </InputContainer>

        <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
      </FormStyle>
    </DivSale>
  );
}
