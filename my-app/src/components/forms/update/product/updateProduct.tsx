import React, { FormEvent, useEffect, useState } from "react";
import { UpdateProduct } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";
import { FormStyle, InputContainer, InputForm } from "../../create/user/createUserForm-styles";
import { BtnDeletar, BtnEditar } from "../user/styleEdit";

export default function UpdateProductForm() {
  const [product, setProduct] = useState<UpdateProduct>();

  const id = localStorage.getItem("id");

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updateProduct = {
      id: String(id),
      name: String(e.currentTarget.nome.value),
      description: String(e.currentTarget.descricao.value),
      score: Number(e.currentTarget.pontuacao.value),
    };

    const productData = await api.patchProductById(updateProduct);
  }

  async function HandleDelete() {
    const deleteProduct = id;
    const deleteDataProduct = await api.deleteProductById(
      String(deleteProduct)
    );
  }

  useEffect(() => {
    const Product = async () => {
      const result = await api.getProductById(String(id));
      setProduct(result);
    };
    Product();
  }, []);

  return (
    <div>
      <h2>Editar Produto</h2>
      <FormStyle onSubmit={HandleSubmit}>
        <InputContainer>
          <label>Nome</label>
          <InputForm type="text" name="nome" value={product?.name} required />
        </InputContainer>

        <InputContainer>
          <label>Descrição</label>
          <InputForm
            type="text"
            name="descricao"
            value={product?.description}
            required
          />
        </InputContainer>

        <InputContainer>
          <label>Score</label>
          <InputForm
            type="number"
            name="pontuacao"
            value={product?.score}
            required
          />
        </InputContainer>

        <BtnEditar type="submit">Editar</BtnEditar>
        <BtnDeletar type="button" onClick={HandleDelete}>
          Deletar
        </BtnDeletar>
      </FormStyle>
    </div>
  );
}
