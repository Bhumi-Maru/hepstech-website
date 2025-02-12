import React from "react";
import Checkout_1 from "./Checkout_Heading_1";
import Checkout_content_1 from "./Checkout_content_1";
import Checkout_content_2 from "./Checkout_content_2";

export default function Checkout() {
  return (
    <>
      <Checkout_1 />
      <section class="pb-12 bg-white">
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-6 lg:gap-x-10 xl:gap-x-12 gap-y-10">
            <Checkout_content_1 />
            <Checkout_content_2 />
          </div>
        </div>
      </section>
    </>
  );
}
