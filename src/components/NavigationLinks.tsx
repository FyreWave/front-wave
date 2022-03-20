import { Link, NavLink } from "react-router-dom";
import { text } from "stream/consumers";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavigationLinks = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.username);

  return (
    <div className="flex space-x-4">
      <NavLink to="/">Home</NavLink>
      <Link to="/create">Create</Link>
      <NavLink to="/create">All Waves</NavLink>
      <NavLink to="/create">History</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {isLoggedIn ? (
        <div>
          <button className="bg-red-400 rounded-md px-2 text-sm p-1">
            Logout??
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
