import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { optionPlan } from "../../../../utils/types/requests";
import MenuChoice from "../../../menus/menuChoice";
import { DivProduct } from "./create-product-styles";

export function CreateProduct() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const optionsPlan: optionPlan[] = [
    { value: "AVEC", label: "AVEC" },
    { value: "AVECGO", label: "AVECGO" },
    { value: "CROSSX", label: "CROSSX" },
    { value: "PAYMENTS", label: "PAYMENTS" },
    { value: "PLATAFORMA_HYPERLOCAL", label: "PLATAFORMA_HYPERLOCAL" },
    { value: "SALAOVIP", label: "SALAOVIP" },
  ];

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct = {
      name: e.currentTarget.nome.value,
      description: e.currentTarget.descricao.value,
      plan: e.currentTarget.plano.value,
      score: Number(e.currentTarget.pontuacao.value),
    };

    const productData = await api.postProduct(newProduct);

    console.log(newProduct);
  }

  return (
    <div>
      <MenuChoice />
      <DivProduct>
        <h2>Adicionar Produto</h2>
        <form onSubmit={HandleSubmit}>
          <div>
            <label>Nome</label>
            <input placeholder="Ex: HyperLocalBank" name="nome" />
          </div>

          <div>
            <label>Descrição</label>
            <input
              placeholder="Ex: Banco digital para pagamentos"
              name="descricao"
            />
          </div>

          <div>
            <select
              name="plano"
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {optionsPlan.map((opcoes) => (
                <option value={opcoes.value}>{opcoes.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Score</label>
            <input placeholder="Ex: 5" name="pontuacao" />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </DivProduct>
    </div>
  );
}
