import { useNavigate, useParams } from "react-router-dom";
import { RouteParamsType, WaveDataState } from "../types/modelsTypings";
import useFetch from "../libs/useFetch";
import WaveUsers from "../components/waveComponents/WaveUsers";
import WaveActivities from "../components/waveComponents/WaveActivities";
import { useState } from "react";
import TabView from "../components/waveComponents/TabView";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const WaveDetailsPage = () => {
  let [categories] = useState({
    "Wave details": [],
    Activities: [],
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
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {wave && (
          <div>
            <div className="hidden md:block">
              <div className="grid md:grid-cols-2">
                <div className="bg-white">
                  <WaveActivities />
                </div>
                <div className="">
                  <div>
                    <div className="bg-secondary-500">
                      <WaveUsers wave={wave} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  mobile view area*/}
            <div className="flex justify-center md:hidden ">
              <div className="w-full max-w-md px-2 py-16 sm:px-0">
                <Tab.Group defaultIndex={1}>
                  <Tab.Panels className="mt-2 bg-white">
                    <Tab.Panel>
                      <div className="bg-white">
                        <WaveActivities />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="bg-secondary-500">
                        <WaveUsers wave={wave} />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                  <Tab.List className="flex p-1 space-x-1 bg-secondary-500 rounded-xl mt-6">
                    {Object.keys(categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          classNames(
                            "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-100 ring-white ring-opacity-60",
                            selected
                              ? "bg-primary-500 shadow"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>
                </Tab.Group>
              </div>
            </div>
            {/*  mobile view area*/}
          </div>
        )}
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
