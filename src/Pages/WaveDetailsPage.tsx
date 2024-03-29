import { Link, useNavigate, useParams } from "react-router-dom";

import WaveMembers from "../components/waveComponents/WaveMembers";
import WaveSummary from "../components/waveComponents/WaveSummary";
// import WaveActivities from "../components/waveComponents/WaveActivities";
import { useEffect, useState } from "react";
import TabView from "../components/waveComponents/TabView";
import { Tab } from "@headlessui/react";
import { $axios } from "../http/http.Service";
import PreloaderComponent from "../components/PreloaderComponent";

import { setWave } from "../redux/wave";
import { useDispatch } from "react-redux";
import WaveActivities from "../components/waveComponents/WaveActivities";
import { WavesMemberTypings } from "../types/modelsTypings";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const WaveDetailsPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const waveId = params.waveId;
  const history = useNavigate();

  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [waveSummary, setWaveSummary] = useState<WavesMemberTypings>({
    wavers: [],
    wave: {},
    activities: [],
  });

  function getWaveSummary() {
    $axios
      .get(`wave/get-wave-summary/${waveId}`)
      .then((res: any) => {
        setWaveSummary(res.result);
        setIsPending(false);
        dispatch(setWave(res.result.wave));
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  function generateLink() {
    $axios
      .post(`link/generate-link/`, waveSummary)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function makePayment() {
    $axios
      .post(`transaction/create-transaction`, waveSummary.wave)
      .then((res: any) => {
        const transactionUuid = res.data.result.uuid;
        history(`/wave-summary/${transactionUuid}`);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getWaveSummary();
  }, []);

  return (
    <div>
      <div>
        {isPending && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {waveSummary && (
          <div>
            <div>
              <br />
              <button onClick={makePayment} className="bg-red-500">
                Check-out
              </button>
            </div>

            <div>
              <div className="">
                <div className="flex items-center">
                  <button className="rounded-full border-2 border-green-200 h-10 w-10 hover:">
                    <i className="fa-regular fa-copy text-green-500" />
                  </button>

                  <button
                    onClick={generateLink}
                    className="text-green-500 underline"
                  >
                    Generate Link
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid md:grid-cols-2">
                <div className="">
                  <WaveActivities activities={waveSummary.activities} />
                </div>
                <div className="">
                  <div>
                    <div className="bg-secondary-500 p-8">
                      <WaveSummary wave={waveSummary.wave} />
                      <WaveMembers wavers={waveSummary.wavers} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  mobile view area*/}
            {/*  <div className="flex justify-center md:hidden ">
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
            </div> */}
            {/*  mobile view area*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default WaveDetailsPage;
