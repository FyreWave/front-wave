import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";
import HeaderNavigation from "../Layout/HeaderNavigation";
import CreateWavePage from "./createWavePage";
import FooterArea from "../Layout/FooterArea";
import WaveDetailsPage from "./WaveDetailsPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";
import SecurityPage from "./profile/SecurityPage";
import PersonalInfo from "./profile/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  toggleMenu,
} from "../redux/counter";
import { RootState } from "../redux/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.counter);
  const menuState = useSelector((state: RootState) => state.counter.menuState);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isFullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/register") {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  });
  return (
    <div className="App">
      <div>
        <h1>The count is : {count}</h1>
        <h1>Menu State : {menuState}</h1>

        {menuState && <div className="bg-red-500 p-2">hide/show</div>}
        <button
          className="regular-button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(incrementByAmount(22))}
        >
          by 33
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(toggleMenu())}
        >
          menu
        </button>
      </div>
      <div className="flex">
        <div className=" hidden">
          <div className="">
            <SideBar />
          </div>
        </div>
        <div className="w-screen">
          <div className="">
            {!isFullScreen && <HeaderNavigation />}

            <div className={isFullScreen ? "" : "container mx-auto px-4"}>
              <Routes>
                <Route path="/" element={<HomeDashboard />} />

                <Route path="/create" element={<CreateWavePage />} />
                <Route path="/profile" element={<ProfilePage />}>
                  <Route index element={<PersonalInfo />} />
                  <Route path="security" element={<SecurityPage />} />
                  <Route path="personal" element={<PersonalInfo />} />
                </Route>

                <Route path="register" element={<RegisterPage />} />
                <Route path="view-wave/:waveId" element={<WaveDetailsPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {!isFullScreen && <FooterArea />}
    </div>
  );
}

export default App;
