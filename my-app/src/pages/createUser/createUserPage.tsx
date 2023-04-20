import { CreateUserForm } from "../../components/forms/create/user/createUserForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateUser } from "./createUserStyles";

export function CreateUserPage() {
  return (
    <div>
      <MenuChoice />
      <DivCreateUser>
        <CreateUserForm />
      </DivCreateUser>
    </div>
  );
}
