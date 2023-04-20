import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateFranchise } from "../../../../utils/types/requests";
import { DivFranchise } from "./createFranchiseForm-styles";

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
      <h2>Adicionar Franquia</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nome</label>
          <input placeholder="Ex: Franquia do João" name="nome" />
        </div>

        <div>
          <label>Endereço</label>
          <input placeholder="Ex: Rua dos Bobos" name="address" />
        </div>

        <div>
          <label>Telefone</label>
          <input placeholder="Ex: 11 98888-8888" name="phone" />
        </div>

        <div>
          <label>CNPJ</label>
          <input placeholder="Ex: 11.111.111/1111-01" name="cnpj" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </DivFranchise>
  );
}
