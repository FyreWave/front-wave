import { useNavigate, useParams } from "react-router-dom";
import { RouteParamsType, WaveDataState } from "../types/modelsTypings";
import useFetch from "../libs/useFetch";
import WaveUsers from "../components/waveComponents/WaveUsers";
import WaveActivities from "../components/waveComponents/WaveActivities";
import { useState } from "react";
import TabView from "../components/waveComponents/TabView";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const WaveDetailsPage = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const params = useParams();
  const waveId = params.waveId;
  const history = useNavigate();

  const {
    data: wave,
    isError,
    isLoading,
  } = useFetch(
    "http://localhost:5100/waves/" + waveId
  ) as unknown as WaveDataState;

  const deleteWave = () => {
    fetch("http://localhost:5100/waves/" + waveId, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div>
      <h1>Wave Details is here - {waveId}</h1>

      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {wave && (
          <div>
            <div className="grid md:grid-cols-2">
              <div className="bg-white p-10">
                <div className=" border-b-2">
                  <h4 className="text-secondary-500 text-3xl">
                    Wave Activities
                  </h4>
                </div>

                <WaveActivities />
              </div>
              <div className="bg-secondary-500 p-10">
                <div>
                  <div>
                    <WaveUsers wave={wave} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center md:hidden">
        <TabView />
      </div>

      <div>
        <button onClick={deleteWave} className="regular-button mt-4">
          Delete Wave
        </button>
      </div>
    </div>
  );
};

export default WaveDetailsPage;
