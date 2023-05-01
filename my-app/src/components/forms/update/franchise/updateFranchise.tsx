import React, { FormEvent, useEffect, useState } from "react";
import { UpdateFranchise } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";
import { FormStyle, InputContainer, InputForm, TitleForm } from "../../create/user/createUserForm-styles";
import { BtnDeletar, BtnEditar } from "../user/styleEdit";

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
      <FormStyle>
        <TitleForm>Editar Franquia</TitleForm>
        <InputContainer>
          <label>Nome</label>
          <InputForm type="text" name="nome" value={franchise?.name} required />
        </InputContainer>

        <InputContainer>
          <label>Endereço</label>
          <InputForm
            type="text"
            name="address"
            value={franchise?.address}
            required
          />
        </InputContainer>

        <InputContainer>
          <label>Telefone</label>
          <InputForm type="text" name="phone" value={franchise?.phone} required />
        </InputContainer>

        <InputContainer>
          <label>CNPJ</label>
          <InputForm type="text" name="cnpj" value={franchise?.cnpj} required />
        </InputContainer>

        <BtnEditar type="submit">Editar</BtnEditar>
        <BtnDeletar type="button" onClick={HandleDelete}>
          Deletar
        </BtnDeletar>
      </FormStyle>
    </div>
  );
}
