import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import React from "react";
import { $axios } from "../http/http.Service";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function QuickNavigationComponent() {
  const wave = useSelector((state: RootState) => state.wave.wave) as any;

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

  function isCreateWave() {
    return location.pathname === "/create";
  }

  function createTransaction() {
    /*     $axios
      .post(`transaction/create-transaction`, wave)
      .then((res: any) => {
        const transactionUuid = res.data.result.uuid;
        history(`/wave-summary/${transactionUuid}`);
      })
      .catch((err) => {
        console.log(err);
      }); */
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          {!isCreateWave() && (
            <button onClick={goBack} className="text-2xl">
              <i className="fa-solid fa-arrow-left-long "></i> Back{" "}
            </button>
          )}
          {isCreateWave() && (
            <h1 className="text-3xl font-bold">Create Wave</h1>
          )}
        </div>

        {!isCreateWave() && (
          <div className="flex gap-x-6">
            <button onClick={createTransaction} className="regular-button">
              Add money
            </button>

            <Link className="regular-button" to="/create">
              Create Wave
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
