import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { $axios } from "../http/http.Service";

const createWavePage = () => {
  // console.log(import.meta.env.DEV);
  // handle object

  //single input
  const [waveData, setWaveData] = useState({
    waveName: "Buy car for Anthony",
    waveDescription: "this is a description of why sam need money",
    targetAmount: "9920000",
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
        console.log(res);
        setIsPending(false);
        history("/");
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });

    // .catch((err) => console.log(err));
  };

  function processData(data: any, space: number = 2) {
    if (typeof data === "object") {
      return JSON.stringify(data, null, space).trim();
    } else {
      return data;
    }
  }

  return (
    <div>
      <h2>Create a new Wave</h2>
      {processData(waveData, 5)}
      <pre></pre>

      <div className="flex justify-center">
        <div className="bg-white w-full py-32 ">
          <div className="flex justify-center">
            <div className="w-[450px] px-8">
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
