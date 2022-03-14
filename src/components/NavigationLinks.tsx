import { Link, NavLink } from "react-router-dom";
import { text } from "stream/consumers";

const NavigationLinks = () => {
  return (
    <div className="space-x-4">
      <NavLink to="/">Home</NavLink>
      <Link to="/create">Create</Link>
      <NavLink to="/create">All Waves</NavLink>
      <NavLink to="/create">History</NavLink>
      <NavLink to="/create">Profile</NavLink>
      <NavLink to="/register">Register</NavLink>
      <Link to="/create">Logout</Link>
    </div>
  );
};

export default NavigationLinks;
