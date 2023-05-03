import MenuChoice from "../../components/menus/menuChoice";
import { TableProduct } from "../../components/tables/tableProduct";
import { DivAllProduct } from "./allProductStyles";

export function AllProductPage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivAllProduct>
        <TableProduct />
      </DivAllProduct>
    </div>
  );
}
