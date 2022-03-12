import { useParams } from "react-router-dom";
import { RouteParamsType, WaveDataState } from "../types/models";
import useFetch from "../libs/useFetch";

const WaveDetails = () => {
  const { id } = useParams<RouteParamsType>();

  const {
    data: waves,
    isError,
    isLoading,
  } = useFetch("http://localhost:5100/waves/" + id) as unknown as WaveDataState;

  return (
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
  );
};

export default WaveDetails;
