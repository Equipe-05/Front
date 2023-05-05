import MenuChoice from "../../components/menus/menuChoice";
import { ImgStart, Manager } from "../manager/style";

export function PageEmployee() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <Manager>
        <ImgStart src="https://s3.amazonaws.com/gupy5/production/companies/584/career/43349/images/2022-01-04_14-11_logo.jpg" alt="" />
      </Manager>
    </div>
  );
}
