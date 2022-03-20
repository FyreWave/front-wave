import DepositHistoryComponent from "../components/DepositHistoryComponent";
import WavesComponent from "../components/waveComponents/WavesComponent";
import { $axios } from "../http/http.Service";

const HomeDashboard = () => {
  const testAxios = () => {
    $axios.get("/waves").then((res) => {
      console.log(res, "here");
    });
  };

  testAxios();

  return (
    <div>
      <div className="pt-10">
        <div>
          <div className="grid md:grid-cols-2 gap-x-4">
            <div className="">
              <div className="Dashboard-tile h-40">
                <div className="p-4">
                  <h2 className="regular-title">Total Savings:</h2>
                  <h1 className="text-3xl "> 124,232,000</h1>
                </div>
              </div>
              <div className="Dashboard-tile mt-4">
                <h1 className="regular-title">Deposit History</h1>

                <DepositHistoryComponent />
              </div>
            </div>
            <div className="Dashboard-tile">
              <div>
                <WavesComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
