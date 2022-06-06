import { $axios } from "../http/http.Service";
import { useEffect, useState } from "react";

const AllWavesPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [waves, setWaves] = useState<any>([]);

  function getAllWaves() {
    $axios
      .post("wave/get-all-waves", { limit: 10 })
      .then((res: any) => {
        console.log("getAllWaves", res);

        setWaves(res.result);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        console.log("getAllWaves", err);

        setIsPending(false);
      });
  }

  useEffect(() => {
    getAllWaves();
  }, []);

  return (
    <>
      {isError && <div>{isError}</div>}
      {isPending && <div>Is loading...</div>}

      {waves && <div>{JSON.stringify(waves)}</div>}
      <h1>All Waves Pages</h1>
    </>
  );
};

export default AllWavesPage;
