import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";

import NotFoundPage from "./NotFoundPage";

import ProtectedRoutes from "../Layout/ProtectedRoutes";
import AuthRoutes from "../Layout/AuthRoutes";
import ReduxTestComponents from "../components/ReduxTestComponents";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className=" hidden">
          <div className="">
            <SideBar />
          </div>
        </div>
        <div className="w-screen">
          <div className="">
            <div>
              <Routes>
                <Route path="/*" element={<ProtectedRoutes />} />
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
