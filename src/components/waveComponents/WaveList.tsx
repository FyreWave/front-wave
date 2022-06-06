// import { WavesDataType } from "../../types/modelsTypings";

import { Link } from "react-router-dom";
import moment from "moment/moment";

const WaveList = (props: any) => {
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
                      <p className="text-md ">{wave.waveDescription}</p>
                    </Link>
                    <p className="font-bold py-1 text-sm goal-color">
                      Goal: &#8358;{wave.targetAmount}
                    </p>

                    <div></div>
                  </div>
                  <div>
                    <Link
                      to={`/view-wave/${wave.slug}`}
                      className="regular-button"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {waves.length !== 0 && (
          <div className="mt-8">
            <Link to="/all-waves">
              <span className="font-medium py-4"> See All Waves </span>
            </Link>
          </div>
        )}

        {waves.length === 0 && (
          <div className="text-center py-20">
            Join a wave or <br />
            <br />{" "}
            <Link to="/create" className="text-2xl  text-primary-500 ">
              create a wave
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaveList;
