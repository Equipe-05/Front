import { CreateUserForm } from "../../components/forms/create/user/createUserForm";
import MenuChoice from "../../components/menus/menuChoice";
import { DivCreateUser } from "./createUserStyles";

export function CreateUserPage() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <DivCreateUser>
        <CreateUserForm />
      </DivCreateUser>
    </div>
  );
}
