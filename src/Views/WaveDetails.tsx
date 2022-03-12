import { useParams } from "react-router-dom";
import { RouteParamsType } from "../types/models";

const WaveDetails = () => {
  const { id } = useParams<RouteParamsType>();

  return (
    <div>
      <h1>Wave Details is here - {id}</h1>
    </div>
  );
};

export default WaveDetails;
