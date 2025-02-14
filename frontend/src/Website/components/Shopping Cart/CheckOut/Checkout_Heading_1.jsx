import React from "react";

export default function Checkout_1() {
  return (
    <>
      {/* CONTINUE TO CHECKOUT HEADING */}
      <section class="pt-8 pb-5 bg-white">
        <div class="container">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" class="text-gray-400 hover:text-skin-primary">
                    <svg
                      class="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span class="sr-only">Home</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a
                    href="shopping-cart.html"
                    title="Shopping Cart"
                    class="ml-4 text-sm font-medium text-gray-500 hover:text-skin-primary"
                  >
                    Shopping Cart
                  </a>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a
                    href="checkout.html"
                    title="Checkout"
                    class="ml-4 text-sm font-medium text-gray-500 hover:text-skin-primary"
                    aria-current="page"
                  >
                    Checkout
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <h1 class="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Checkout
          </h1>
        </div>
      </section>
    </>
  );
}
