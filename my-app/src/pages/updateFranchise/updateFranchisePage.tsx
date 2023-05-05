import { UpdateFranchiseForm } from "../../components/forms/update/franchise/updateFranchise";
import MenuChoice from "../../components/menus/menuChoice";
import { DivUpdateFranchise } from "./updateFranchiseStyle";

export function UpdateFranchisePage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivUpdateFranchise>
        <UpdateFranchiseForm />
      </DivUpdateFranchise>
    </div>
  );
}
