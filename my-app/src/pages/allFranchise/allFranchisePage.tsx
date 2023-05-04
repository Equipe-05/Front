import MenuChoice from "../../components/menus/menuChoice";
import { TableFranchise } from "../../components/tables/tableFranchise";

import { DivAllFranchise } from "./allFranchiseStyles";

export function AllFranchisePage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivAllFranchise>
        <h2 style={{color: "#FFFFFF"}}>TODAS AS FRANQUIAS</h2>
        <TableFranchise />
      </DivAllFranchise>
    </div>
  );
}
