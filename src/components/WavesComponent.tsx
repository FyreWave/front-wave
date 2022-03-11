import { useState } from "react";

const WavesComponent = () => {
  const [waves, setWaves] = useState([
    {
      title: "Build House for mummy",
      goal: "24,500,000,",
      date: "23/11/2022",
      id: 1,
    },
    {
      title: "Buy Car for Papa",
      goal: "12,000,000",
      date: "23/10/2022",
      id: 1,
    },
    {
      title: "Estate Development",
      goal: "30,000,000",
      date: "01/11/2023",
      id: 1,
    },
    {
      title: "My wedding",
      goal: "3,000,000",
      date: "",
      id: 1,
    },
    {
      title: "Dubai trip with friends",
      goal: "7,500,000",
      date: "04/11/2022",
      id: 1,
    },
  ]);

  return (
    <div className="border-b-2 pb-2">
      <div>
        {waves.map((wave) => (
          <div key={wave.id}>
            <div className="border-b-2">
              <div className="py-6">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-lg">{wave.title}</h1>
                    <p>{wave.goal}</p>
                    <p>{wave.date}</p>
                  </div>
                  <div>
                    <button className="regular-button">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WavesComponent;
