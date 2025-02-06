import React from "react";

export default function Information() {
  return (
    <>
      {/* shipping about */}
      <section class="py-8 bg-gray-100">
        <div class="container">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            <div class="flex items-start">
              <img
                class="flex-none w-8 h-8"
                src="../assets/images/truck.png"
                alt=""
              />
              <div class="ml-4">
                <p class="font-medium">Free shipping</p>
                <p class="mt-1 text-sm text-gray-600">
                  Free Shipping On All US Order Or Order Above $200
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="flex-none w-8 h-8"
                src="../assets/images/support.png"
                alt=""
              />
              <div class="ml-4">
                <p class="font-medium">Support 24x7</p>
                <p class="mt-1 text-sm text-gray-600">
                  Contact Us 24 Hours A Day, 7 Days A Week
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="flex-none w-8 h-8"
                src="../assets/images/refresh.png"
                alt=""
              />
              <div class="ml-4">
                <p class="font-medium">30 Days Return</p>
                <p class="mt-1 text-sm text-gray-600">
                  Simply Return It Within 30 Days For An Exchange
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="flex-none w-8 h-8"
                src="../assets/images/shield-check.png"
                alt=""
              />
              <div class="ml-4">
                <p class="font-medium">100% Secure Payment</p>
                <p class="mt-1 text-sm text-gray-600">
                  We Ensure Secure Payment With PEV
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
