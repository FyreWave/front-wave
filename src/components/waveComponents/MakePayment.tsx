import React from "react";
import { loadScriptAsync, PayWithPaystack } from "../../libs/paystack";

export default function MakePayment() {
  loadScriptAsync("https://js.paystack.co/v1/inline.js").then(() => {});

  function pay_with_paystack() {
    // PayWithPaystack({
    //   amount: 9000,
    //   email: "auser@gmail.com",
    //   uuid: "123456789",
    // });
  }

  return (
    <>
      <button onClick={pay_with_paystack}>PAy with Stack</button>
    </>
  );
}
