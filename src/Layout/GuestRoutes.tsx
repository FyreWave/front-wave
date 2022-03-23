import { Route, Routes } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import GuestLayouts from "./GuestLayouts";
import NotFoundPage from "../Pages/NotFoundPage";
import React from "react";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayouts />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default GuestRoutes;
