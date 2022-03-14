import WavesComponent from "../components/WavesComponent";
import DepositHistoryComponent from "../components/DepositHistoryComponent";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";
import HeaderNavigation from "../Layout/HeaderNavigation";
import CreateWavePage from "./createWavePage";
import FooterArea from "../Layout/FooterArea";
import React from "react";
import WaveDetailsPage from "./WaveDetailsPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";

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
            <HeaderNavigation />
            <div className="">
              <Routes>
                <Route path="/" element={<HomeDashboard />} />

                <Route path="/create" element={<CreateWavePage />} />
                <Route path="/profile" element={<ProfilePage />} />

                <Route path="/register" element={<RegisterPage />} />
                <Route path="/view-wave/:id" element={<WaveDetailsPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <FooterArea />
    </div>
  );
}

export default App;
