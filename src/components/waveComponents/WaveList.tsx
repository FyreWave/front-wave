import { WavesDataType } from "../../types/modelsTypings";

import { Link } from "react-router-dom";
import moment from "moment/moment";

const WaveList = (props: { waves: WavesDataType[]; title: any }) => {
  const waves = props.waves;
  const title = props.title;
  return (
    <div>
      <div>
        {waves.map((wave: any, index: number) => (
          <div key={index}>
            <div className="border-b">
              <div className="py-4">
                <div className="flex justify-between">
                  <div>
                    <Link to={`/view-wave/${wave.slug}`}>
                      <h2 className="text-xl font-bold capitalize">
                        {wave.waveName}
                      </h2>
                      <p className="text-xs ">{wave.waveDescription}</p>
                    </Link>
                    <p className="font-bold py-1 text-sm goal-color">
                      Goal: &#8358;{wave.targetAmount}
                    </p>
                    <p className="text-xs text-gray-500 font-bold">
                      Due: {moment(wave.dueDate).format("MMM Do YYYY")}
                      <span className="text-xs italic">
                        {" "}
                        ({moment(wave.dueDate, "YYYYMMDD").fromNow()})
                      </span>
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
    </div>
  );
};

export default WaveList;
