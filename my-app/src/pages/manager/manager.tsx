import Menu from "../../components/menus/menu";
import { CreateProduct } from "../createProduct/create-product";

export function PageManager() {
  return (
    <div style={{display: "flex"}}>
      <Menu />
      < CreateProduct />
    </div>
  );
}
