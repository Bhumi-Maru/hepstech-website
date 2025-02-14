import React from "react";
import ShoppingCart_Checkout_3 from "./ShoppingCart_Checkout_3";
import ShoppingCart_Products from "./ShoppingCart_Products";

export default function ShoppingCart_2() {
  return (
    <>
      {/* SHOPPING CART SECTION 2 */}
      <section class="pb-12 bg-white">
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-6 lg:gap-x-10 xl:gap-x-12 gap-y-10">
            <ShoppingCart_Products />

            <ShoppingCart_Checkout_3 />
          </div>
        </div>
      </section>
    </>
  );
}
