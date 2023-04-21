import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateCustomer } from "../../../../utils/types/requests";
import { DivCustomer } from "./createCustomerForm-styles";

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
      <h2>Adicionar Cliente</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nome</label>
          <input placeholder="Ex: John Doe" name="nome" />
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

        <div>
          <label>Id Franquia</label>
          <input
            placeholder="Ex: f88c5ef9-badb-4523-af6e-dbea69aadb3c"
            name="franchiseId"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </DivCustomer>
  );
}
