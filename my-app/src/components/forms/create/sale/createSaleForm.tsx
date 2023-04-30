import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { CreateSale } from "../../../../utils/types/requests";
import { DivSale } from "./createSaleForm-styles";

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
      <h2>Criar Venda</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Descrição</label>
          <input
            placeholder="Ex: E-COMMERCE - 1 ano - para 10 usuários"
            name="description"
          />
        </div>

        <div>
          <label>Id Cliente</label>
          <input
            placeholder="Ex: d4e56668-8cb9-44a7-abe2-ed054dcf3352"
            name="customerId"
          />
        </div>

        <div>
          <label>Id Franquia</label>
          <input
            placeholder="Ex: f88c5ef9-badb-4523-af6e-dbea69aadb3c"
            name="franchiseId"
          />
        </div>

        <div>
          <label>Id Produto</label>
          <input
            placeholder="Ex: 84fd6a07-1d08-4523-87de-6b4bf14a92d5"
            name="productId"
          />
        </div>

        <div>
          <label>Id Usuario</label>
          <input
            placeholder="Ex: b2234007-f0c9-4f9d-a2cd-6d82d4040756"
            name="userId"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </DivSale>
  );
}
