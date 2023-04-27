import MenuChoice from "../../components/menus/menuChoice";
import { TableFranchise } from "../../components/tables/tableFranchise";
import { DivAllFranchise } from "./allFranchiseStyles";

export function AllFranchisePage() {
  return (
    <div>
      <MenuChoice />
      <DivAllFranchise>
        <TableFranchise />
      </DivAllFranchise>
    </div>
  );
}
