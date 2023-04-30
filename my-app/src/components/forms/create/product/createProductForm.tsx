import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../utils/api/api";
import { optionPlan } from "../../../../utils/types/requests";
import MenuChoice from "../../../menus/menuChoice";
import { DivProduct, Selecttype } from "./createProductForm-styles";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../user/createUserForm-styles";

export function CreateProductForm() {
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
    <DivProduct>
      <FormStyle onSubmit={HandleSubmit}>
        <TitleForm>Adicionar Produto</TitleForm>
        <InputContainer>
          <label>Nome</label>
          <InputForm placeholder="Ex: HyperLocalBank" name="nome" />
        </InputContainer>

        <InputContainer>
          <label>Descrição</label>
          <InputForm
            placeholder="Ex: Banco digital para pagamentos"
            name="descricao"
          />
        </InputContainer>

        <InputContainer>
          <label>Categoria</label>
          <Selecttype
            name="plano"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {optionsPlan.map((opcoes) => (
              <option value={opcoes.value}>{opcoes.label}</option>
            ))}
          </Selecttype>
        </InputContainer>

        <InputContainer>
          <label>Score</label>
          <InputForm placeholder="Ex: 5" name="pontuacao" />
        </InputContainer>

        <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
      </FormStyle>
    </DivProduct>
  );
}
