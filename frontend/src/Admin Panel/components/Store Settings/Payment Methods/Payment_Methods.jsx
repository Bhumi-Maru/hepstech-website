import React from "react";
import Payment_Methods_1 from "./Payment_Methods_1";
import Payment_Methods_2 from "./Payment_Methods_2";
import Payment_Methods_3 from "./Payment_Methods_3";
import Payment_Methods_4 from "./Payment_Methods_4";
import Payment_Methods_5 from "./Payment_Methods_5";
import Payment_Methods_6 from "./Payment_Methods_6";

export default function Payment_Methods() {
  return (
    <>
      {/* PAYMENT METHODS */}
      <div className="container">
        {/* PAYMENT METHODS [HEADING] */}
        <Payment_Methods_1 />

        <div class="mt-4 space-y-4">
          {/* PAYMENT METHODS [RazorPay] */}
          <Payment_Methods_2 />

          {/* PAYMENT METHODS [PayTM] */}
          <Payment_Methods_3 />

          {/* PAYMENT METHODS [Instamojo] */}
          <Payment_Methods_4 />

          {/* PAYMENT METHODS [Stripe] */}
          <Payment_Methods_5 />

          {/* PAYMENT METHODS [PayPal] */}
          <Payment_Methods_6 />

          {/* DISCARD AND SAVE BTN */}
          <div>
            <div className="flex items-center justify-end mt-6 space-x-4">
              <button type="button" className="btn btn-dark-light">
                Discard
              </button>

              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
