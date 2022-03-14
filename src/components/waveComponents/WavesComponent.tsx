import WaveList from "./WaveList";
import useFetch from "../../libs/useFetch";

const WavesComponent = () => {
  const {
    data: waves,
    isError,
    isLoading,
  } = useFetch("http://localhost:5100/waves");

  return (
    <div className="">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Is loading...</div>}
      {waves && <WaveList waves={waves} title="All Waves" />}
    </div>
  );
};

export default WavesComponent;
