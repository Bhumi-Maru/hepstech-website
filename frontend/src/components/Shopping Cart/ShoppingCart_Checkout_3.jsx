import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart_Checkout_3() {
  return (
    <>
      <div class="lg:col-span-2">
        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            {/* <!-- <p>
                    Shipping
                  </p> */}
            {/* <hr class="my-5 border-gray-200"> --> */}

            <ul class="space-y-4">
              <li class="flex items-center justify-between">
                <p>Subtotal:</p>
                <p class="font-semibold">$369.97</p>
              </li>
              <li class="flex items-center justify-between">
                <p>Discount:</p>
                <p class="font-semibold">(20%) - $73.99</p>
              </li>
              <li class="flex items-center justify-between">
                <p>Shipping:</p>
                <p class="font-semibold">$0.00</p>
              </li>
              <li class="flex items-center justify-between">
                <p>Tax:</p>
                <p class="font-semibold">+ $14.00</p>
              </li>
            </ul>

            <hr class="my-5 border-gray-200" />

            <div class="flex items-center justify-between">
              <p class="text-lg font-semibold">Total:</p>
              <p class="text-lg font-semibold">$305.98</p>
            </div>

            <div class="mt-5 space-y-3">
              <a
                href="checkout.html"
                title="Proceed to Checkout"
                class="w-full btn btn-primary"
                role="button"
              >
                Proceed to Checkout
              </a>

              <Link
                to="/shop"
                title="Continue shopping"
                class="w-full btn btn-white"
                role="button"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
