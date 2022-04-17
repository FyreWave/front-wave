import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function QuickNavigationComponent() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <button onClick={goBack} className="text-2xl">
            <i className="fa-solid fa-arrow-left-long "></i> Back{" "}
          </button>
        </div>

        {/*action buttons*/}
        <div className="flex gap-x-6">
          <button className="regular-button">Add Money</button>
          <Link className="regular-button" to="/add-money">
            add-money
          </Link>
        </div>
        {/*action buttons*/}
      </div>
    </>
  );
}
