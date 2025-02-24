import React from "react";
import Checkout_Settings_1 from "./Checkout_Settings_1";
import Checkout_Settings_2 from "./Checkout_Settings_2";
import Checkout_Settings_3 from "./Checkout_Settings_3";
import Checkout_Settings_4 from "./Checkout_Settings_4";

export default function Checkout_Settings() {
  return (
    <>
      <div className="container">
        <Checkout_Settings_1 />

        <div className="mt-4 space-y-6">
          <Checkout_Settings_2 />
          <Checkout_Settings_3 />
          <Checkout_Settings_4 />
        </div>
      </div>
    </>
  );
}
