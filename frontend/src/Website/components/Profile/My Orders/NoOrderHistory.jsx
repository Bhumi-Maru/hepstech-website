import React from "react";
import { Link } from "react-router-dom";

export default function NoOrderHistory() {
  return (
    <>
      {/* You don't have any order history */}
      <div class="mt-5">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>

              <h1 class="mt-5 text-2xl font-bold text-gray-900">
                You don't have any order history
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
    </>
  );
}
