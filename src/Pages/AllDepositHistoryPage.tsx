import { $axios } from "../http/http.Service";
import { useEffect, useState } from "react";
const AllDepositHistory = () => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);
  const [deposits, setDeposits] = useState<any>([]);
  function getAllWaves() {
    $axios

      .post("/transaction/get-all-deposits", { limit: 10 })
      .then((res: any) => {
        console.log("getAllWaves", res);

        setDeposits(res);
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
    <div>
      {isError && <div>{isError}</div>}
      {isPending && <div>Is loading...</div>}

      {deposits && <div>{JSON.stringify(deposits)}</div>}

      <h1>All Deposit History</h1>
    </div>
  );
};

export default AllDepositHistory;
