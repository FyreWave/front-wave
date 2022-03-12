import { useState } from "react";

const createWave = () => {
  const [waveName, setWaveName] = useState("");
  const [waveAmount, setWaveAmount] = useState("");
  const [waveType, setWaveType] = useState("");

  return (
    <div>
      <h2>Create a new Wave</h2>

      <form>
        <div className="space-y-4">
          <div>
            {waveName}
            <label>Wave name:</label>
            <input
              value={waveName}
              onChange={(e) => setWaveName(e.target.value)}
              type="text"
              required
            />
          </div>

          <div>
            <label>Target amount:</label>
            <textarea
              value={waveAmount}
              onChange={(e) => setWaveAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Due Date:</label>
            <input type="date" required />
          </div>

          <div>
            <label>Wave Type:</label>

            <select
              value={waveType}
              onChange={(e) => setWaveType(e.target.value)}
            >
              <option value="group">Group Savings</option>
              <option value="other">Other Savings</option>
            </select>
          </div>

          <div className="bg-red-400 p-4">
            {waveName} <br />
            {waveAmount}
            <br />
            {waveType}
            <br />
          </div>
          <div>
            <button className="regular-button" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default createWave;
