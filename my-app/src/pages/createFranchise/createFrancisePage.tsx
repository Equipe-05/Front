import { CreateFranchiseForm } from "../../components/forms/create/franchise/createFranchiseForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateFranchise } from "./createFranchiseStyle";

export function CreateFranchisePage() {
  return (
    <div>
      <MenuChoice />
      <DivCreateFranchise>
        <CreateFranchiseForm />
      </DivCreateFranchise>
    </div>
  );
}
