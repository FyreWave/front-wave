import { Link, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { $axios } from "../http/http.Service";
import { loadScriptAsync, PayWithPaystack } from "../libs/paystack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
loadScriptAsync("https://js.paystack.co/v1/inline.js").then(() => {});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const WaveSummaryPage = () => {
  const user = useSelector((state: RootState) => state.user.user) as any;

  const params = useParams();
  const transactionUuid = params.transactionUuid;
  const history = useNavigate();

  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [transaction, setTransaction] = useState({
    amount: 0,
    email: "",
    paymentMethod: "card",
    reference: "",
    wave: { waveName: "", targetAmount: "" },
  }) as any;

  const [paymentData, setPaymentData] = useState({
    amount: 0,
    email: user?.email,
    mobile: "",
    paymentMethod: "card",
  }) as any;

  function getTransaction() {
    console.log(transactionUuid);
    $axios
      .get(`transaction/get-transaction/${transactionUuid}`)

      .then((res: any) => {
        setTransaction(res.data.result[0]);

        console.log(res.data.result[0]);

        setIsPending(false);
      })

      .catch((err) => {
        setError(err);
        setIsPending(false);
        console.log(err);
      });
  }

  function updateTransaction(e: any) {
    e.preventDefault();

    console.log(paymentData, "payment data");
    $axios
      .put("/transaction/update-transaction", {
        uuid: transactionUuid,
        paymentData,
      })
      .then((res: any) => {
        console.log(res);
      })
      .finally(() => {
        getTransaction();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTransaction();
  }, []);

  function confirmPayment() {
    PayWithPaystack({
      amount: transaction?.amount,
      email: user?.email,
      uuid: transaction?.uuid,
    });
  }

  return (
    <>
      {isPending && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {transaction && (
        <div>
          <div>Wave summary page</div>

          <div className="grid grid-cols-2">
            <div>
              <div>
                <label>Payment method</label>
                <h1>Payment reference:{transaction?.paymentMethod} </h1>
              </div>

              <div>{user?.email} </div>
              <div>{transaction?.wave?.waveName} </div>
              <div>Target amount ::{transaction?.wave?.targetAmount} </div>
              <div>Amount you are adding:{transaction?.amount} </div>
              <div>reference:{transaction?.uuid} </div>
            </div>
            <div>
              <form onSubmit={updateTransaction}>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm mt-8 text-gray-700"
                  >
                    How much do you want to add ?
                  </label>
                  <div className="">
                    <input
                      name="amount"
                      type="text"
                      autoComplete="amount"
                      value={paymentData.amount}
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          amount: e.target.value,
                        })
                      }
                      required
                      className="appearance-none block w-full px-3 py-2 border-b-2 border-secondary-600 placeholder-gray-400 focus:outline-none focus:ring-secondary-800 focus:border-secondary-800 sm:text-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div>
                    <button
                      type="submit"
                      className="flex justify-center px-8 py-2 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                    >
                      Update payment
                    </button>

                    <button
                      onClick={confirmPayment}
                      className="flex justify-center px-8 py-2 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                    >
                      Confirm Payment {paymentData.amount}
                    </button>

                    <div></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaveSummaryPage;
