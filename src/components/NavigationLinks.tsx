import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUser } from "../redux/user";

const NavigationLinks = () => {
  const dispatch = useDispatch();
  function handleClick() {
    localStorage.removeItem("cms-hit");
    localStorage.removeItem("isLoggedIn");
    dispatch(setUser(null));
    window.location.href = "/";
  }
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <>
      <div>
        {/*//TODO: Add lg:block to the nav links*/}
        <div className="hidden">
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
        </div>
      </div>
    </>
  );
};

export default NavigationLinks;
