import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { PageLogin } from "./pages/login/login";
import { PageManager } from "./pages/manager/manager";
import { PageFranchisee } from "./pages/franchisee/franchisee";
import { PageOperator } from "./pages/operator/operator";
import { PageEmployee } from "./pages/employee/employee";
import { CreateUserPage } from "./pages/createUser/createUserPage";
import { CreateFranchisePage } from "./pages/createFranchise/createFrancisePage";
import { CreateProductPage } from "./pages/createProduct/createProductPage";
import { UpdateUserPage } from "./pages/updateUser/updateUserPage";
import { UpdateFranchisePage } from "./pages/updateFranchise/updateFranchisePage";
import { UpdateProductPage } from "./pages/updateProduct/updateProductPage";
import { CreateCustomerPage } from "./pages/createCustomer/createCustomerPage";
import { CreateSalePage } from "./pages/createSale/createSalePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/create-franchise" element={<CreateFranchisePage />} />
        <Route path="/create-customer" element={<CreateCustomerPage />} />
        <Route path="/create-sale" element={<CreateSalePage />} />
        <Route path="/update-product" element={<UpdateProductPage />} />
        <Route path="/update-user" element={<UpdateUserPage />} />
        <Route path="/update-franchise" element={<UpdateFranchisePage />} />
        <Route path="/MANAGER/:id" element={<PageManager />} />
        <Route path="/OPERATOR/:id" element={<PageOperator />} />
        <Route path="/FRANCHISEE/:id" element={<PageFranchisee />} />
        <Route path="/EMPLOYEE/:id" element={<PageEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
