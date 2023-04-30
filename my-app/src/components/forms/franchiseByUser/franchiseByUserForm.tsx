import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../utils/api/api";
import {
  PatchFranchiseByUserId,
  optionPlan,
} from "../../../utils/types/requests";
import { DivFranchiseByUser } from "./franchiseByUserForm-styles";

export function FranchiseByUserId() {
  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newFranchiseByUserId: any = {
      userId: e.currentTarget.userId.value,
    };

    const franchiseById = await api.patchFranchiseByUserId(
      newFranchiseByUserId
    );
  }

  return (
    <DivFranchiseByUser>
      <h2>Vincular Franquia com Usuario</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>userId</label>
          <input
            placeholder="Ex: 6016b644-8a68-4421-b589-af4974b2c9e0"
            name="userId"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </DivFranchiseByUser>
  );
}
