import MenuChoice from "../../components/menus/menuChoice";
import { ImgStart, Manager } from "./style";

export function PageManager() {
  return (
    <Manager>
      <MenuChoice />
      <ImgStart src="https://s3.amazonaws.com/gupy5/production/companies/584/career/43349/images/2022-01-04_14-11_logo.jpg" alt="" />
    </Manager>
  );
}
