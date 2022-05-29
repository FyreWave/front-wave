import { Link, useNavigate, useParams } from "react-router-dom";
import { $axios } from "../http/http.Service";
import { useEffect, useState } from "react";

export default function JoinWavePage() {
  const params = useParams();
  const waveId = params.waveId;
  const history = useNavigate();
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [wave, setWave] = useState({});

  function getWave() {
    $axios
      .get(`wave/join-wave/${waveId}`)
      .then((res: any) => {
        setWave(res);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  useEffect(() => {
    getWave();
  }, []);

  return (
    <>
      <div>Join Wave Page</div>
    </>
  );
}
