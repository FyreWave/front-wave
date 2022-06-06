import DepositHistoryComponent from "../components/DepositHistoryComponent";
import WavesComponent from "../components/waveComponents/WavesComponent";
import { $axios } from "../http/http.Service";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

const HomeDashboard = () => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [summary, setSummary] = useState<any>([]);

  function getDashboardSummary() {
    $axios
      .post("wave/get-dashboard-summary", { limit: 5 })
      .then((res: any) => {
        console.log(res.result);
        setSummary(res.result);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  useEffect(() => {
    getDashboardSummary();
  }, []);

  return (
    <div>
      {isError && <div>{isError}</div>}
      {isPending && <div>Is loading...</div>}
      {summary && (
        <div className="">
          <div className="">
            <div className="grid md:grid-cols-2 gap-x-4 ">
              <div className="">
                <div className="Dashboard-tile h-40">
                  <div className="p-4">
                    <h2 className="regular-title">Total Savings:</h2>

                    <h1 className="text-3xl ">
                      {" "}
                      {Number(summary?.totalDeposit?.total).toLocaleString()}
                    </h1>
                  </div>
                </div>
                <div className="Dashboard-tile mt-4">
                  <DepositHistoryComponent
                    transactions={summary?.transactions}
                  />
                </div>
              </div>
              <div className="Dashboard-tile ">
                <div className="overflow-y-auto h-[650px]">
                  <WavesComponent waves={summary?.waves} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDashboard;
