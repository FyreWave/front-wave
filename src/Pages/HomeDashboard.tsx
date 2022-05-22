import DepositHistoryComponent from "../components/DepositHistoryComponent";
import WavesComponent from "../components/waveComponents/WavesComponent";
import { $axios } from "../http/http.Service";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HomeDashboard = () => {
  const user = useSelector((state: RootState) => state.user.user) as any;

  return (
    <div>
      <div className="">
        <div className="">
          <h1 className=" big-title">
            Hello {user?.username ? user?.username : user?.email}
          </h1>

          <div className="grid md:grid-cols-2 gap-x-4 ">
            <div className="">
              <div className="Dashboard-tile h-40">
                <div className="p-4">
                  <h2 className="regular-title">Total Savings:</h2>
                  <h1 className="text-3xl "> 124,232,000</h1>
                </div>
              </div>
              <div className="Dashboard-tile mt-4">
                <DepositHistoryComponent />
              </div>
            </div>
            <div className="Dashboard-tile ">
              <div className="overflow-y-auto h-[650px]">
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
