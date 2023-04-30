import MenuChoice from "../../components/menus/menuChoice";
import { TableUserFranchise } from "../../components/tables/tableUserFranchise";
import { DivAllUserFranchise } from "./allUserFranchiseStyles";

export function AllUserFranchisePage() {
  return (
    <div>
      <MenuChoice />
      <DivAllUserFranchise>
        <TableUserFranchise />
      </DivAllUserFranchise>
    </div>
  );
}
