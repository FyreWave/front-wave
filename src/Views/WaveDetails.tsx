import { useHistory, useParams } from "react-router-dom";
import { RouteParamsType, WaveDataState } from "../types/modelsTypings";
import useFetch from "../libs/useFetch";

const WaveDetails = () => {
  const { id } = useParams<RouteParamsType>();
  const history = useHistory();

  const {
    data: waves,
    isError,
    isLoading,
  } = useFetch("http://localhost:5100/waves/" + id) as unknown as WaveDataState;

  const deleteWave = () => {
    fetch(`http://localhost:5100/waves/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => () => {
      console.log(res, "deleteWave");
      history.push("/");
    });
  };
  return (
    <div>
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {waves && (
          <div>
            <h1>{waves.title}</h1>
            <h1>{waves.goal}</h1>
            <p>{waves.date}</p>
          </div>
        )}
        <h1>Wave Details is here - {id}</h1>
      </div>

      <div>
        <button onClick={deleteWave} className="regular-button">
          Delete Wave
        </button>
      </div>
    </div>
  );
};

export default WaveDetails;
