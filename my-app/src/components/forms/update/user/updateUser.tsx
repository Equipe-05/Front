import React, { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../utils/api/api";
import { UpdateUser } from "../../../../utils/types/requests";
import { FormStyle, InputContainer, InputForm } from "../../create/user/createUserForm-styles";
import { BtnDeletar, BtnEditar, ContainerBtnFormEdit } from "./styleEdit";

export function UpdateUserForm() {
  const [user, setUser] = useState<UpdateUser>();
  const id = localStorage.getItem("id");

  async function SelectUser() {
    const result = await api.getUserById(String(id));
    setUser(result);
  }

  useEffect(() => {
    SelectUser();
  }, []);

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userPayload = {
      id: String(id),
      name: String(e.currentTarget.nome.value),
      email: String(e.currentTarget.email.value),
      cpf: String(e.currentTarget.cpf.value),
      address: String(e.currentTarget.address.value),
      phone: String(e.currentTarget.phone.value),
    };

    const userData = await api.patchUserById(userPayload);
  }

  async function HandleDelete() {
    const deleteUser = id;
    const deleteDataUser = await api.deteleUserById(String(deleteUser));
  }

  return (
    <div>
      <FormStyle onSubmit={HandleSubmit}>
        <h2>Editar Usuário</h2>
        <InputContainer>
          <label>Nome</label>
          <InputForm type="text" name="nome" value={user?.name} required />
        </InputContainer>

        <InputContainer>
          <label>Email</label>
          <InputForm type="text" name="email" value={user?.email} required />
        </InputContainer>

        <InputContainer>
          <label>CPF</label>
          <InputForm type="number" name="cpf" value={user?.cpf} required />
        </InputContainer>

        <InputContainer>
          <label>Endereço</label>
          <InputForm type="text" name="address" value={user?.address} required />
        </InputContainer>

        <InputContainer>
          <label>Telefone</label>
          <InputForm type="text" name="phone" value={user?.phone} required />
        </InputContainer>

        <ContainerBtnFormEdit>
          <BtnEditar type="submit">EDITAR</BtnEditar>
          <BtnDeletar type="button" onClick={HandleDelete}>
            DELETAR
          </BtnDeletar>
        </ContainerBtnFormEdit>
      </FormStyle>
    </div>
  );
}
