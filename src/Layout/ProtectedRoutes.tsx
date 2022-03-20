import { Route, Routes } from "react-router-dom";
import HomeDashboard from "../Pages/HomeDashboard";
import CreateWavePage from "../Pages/createWavePage";
import ProfilePage from "../Pages/ProfilePage";
import PersonalInfo from "../Pages/profile/PersonalInfo";
import SecurityPage from "../Pages/profile/SecurityPage";
import RegisterPage from "../Pages/RegisterPage";
import WaveDetailsPage from "../Pages/WaveDetailsPage";
import React from "react";
import HeaderNavigation from "./HeaderNavigation";

const ProtectedRoutes = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/create" element={<CreateWavePage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<PersonalInfo />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="personal" element={<PersonalInfo />} />
          </Route>

          <Route path="view-wave/:waveId" element={<WaveDetailsPage />} />
        </Routes>
      </div>
    </>
  );
};

export default ProtectedRoutes;
