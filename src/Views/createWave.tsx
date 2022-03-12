import { useState } from "react";
import { useHistory } from "react-router-dom";

const createWave = () => {
  // console.log(import.meta.env.DEV);
  // handle object

  //single input
  const [waveName, setWaveName] = useState("Buy car for Sam");
  const [waveAmount, setWaveAmount] = useState("2,000,000");
  const [waveDate, setWaveDate] = useState("");

  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const [waveType, setWaveType] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const WaveData = {
      title: waveName,
      amount: waveAmount,
      type: waveType,
      date: waveDate,
    };

    setIsPending(true);

    fetch("http://localhost:5100/waves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WaveData),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });

    // .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Create a new Wave</h2>

      <div className="flex justify-center">
        <div className="bg-white  border shadow w-full py-32 ">
          <div className="flex justify-center">
            <div className="w-[450px] px-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <br />
                  <div>
                    <label>Wave name:</label>
                    <textarea
                      value={waveName}
                      onChange={(e) => setWaveName(e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label>Target amount:</label>
                    <input
                      type="text"
                      className="form-input"
                      value={waveAmount}
                      onChange={(e) => setWaveAmount(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label>Due Date:</label>
                    <input
                      value={waveDate}
                      onChange={(e) => setWaveDate(e.target.value)}
                      className="form-input"
                      type="date"
                      required
                    />
                  </div>

                  <div>
                    <label>Wave Type:</label>

                    <select
                      className="form-input"
                      value={waveType}
                      onChange={(e) => setWaveType(e.target.value)}
                    >
                      <option value="group">Group Savings</option>
                      <option value="other">Other Savings</option>
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

export default createWave;
