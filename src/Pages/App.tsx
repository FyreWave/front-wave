import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SideBar from "../components/SideBar";

import NotFoundPage from "./NotFoundPage";

import ProtectedRoutes from "../Layout/ProtectedRoutes";
import GuestRoutes from "../Layout/GuestRoutes";

import { $axios } from "../http/http.Service";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user";
import PreloaderComponent from "../components/PreloaderComponent";

function App() {
  const [isPending, setIsPending] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function ping() {
    setIsPending(true);
    $axios
      .get("/client/ping")
      .then((res: any) => {
        console.log(res);
        if (!res.user) {
          navigate("/auth/login");
        } else {
          dispatch(setUser(res.user));
        }
        setIsPending(false);
      })
      .catch((err: any) => {
        console.log(err);
        setIsPending(false);
      });
  }

  useEffect(() => {
    ping();
  }, []);
  return (
    <div className="App">
      {isPending ? (
        <div>
          <PreloaderComponent />
        </div>
      ) : (
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

                  <Route path="/auth/*" element={<GuestRoutes />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
