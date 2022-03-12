import { useHistory, useParams } from "react-router-dom";
import { RouteParamsType, WaveDataState } from "../types/modelsTypings";
import useFetch from "../libs/useFetch";
import WaveTile from "../components/waveComponents/WaveTile";
import WaveUsers from "../components/waveComponents/WaveUsers";

const WaveDetailsPage = () => {
  const { id } = useParams<RouteParamsType>();
  const history = useHistory();

  const {
    data: wave,
    isError,
    isLoading,
  } = useFetch("http://localhost:5100/waves/" + id) as unknown as WaveDataState;

  const deleteWave = () => {
    fetch("http://localhost:5100/waves/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <h1>Wave Details is here - {id}</h1>

      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {wave && (
          <div>
            <div className="grid md:grid-cols-2">
              <div className="bg-white">
                <div className="p-10">
                  <h4 className="text-secondary-500 text-3xl">
                    Wave Activities
                  </h4>
                </div>
              </div>
              <div className="bg-secondary-500 p-10">
                <WaveTile wave={wave} />
                <div>
                  <div>
                    <WaveUsers />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <button onClick={deleteWave} className="regular-button">
          Delete Wave
        </button>
      </div>
    </div>
  );
};

export default WaveDetailsPage;
