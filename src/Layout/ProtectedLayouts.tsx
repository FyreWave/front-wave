import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

const ProtectedLayouts = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login", { replace: true });
    }
  }, [user]);

  return <Outlet />;
};

export default ProtectedLayouts;
