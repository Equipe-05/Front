import { UpdatePasswordUser } from "../../components/forms/update/user/updatePasswordUser";
import { UpdateUserForm } from "../../components/forms/update/user/updateUser";
import MenuChoice from "../../components/menus/menuChoice";
import { DivUpdateUser } from "./updateUserStyles";

export function UpdateUserPage() {
  return (
    <div>
      <MenuChoice />
      <DivUpdateUser>
        <UpdateUserForm />
        <UpdatePasswordUser />
      </DivUpdateUser>
    </div>
  );
}
