import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";

export default function MakePayment() {
  console.log("MakePayment", import.meta.env.VITE_FLUTTER_API);
  const config = {
    public_key: import.meta.env.VITE_FLUTTER_API,
    tx_ref: Date.now(),
    amount: 1000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  } as any;

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <form
        method="POST"
        action="https://checkout.flutterwave.com/v3/hosted/pay"
      >
        <div>Your order is ₦3,400</div>
        <input
          type="hidden"
          name="public_key"
          value="FLWPUBK_TEST-88ab4c93f4718b6134ba7b7235243204-X"
        />
        <input
          type="hidden"
          name="customer[email]"
          value="jessepinkman@walterwhite.org"
        />
        <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
        <input type="hidden" name="tx_ref" value="bitethtx-019203" />
        <input type="hidden" name="amount" value="2000" />
        <input type="hidden" name="currency" value="NGN" />
        <input type="hidden" name="meta[token]" value="54" />
        <input
          type="hidden"
          name="redirect_url"
          value="https://fyrewave.ngrok.io/api/payment/payment-callback"
        />
        <button type="submit" id="start-payment-button">
          Pay Now
        </button>
      </form>

      {/* <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>*/}
    </div>
  );
}
