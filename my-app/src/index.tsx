import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { PageLogin } from "./pages/login/login";
import { PageCreateUser } from "./pages/createUser/createUser";
import { Manager } from "./pages/manager/manager";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/create-user" element={<PageCreateUser />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
