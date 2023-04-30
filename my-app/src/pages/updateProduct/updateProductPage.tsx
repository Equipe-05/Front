import UpdateProductForm from "../../components/forms/update/product/updateProduct";
import MenuChoice from "../../components/menus/menuChoice";
import { DivUpdateProduct } from "./updateProductStyles";

export function UpdateProductPage() {
  return (
    <div>
      <MenuChoice />
      <DivUpdateProduct>
        <UpdateProductForm />
      </DivUpdateProduct>
    </div>
  );
}
