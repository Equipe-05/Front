import { CreateCustomerForm } from "../../components/forms/create/customer/createCustomerForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateCustomer } from "./createCustomerStyles";

export function CreateCustomerPage() {
  return (
    <div>
      <MenuChoice />
      <DivCreateCustomer>
        <CreateCustomerForm />
      </DivCreateCustomer>
    </div>
  );
}
