import React, { FormEvent, useEffect, useState } from "react";
import { UpdateProduct } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";
import { useParams } from "react-router-dom";

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
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={product?.name} required />
        </div>

        <div>
          <label>Descrição</label>
          <input
            type="text"
            name="descricao"
            value={product?.description}
            required
          />
        </div>

        <div>
          <label>Score</label>
          <input
            type="number"
            name="pontuacao"
            value={product?.score}
            required
          />
        </div>

        <button type="submit">Editar</button>
        <button type="button" onClick={HandleDelete}>
          Deletar
        </button>
      </form>
    </div>
  );
}
