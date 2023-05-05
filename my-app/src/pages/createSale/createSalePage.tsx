import { CreateSaleForm } from "../../components/forms/create/sale/createSaleForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateSale } from "./createSaleStyles";

export function CreateSalePage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivCreateSale>
        <CreateSaleForm />
      </DivCreateSale>
    </div>
  );
}
