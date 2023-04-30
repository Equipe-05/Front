import { FranchiseByUserId } from "../../components/forms/franchiseByUser/franchiseByUserForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivFranchiseUser } from "./franchiseByUserStyles";

export function FranchiseByUserPage() {
  return (
    <div>
      <MenuChoice />
      <DivFranchiseUser>
        <FranchiseByUserId />
      </DivFranchiseUser>
    </div>
  );
}
