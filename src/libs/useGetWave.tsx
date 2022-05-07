import { useEffect, useState } from "react";
import { $axios } from "../http/http.Service";

const useGetWave = (waveId: any) => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [wave, setWave] = useState([]);

  $axios
    .get(`client/get-wave/${waveId}`)
    .then((res: any) => {
      setWave(res.wave);
      setIsPending(false);
      console.log(res.wave);
    })
    .catch((err) => {
      setError(err);
      setIsPending(false);
      console.log(err);
    });

  return { wave, isPending, isError };
};

export default useGetWave;
