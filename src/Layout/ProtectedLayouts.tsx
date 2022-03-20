import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const ProtectedLayouts = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("auth/login");
    }
  }, [isLoggedIn]);

  return <Outlet />;
};

export default ProtectedLayouts;
