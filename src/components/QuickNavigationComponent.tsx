import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import React from "react";
import { $axios } from "../http/http.Service";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function QuickNavigationComponent() {
  const wave = useSelector((state: RootState) => state.wave.wave) as any;

  const user = useSelector((state: RootState) => state.user.user) as any;

  const navigate = useNavigate();
  const { waveId } = useParams();

  const history = useNavigate();

  const location = useLocation();

  function isDeposit() {
    return location.pathname !== "/";
  }
  function isHomePage() {
    return location.pathname !== "/";
  }
  function showBackButton() {
    const notAllowed = ["/", "/create"];

    return notAllowed.includes(location.pathname);
  }

  function showAddMoneyButton() {
    const notAllowed = ["/", "/create", "/view-wave"];

    return notAllowed.includes(location.pathname);
  }

  function showCreateButton() {
    return location.pathname === "/";
  }
  function makePayment() {
    $axios
      .post(`transaction/create-transaction`, wave)
      .then((res: any) => {
        const transactionUuid = res.data.result.uuid;
        history(`/wave-summary/${transactionUuid}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const goBack = () => {
    navigate(-1);
  };
  console.log(user, wave);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="pl-6">
            <h1 className="big-title">
              Hello {user?.username ? user?.username : user?.email}
            </h1>
            <p>Welcome back, let’s save towards a goal today</p>
          </div>
          {!showBackButton() && (
            <button onClick={goBack} className="text-2xl">
              <i className="fa-solid fa-arrow-left-long "></i> Back{" "}
            </button>
          )}

          {!showCreateButton() && (
            <h1 className="text-3xl font-bold">Create Wave</h1>
          )}
        </div>

        {!showAddMoneyButton() && (
          <div className="flex gap-x-6">
            <button onClick={makePayment} className="regular-button">
              Add money
            </button>
          </div>
        )}

        {showCreateButton() && (
          <Link className="regular-button" to="/create">
            Create Wave
          </Link>
        )}
      </div>
    </>
  );
}
