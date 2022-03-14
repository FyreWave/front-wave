import { Link, BrowserRouter, Switch } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/create">All Waves</Link>
      <Link to="/create">History</Link>
      <Link to="/create">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/create">Logout</Link>
    </div>
  );
};

export default NavigationLinks;
