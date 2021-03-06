import { NavLink, Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeDashboard from "../Pages/HomeDashboard";
import CreateWavePage from "../Pages/createWavePage";
import ProfilePage from "../Pages/ProfilePage";
import PersonalInfo from "../Pages/profile/PersonalInfo";
import SecurityPage from "../Pages/profile/SecurityPage";
import RegisterPage from "../Pages/authPages/RegisterPage";
import WaveDetailsPage from "../Pages/WaveDetailsPage";
import JoinWavePage from "../Pages/JoinWavePage";
import AddMoneyPage from "../Pages/AddMoneyPage";
import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import ProtectedLayouts from "./ProtectedLayouts";
import FooterArea from "./FooterArea";
import NotFoundPage from "../Pages/NotFoundPage";
import QuickNavigationComponent from "../components/QuickNavigationComponent";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import WaveSummaryPage from "../Pages/WaveSummaryPage";
import AllDepositHistory from "../Pages/AllDepositHistoryPage";
import AllWavesPage from "../Pages/AllWavesPage";

const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <HeaderNavigation />
      <div className="container mx-auto pt-10 px-2 lg:px-40">
        <div className="pt-10 pb-4">
          <QuickNavigationComponent />
        </div>
        {/*routes layout*/}
        <div className="bg-white shadow rounded-lg p-4 h-[1000px]">
          <Routes>
            <Route path="/" element={<ProtectedLayouts />}>
              <Route path="create" element={<CreateWavePage />} />
              <Route
                path="all-deposit-history"
                element={<AllDepositHistory />}
              />
              <Route path="all-waves" element={<AllWavesPage />} />

              <Route path="profile" element={<ProfilePage />}>
                <Route index element={<PersonalInfo />} />
                <Route path="security" element={<SecurityPage />} />
                <Route path="personal" element={<PersonalInfo />} />
              </Route>

              <Route path="view-wave/:waveId" element={<WaveDetailsPage />} />
              <Route path="join-wave/:waveId" element={<JoinWavePage />} />
              <Route
                path="wave-summary/:transactionUuid"
                element={<WaveSummaryPage />}
              />
              <Route path="add-money/:waveId" element={<AddMoneyPage />} />

              <Route index element={<HomeDashboard />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>

      <FooterArea />
    </>
  );
};

export default ProtectedRoutes;
