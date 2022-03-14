import { WavesDataType } from "../../types/modelsTypings";

import { Link } from "react-router-dom";

const WaveList = (props: { waves: WavesDataType[]; title: any }) => {
  const waves = props.waves;
  const title = props.title;
  return (
    <div>
      <h1 className="text-lg">{title}</h1>
      {waves.map((wave: any, index: number) => (
        <div key={index}>
          <div className="border-b-2">
            <div className="py-6">
              <div className="flex justify-between">
                <div>
                  <Link to={`/view-wave/${wave.id}`}>
                    <h2 className="text-xl font-bold">{wave.title}</h2>
                  </Link>
                  <p className="font-bold py-1 text-sm goal-color">
                    Goal: &#8358;{wave.goal}
                  </p>
                  <p className="text-xs text-gray-500 font-bold">
                    Due: {wave.date}
                  </p>
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
  );
};

export default WaveList;
