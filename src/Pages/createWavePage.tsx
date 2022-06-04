import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { $axios } from "../http/http.Service";
import { formatNumber } from "../libs/utils";

const createWavePage = () => {
  // console.log(import.meta.env.DEV);
  // handle object

  //single input
  const [waveData, setWaveData] = useState({
    waveName: "",
    waveDescription: "",
    targetAmount: 0,
    dueDate: "2022-05-21",
    waveType: "group",
  });

  const [isPending, setIsPending] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsPending(true);

    $axios
      .post("wave/make-wave", waveData)
      .then((res) => {
        setIsPending(false);
        history("/");
      })
      .catch((err) => {
        setIsPending(false);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-white w-full py-32 ">
          <div className="flex justify-center">
            <div className="w-[450px] lg:w-1/2 px-8">
              <section className="shadow-sm border rounded-sm p-1">
                <h1 className="text-primary-500 font-medium text-lg">
                  {waveData.waveName}
                </h1>
                <p className="normal-case"> {waveData.waveDescription}</p>
                <p className="normal-case"> {waveData.dueDate}</p>
                <p className="normal-case text-primary-500">
                  ₦ {waveData.targetAmount}
                </p>
                <p className="normal-case"> {waveData.waveType}</p>
              </section>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <br />
                  <div>
                    <label>Wave name:</label>
                    <input
                      value={waveData.waveName}
                      onChange={(e) =>
                        setWaveData({
                          ...waveData,
                          waveName: e.target.value,
                        })
                      }
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label>Wave Description:</label>
                    <textarea
                      value={waveData.waveDescription}
                      onChange={(e) =>
                        setWaveData({
                          ...waveData,
                          waveDescription: e.target.value,
                        })
                      }
                      className="form-input"
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label>Target amount:</label>
                    <input
                      type="number"
                      className="form-input "
                      value={waveData.targetAmount}
                      onChange={(e) =>
                        setWaveData({
                          ...waveData,
                          targetAmount: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label>Due Date:</label>
                    <input
                      value={waveData.dueDate}
                      onChange={(e) =>
                        setWaveData({
                          ...waveData,
                          dueDate: e.target.value,
                        })
                      }
                      className="form-input"
                      type="date"
                      required
                    />
                  </div>

                  <div>
                    <label>Wave Type:</label>

                    <select
                      className="form-input"
                      value={waveData.waveType}
                      onChange={(e) =>
                        setWaveData({
                          ...waveData,
                          waveType: e.target.value,
                        })
                      }
                    >
                      <option value="group">Group Savings</option>
                      <option value="crowd">Crowd funding</option>
                    </select>
                  </div>

                  <div>
                    {!isPending && (
                      <button className="regular-button" type="submit">
                        Create Wave
                      </button>
                    )}
                    {isPending && (
                      <button className="muted-button" type="submit" disabled>
                        Adding wave
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createWavePage;
