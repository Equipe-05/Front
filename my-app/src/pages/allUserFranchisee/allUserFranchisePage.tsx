import MenuChoice from "../../components/menus/menuChoice";
import { TableUserFranchise } from "../../components/tables/tableUserFranchise";
import { DivAllUserFranchise } from "./allUserFranchiseStyles";

export function AllUserFranchisePage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivAllUserFranchise>
        <TableUserFranchise />
      </DivAllUserFranchise>
    </div>
  );
}
