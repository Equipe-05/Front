import MenuEmployee from "./menuEmployee";
import MenuFranchisee from "./menuFranchisee";
import MenuManager from "./menuManager";
import MenuOperator from "./menuOperator";

export default function MenuChoice() {
  const userRole = localStorage.getItem("role");

  return (
    <div>
      {(() => {
        if (userRole == "MANAGER") {
          return (
            <div>
              <MenuManager />
            </div>
          );
        } else if (userRole == "OPERATOR") {
          return (
            <div>
              <MenuOperator />
            </div>
          );
        } else if (userRole == "FRANCHISEE") {
          return (
            <div>
              <MenuFranchisee />
            </div>
          );
        } else if (userRole == "EMPLOYEE") {
          return (
            <div>
              <MenuEmployee />
            </div>
          );
        }
      })()}
    </div>
  );
}
