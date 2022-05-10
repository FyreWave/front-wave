import { Link, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { $axios } from "../http/http.Service";
import { loadScriptAsync, PayWithPaystack } from "../libs/paystack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

loadScriptAsync("https://js.paystack.co/v1/inline.js").then(() => {});

interface transactionTypings {
  _id: string;
  updatedAt: string;
  createdAt: "2022-05-10T04:41:45.592Z";
  reference: "b5f611b1-4614-4481-9aa9-fdf372d64835";
  paid: false;
  shortId: "2Z8br";
  amount: 0;
  paymentMethod: "card";
  waveId: "6279ed098fb3e9702ba8add2";
  ownerId: "6279e4d38fb3e9702ba8adcf";
  status: "created";
  wave: {
    _id: "6279ed098fb3e9702ba8add2";
    updatedAt: "2022-05-10T04:41:45.592Z";
    createdAt: "2022-05-10T04:41:45.592Z";
    waveName: string;
    waveDescription: string;
    targetAmount: number;
    dueDate: "2022-05-21T00:00:00.000Z";
    waveType: string;
    canWithdraw: false;
    ownerId: "6279e4d38fb3e9702ba8adcf";
    slug: "buy-house-for-anthony-h7jaqu";
  };
  waveCreator: {
    _id: "6279e4d38fb3e9702ba8adcf";
    updatedAt: "2022-05-10T04:06:43.525Z";
    createdAt: "2022-05-10T04:06:43.525Z";
    password: "$2b$10$XyWHkCqyxy3EF0rKNtpgyejLxg9JtA80hi2WzX8WSCo2teWYbre62";
    email: "anthony@gmail.com";
    mobile: "12345678";
    lastSeenAt: "2022-05-10T04:07:06.429Z";
  };
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const WaveSummaryPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const params = useParams();
  const reference = params.reference;
  const history = useNavigate();

  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState(null);

  const [transaction, setTransaction] = useState({});

  const [paymentData, setPaymentData] = useState({
    amount: "0.00",
    email: user?.email,
    mobile: "",
    paymentMethod: "card",
  });

  function getTransaction() {
    $axios
      .get(`transaction/get-transaction/${reference}`)

      .then((res: any) => {
        setTransaction(res.data.result[0]);

        console.log(res.data.result[0]);

        setIsPending(false);
      })
      .finally(() => {})
      .catch((err) => {
        setError(err);
        setIsPending(false);
        console.log(err);
      });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(paymentData);
    $axios
      .put("/transaction/update-transaction", {
        reference: reference,
        paymentData,
      })
      .then((res: any) => {
        console.log(res);
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
      uuid: transaction?.reference,
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
              <div>reference:{transaction?.reference} </div>
              {/*
              <div>{transaction.paymentMethod} </div>
              <div>{transaction.amount}</div>*/}
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
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
