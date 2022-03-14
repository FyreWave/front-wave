import { Link, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="security">Security link</Link>
        <Link to="personal">Personal link</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
