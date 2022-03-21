import { Link, NavLink, useNavigate } from "react-router-dom";
import { text } from "stream/consumers";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavigationLinks = () => {
  const navigate = useNavigate();
  function handleClick() {
    localStorage.removeItem("cms-hit");
    // navigate("/auth/login");
    window.location.href = "/";

    console.log("clicked");
  }
  const isLoggedIn = useSelector((state: RootState) => state.user.username);

  return (
    <div className="flex space-x-4 items-center">
      <NavLink to="/">Home</NavLink>
      <Link to="/create">Create</Link>
      <NavLink to="/create">All Waves</NavLink>
      <NavLink to="/create">History</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {isLoggedIn ? (
        <div>
          <button
            onClick={handleClick}
            className="bg-secondary-500 text-white rounded-md px-3 text-sm p-1"
          >
            <i className="fa-solid fa-arrow-right-from-bracket pr-2" />
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <NavLink to="auth/login">Login</NavLink>
          <NavLink to="/auth/register">Register</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavigationLinks;
