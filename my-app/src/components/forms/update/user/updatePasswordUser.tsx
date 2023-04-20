import React, { FormEvent, useEffect, useState } from "react";
import { UpdateUser } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";

export function UpdatePasswordUser() {
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

    const userPasswordPayload = {
      id: String(id),
      password: String(e.currentTarget.senha.value),
      confirmPassword: String(e.currentTarget.confirmeSenha.value),
      currentPassword: String(e.currentTarget.senhaAntiga.value),
    };

    const userData = await api.patchUserPasswordById(userPasswordPayload);
  }

  return (
    <div>
      <h2>Alterar Senha</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nova enha</label>
          <input type="text" name="senha" required />
        </div>

        <div>
          <label>Confirme nova senha</label>
          <input type="text" name="confirmeSenha" required />
        </div>

        <div>
          <label>Senha antiga</label>
          <input type="text" name="senhaAntiga" required />
        </div>

        <button type="submit">Alterar senha</button>
      </form>
    </div>
  );
}
