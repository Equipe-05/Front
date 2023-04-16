import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { PageLogin } from "./pages/login/login";
import { PageCreateUser } from "./pages/createUser/createUser";
import { PageManager } from "./pages/manager/manager";
import { PageFranchisee } from "./pages/franchisee/franchisee";
import { PageOperator } from "./pages/operator/operator";
import { PageEmployee } from "./pages/employee/employee";
import { CreateProduct } from "./pages/createProduct/create-product";
import { PageCreateFranchise } from "./pages/createFranchise/createFranchise";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/create-user" element={<PageCreateUser />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-franchise" element={<PageCreateFranchise />} />
        <Route path="/MANAGER/:id" element={<PageManager />} />
        <Route path="/OPERATOR/:id" element={<PageOperator />} />
        <Route path="/FRANCHISEE/:id" element={<PageFranchisee />} />
        <Route path="/EMPLOYEE/:id" element={<PageEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
