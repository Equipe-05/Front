import { CreateProductForm } from "../../components/forms/create/product/createProductForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateProduct } from "./createProductStyles";

export function CreateProductPage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivCreateProduct>
        <CreateProductForm />
      </DivCreateProduct>
    </div>
  );
}
