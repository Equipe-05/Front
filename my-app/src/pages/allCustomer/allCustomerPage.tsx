import MenuChoice from "../../components/menus/menuChoice";
import { TableCustomer } from "../../components/tables/tableCustomer";
import { DivAllCustomer } from "./allCustomerStyles";

export function AllCustomerPage() {
  return (
    <div>
      <MenuChoice />
      <DivAllCustomer>
        <TableCustomer />
      </DivAllCustomer>
    </div>
  );
}
