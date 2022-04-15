import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const GuestLayouts = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  console.log(isLoggedIn, "isLoggedIn guest layouts");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    } else {
      navigate("/");
      // window.location.href = "/";
    }
  }, [isLoggedIn]);

  return <Outlet />;
};

export default GuestLayouts;
