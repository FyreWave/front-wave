import { Link, BrowserRouter, Switch } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/create">About</Link>
    </div>
  );
};

export default NavigationLinks;
