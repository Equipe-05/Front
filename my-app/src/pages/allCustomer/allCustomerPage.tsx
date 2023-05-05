import MenuChoice from "../../components/menus/menuChoice";
import { TableCustomer } from "../../components/tables/tableCustomer";
import { DivAllCustomer } from "./allCustomerStyles";

export function AllCustomerPage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivAllCustomer>
        <TableCustomer />
      </DivAllCustomer>
    </div>
  );
}
