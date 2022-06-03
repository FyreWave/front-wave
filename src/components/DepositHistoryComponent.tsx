import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { $axios } from "../http/http.Service";

const DepositHistoryComponent = () => {
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [deposits, setDeposit] = useState([]);

  function getDeposit() {
    $axios
      .post("transaction/get-all-deposits", { limit: 5 })
      .then((res: any) => {
        setDeposit(res.data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }

  useEffect(() => {
    getDeposit();
  }, []);

  const [histories, setHistory] = useState([
    {
      title: "Build House for mummy",
      goal: "24,500,000",
      date: "23/11/2022",
      id: 1,
    },

    {
      title: "Buy Car for Papa",
      goal: "12,000,000",
      date: "23/10/2022",
      id: 1,
    },
    {
      title: "Estate Development",
      goal: "30,000,000",
      date: "01/11/2023",
      id: 1,
    },
    {
      title: "My wedding",
      goal: "3,000,000",
      date: "",
      id: 1,
    },

    {
      title: "Dubai trip with friends",
      goal: "7,500,000",
      date: "04/11/2022",
      id: 1,
    },
  ]);
  return (
    <div className="my-b">
      {isError && <div>{isError}</div>}
      {isPending && <div>Is loading...</div>}
      {deposits && (
        <div>
          <div className="flex justify-between">
            <h1 className="regular-title">
              Deposit History ({deposits.length})
            </h1>

            {deposits.length !== 0 && (
              <Link to="all-deposit-history" className="font-medium">
                All Transactions{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            )}
          </div>

          {deposits.map((deposit: any, index: number) => (
            <div key={index}>
              <div>
                <div className="py-6">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="bg-primary-500 p-1 rounded-full w-12 h-12 flex justify-center mr-2">
                        <div className="text-center">
                          <p className="text-lg text-white font-bold">
                            {" "}
                            {new Date(
                              deposit.paystack.paid_at
                            ).toLocaleDateString("default", {
                              day: "numeric",
                            })}
                          </p>
                          <p className="text-sm text-white -mt-2">
                            {new Date(
                              deposit.paystack.paid_at
                            ).toLocaleDateString("default", {
                              month: "short",
                            })}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex">
                          {deposit.paystack.authorization.card_type ||
                            deposit.paystack.authorization.bank}
                          <span>
                            {deposit.paystack.authorization.channel !==
                              "bank" && <div> ***** ****</div>}
                          </span>
                          {deposit.paystack.authorization.last4}
                        </div>
                        <h1 className="font-semibold text-xs text-gray-500">
                          {deposit.wave.waveName}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-xl">₦ {deposit.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {deposits.length !== 0 && (
            <Link to="all-deposit-history" className="font-medium pt-4">
              All Transactions <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          )}
          {deposits.length === 0 && (
            <div className="text-center py-20">No deposit yet</div>
          )}
        </div>
      )}
    </div>
  );
};

export default DepositHistoryComponent;
