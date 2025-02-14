import React from "react";
import { Link } from "react-router-dom";

export default function EmptyShoppingCart() {
  return (
    <>
      {/* EMPTY SHOPPING CART */}
      <section class="grid flex-1 flex-grow min-h-full py-12 bg-white place-items-center">
        <div class="container">
          <div class="h-full border-2 border-gray-200 border-dashed rounded-lg">
            <div class="grid h-full max-w-lg mx-auto text-center place-items-center">
              <div class="px-8 py-10">
                <svg
                  class="w-32 h-32 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <h1 class="mt-5 text-2xl font-bold text-gray-900">
                  Your cart is currently empty.
                </h1>
                <p class="mt-2 text-gray-600">
                  Donec fringilla, ante nec consectetur placerat, velit libero
                  cursus risus, sit amet hendrerit velit enim non leo.
                </p>

                <Link
                  to="/shop"
                  title="Return to Shop"
                  class="mt-5 btn btn-primary"
                  role="button"
                >
                  <svg
                    class="w-5 h-5 mr-3 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Return to Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
