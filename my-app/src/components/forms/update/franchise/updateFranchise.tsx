import React, { FormEvent, useEffect, useState } from "react";
import { UpdateFranchise } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";

export function UpdateFranchiseForm() {
  const [franchise, setFranchise] = useState<UpdateFranchise>();

  const id = localStorage.getItem("id");

  async function SelectFranchise() {
    const result = await api.getFranchiseById(String(id));
    setFranchise(result);
  }

  useEffect(() => {
    SelectFranchise();
  }, []);

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const franchisePayload = {
      id: String(id),
      name: String(e.currentTarget.nome.value),
      address: String(e.currentTarget.address.value),
      phone: Number(e.currentTarget.phone.value),
      cnpj: String(e.currentTarget.cnpj.value),
    };

    const franchiseData = await api.patchFranchiseById(franchisePayload);
  }

  async function HandleDelete() {
    const deleteFranchise = id;
    const deleteDataFranchise = await api.deleteFranchiseById(String(id));
  }

  return (
    <div>
      <h2>Editar Franquia</h2>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={franchise?.name} required />
        </div>

        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="address"
            value={franchise?.address}
            required
          />
        </div>

        <div>
          <label>Telefone</label>
          <input type="text" name="phone" value={franchise?.phone} required />
        </div>

        <div>
          <label>CNPJ</label>
          <input type="text" name="cnpj" value={franchise?.cnpj} required />
        </div>

        <button type="submit">Editar</button>
        <button type="button" onClick={HandleDelete}>
          Deletar
        </button>
      </form>
    </div>
  );
}
