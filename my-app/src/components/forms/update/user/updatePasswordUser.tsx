import React, { FormEvent, useEffect, useState } from "react";
import { UpdateUser } from "../../../../utils/types/requests";
import { api } from "../../../../utils/api/api";
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from "../../create/user/createUserForm-styles";
import { ContainerInput } from "../../../../pages/login/login-styled";

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
      <FormStyle onSubmit={HandleSubmit}>
        <TitleForm>Alterar Senha</TitleForm>
        <InputContainer>
          <label>Nova enha</label>
          <InputForm type="text" name="senha" required />
        </InputContainer>

        <InputContainer>
          <label>Confirme nova senha</label>
          <InputForm type="text" name="confirmeSenha" required />
        </InputContainer>

        <InputContainer>
          <label>Senha antiga</label>
          <InputForm type="text" name="senhaAntiga" required />
        </InputContainer>

        <BtnCadastrar type="submit">ALTERAR SENHA</BtnCadastrar>
      </FormStyle>
    </div>
  );
}
