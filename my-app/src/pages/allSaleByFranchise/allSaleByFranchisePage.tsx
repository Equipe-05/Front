import MenuChoice from "../../components/menus/menuChoice";
import { TableSale } from "../../components/tables/tableSale";
import { DivAllSaleByFranchise } from "./allSaleByFranchiseStyles";

export function AllSaleByFranchisePage() {
  return (
    <div>
      <MenuChoice />
      <DivAllSaleByFranchise>
        <TableSale />
      </DivAllSaleByFranchise>
    </div>
  );
}
