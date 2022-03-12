import { WavesDataType } from "../types/models";

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
                  <h1 className="regular-title">{wave.title}</h1>
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
  );
};

export default WaveList;
