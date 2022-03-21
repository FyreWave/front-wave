import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";

import NotFoundPage from "./NotFoundPage";

import ProtectedRoutes from "../Layout/ProtectedRoutes";
import AuthRoutes from "../Layout/AuthRoutes";
import ReduxTestComponents from "../components/ReduxTestComponents";
import { $axios } from "../http/http.Service";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/user";

function App() {
  const [isPending, setIsPending] = useState(true);

  const dispatch = useDispatch();

  function ping() {
    $axios
      .get("/client/ping")
      .then((res: any) => {
        dispatch(setUsername(res.user.username));
        setIsPending(false);
        console.log(res, "ping");
      })
      .catch((err: any) => {
        setIsPending(false);

        console.log(err);
      });
  }

  useEffect(() => {
    ping();
  }, []);
  return (
    <div className="App">
      {isPending ? (
        <div>Loading...</div>
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
                  <Route path="/auth/*" element={<AuthRoutes />} />
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
