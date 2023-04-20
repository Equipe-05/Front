import React, { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../utils/api/api";
import { UpdateUser } from "../../../../utils/types/requests";

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
      <h2>Editar Usuário</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={user?.name} required />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" value={user?.email} required />
        </div>

        <div>
          <label>CPF</label>
          <input type="number" name="cpf" value={user?.cpf} required />
        </div>

        <div>
          <label>Endereço</label>
          <input type="text" name="address" value={user?.address} required />
        </div>

        <div>
          <label>Telefone</label>
          <input type="text" name="phone" value={user?.phone} required />
        </div>

        <button type="submit">Editar</button>
        <button type="button" onClick={HandleDelete}>
          Deletar
        </button>
      </form>
    </div>
  );
}
