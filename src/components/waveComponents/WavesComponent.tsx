import WaveList from "./WaveList";
import useFetch from "../../libs/useFetch";
import { $axios } from "../../http/http.Service";
import { useEffect, useState } from "react";

const WavesComponent = () => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [waves, setWaves] = useState([]);

  function getAllWaves() {
    $axios
      .get("client/all-waves")
      .then((res: any) => {
        setWaves(res.waves);
        setIsPending(false);
        console.log(res.waves);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
        console.log(err);
      });
  }

  useEffect(() => {
    getAllWaves();
  }, []);

  return (
    <div>
      {isError && <div>{isError}</div>}
      {isPending && <div>Is loading...</div>}
      {waves && <WaveList waves={waves} title="Your Waves" />}
    </div>
  );
};

export default WavesComponent;
