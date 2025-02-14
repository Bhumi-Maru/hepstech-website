import React from "react";
import { Link } from "react-router-dom";

export default function Thank_You() {
  return (
    <>
      {/* THANK YOU */}
      <section class="grid flex-1 flex-grow min-h-full py-12 bg-white place-items-center">
        <div class="container">
          <div class="max-w-lg mx-auto text-center">
            <div class="flex items-center justify-center">
              <svg
                class="w-10 h-10 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 class="ml-2 text-2xl font-bold text-gray-900">
                Thanks for your order!
              </h1>
            </div>
            <p class="mt-2 text-gray-600">
              Woohoo! Your payment was successful, and your order is complete. A
              receipt and download instructions are o their way to your inbox.
            </p>

            <div class="mt-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div class="px-4 py-5 sm:p-6">
                <ul class="space-y-6 text-left">
                  <li class="flex items-start">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 border border-gray-200 rounded-md">
                      <svg
                        class="w-6 h-6 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div class="ml-5">
                      <p class="text-sm text-gray-600">1 item</p>
                      <p class="font-medium mt-1.5">$565</p>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 border border-gray-200 rounded-md">
                      <svg
                        class="w-6 h-6 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <div class="ml-5">
                      <p class="text-sm text-gray-600">Payment Option</p>
                      <p class="font-medium mt-1.5">Cash on Delivery</p>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 border border-gray-200 rounded-md">
                      <svg
                        class="w-6 h-6 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div class="ml-5">
                      <p class="text-sm text-gray-600">Delivery Date & Time</p>
                      <p class="font-medium mt-1.5">Tomorrow, 10 AM - 2 PM</p>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 border border-gray-200 rounded-md">
                      <svg
                        class="w-6 h-6 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div class="ml-5">
                      <p class="text-sm text-gray-600">Delivery Address</p>
                      <p class="font-medium mt-1.5">
                        Arkle Lodge Nursing Home, Sprents Lane, Overton, RG25
                        3HX
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-5 sm:space-x-5 sm:flex sm:items-center sm:justify-center">
              <Link
                to="/order-details"
                title=" Check Order Status"
                class="w-full btn btn-white sm:w-auto"
                role="button"
              >
                Check Order Status
              </Link>

              <Link
                to="/"
                title="Continue Shopping"
                class="w-full mt-4 btn btn-primary sm:w-auto sm:mt-0"
                role="button"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
