import UpdateProductForm from "../../components/forms/update/product/updateProduct";
import MenuChoice from "../../components/menus/menuChoice";
import { DivUpdateProduct } from "./updateProductStyles";

export function UpdateProductPage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivUpdateProduct>
        <UpdateProductForm />
      </DivUpdateProduct>
    </div>
  );
}
