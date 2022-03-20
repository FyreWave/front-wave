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
import ProtectedRoutes from "../Layout/ProtectedRoutes";
import AuthRoutes from "../Layout/AuthRoutes";

function App() {
  const count = useSelector((state: RootState) => state.counter.counter);
  const menuState = useSelector((state: RootState) => state.counter.menuState);
  const username = useSelector((state: RootState) => state.counter.username);
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

        {menuState && (
          <div className="bg-red-500 p-2"> {username}hide/show</div>
        )}
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
      {!isFullScreen && <FooterArea />}
    </div>
  );
}

export default App;
