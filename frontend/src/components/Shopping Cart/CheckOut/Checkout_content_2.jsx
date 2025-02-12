import React, { useState } from "react";
import Coupons_Menu from "./Coupons_Menu";

export default function Checkout_content_2() {
  const [isCouponMenuOpen, setIsCouponMenuOpen] = useState(false);
  return (
    <>
      {/* CHECKOUT CONTENT 2 */}
      <div class="lg:col-span-2">
        <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <p class="text-lg font-medium">Payment Summary</p>
            <p class="mt-1 text-gray-600">
              Price can change depending on shipping method and taxes of your
              state.
            </p>

            <button
              type="button"
              class="w-full mt-5 btn btn-white"
              data-toggle="drawer"
              data-target="#couponsMenu"
              onClick={() => setIsCouponMenuOpen(true)}
            >
              <svg
                class="w-6 h-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                />
              </svg>
              Apply Coupon
            </button>

            <div class="mt-5 overflow-hidden rounded-md bg-skin-primary-light text-skin-primary">
              <div class="px-4 py-3">
                <div class="flex items-center justify-center">
                  <svg
                    class="flex-shrink-0 w-5 h-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="font-medium leading-tight tex-sm">
                    APAY30 coupon code applied!
                  </span>
                </div>
              </div>
            </div>

            <hr class="my-5 border-gray-200" />

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
          </div>
        </div>

        <div class="flex items-center justify-center max-w-xs mx-auto mt-5 space-x-4">
          <svg
            class="flex-none w-10 h-10 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span class="text-sm font-medium text-gray-500">
            Safe and Secure Payment. Easy returns. 100% Authentic products.
          </span>
        </div>
      </div>

      {/* {isCouponMenuOpen && ( */}
      <Coupons_Menu setIsCouponMenuOpen={setIsCouponMenuOpen} />
      {/* )} */}
    </>
  );
}
