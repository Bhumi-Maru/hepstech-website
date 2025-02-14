import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      {/* ERROR PAGE */}
      <section class="grid flex-1 flex-grow min-h-full py-12 bg-white place-items-center">
        <div class="container">
          <div class="max-w-lg mx-auto text-center">
            <p class="font-medium text-9xl text-skin-primary">404</p>
            <h1 class="mt-5 text-2xl font-bold text-gray-900">
              This page has been probably moved somewhere...
            </h1>
            <p class="mt-2 text-gray-600">
              Please back to homepage or check our offer
            </p>

            <div class="flex flex-col items-center mt-5 space-y-4 sm:flex-row sm:justify-center sm:space-x-5 sm:space-y-0">
              <Link
                to="/"
                title="Go to Home"
                class="w-60 btn btn-primary sm:w-auto"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go to Home
              </Link>

              <a
                href="contact.html"
                title="Contact Us"
                class="w-60 btn btn-primary-light sm:w-auto"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
