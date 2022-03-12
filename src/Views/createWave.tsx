import { useState } from "react";

const createWave = () => {
  // handle object

  //single input
  const [waveName, setWaveName] = useState("");
  const [waveAmount, setWaveAmount] = useState("");

  const [waveType, setWaveType] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const blog = {
      name: waveName,
      amount: waveAmount,
      type: waveType,
    };
    fetch("http://localhost:5100/waves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(blog);
  };

  const [wave, setWave] = useState({
    name: "wavve-name",
    amount: 222,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setWave({ ...wave, [name]: value });
  };

  return (
    <div>
      <h2>Create a new Wave</h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            {wave.name}
            <label>Wave name:</label>
            <input
              value={wave.name}
              name={wave.name}
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <br />
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
