import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- START FOOTER --> */}
      <footer className="pt-12 pb-10 mt-auto text-white bg-gray-800 sm:pt-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-8">
            <div className="col-span-2 md:col-span-4 lg:col-span-3">
              <a href="index.html" title="" className="block mr-auto">
                <img
                  className="w-auto h-10"
                  src="../assets/images/logo-alt.png"
                  alt=""
                />
              </a>

              <p className="mt-4">
                1487 Rocky Horse Carrefour
                <br />
                Arlington, TX 16819
              </p>

              <ul className="flex items-center mt-6 space-x-3">
                <li>
                  <a
                    href="#"
                    title="Facebook"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full shadow-sm lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-network-facebook hover:-translate-y-1 hover:shadow"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only"> Facebook </span>
                    <svg
                      className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:-h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798 c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771 l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title="Twitter"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full shadow-sm lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-network-twitter hover:-translate-y-1 hover:shadow"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only"> Twitter </span>
                    <svg
                      className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:-h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title="Instagram"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full shadow-sm lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-network-instagram hover:-translate-y-1 hover:shadow"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only"> Instagram </span>
                    <svg
                      className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:-h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                      <circle cx="11.994" cy="11.979" r="3.003"></circle>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title="Pinterest"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full shadow-sm lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-network-pinterest hover:-translate-y-1 hover:shadow"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only"> Pinterest </span>
                    <svg
                      className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:-h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M-111.052-244.992c-5.518,0-9.99,4.473-9.99,9.99c0,4.232,2.633,7.85,6.35,9.306 c-0.088-0.79-0.166-2.006,0.034-2.868c0.182-0.78,1.172-4.966,1.172-4.966s-0.299-0.599-0.299-1.484 c0-1.388,0.805-2.425,1.808-2.425c0.853,0,1.264,0.64,1.264,1.407c0,0.858-0.546,2.139-0.827,3.327 c-0.235,0.994,0.499,1.805,1.479,1.805c1.775,0,3.141-1.872,3.141-4.575c0-2.392-1.719-4.064-4.173-4.064 c-2.843,0-4.512,2.132-4.512,4.335c0,0.858,0.331,1.779,0.744,2.28c0.081,0.099,0.093,0.185,0.069,0.286 c-0.076,0.315-0.245,0.994-0.277,1.133c-0.044,0.183-0.145,0.222-0.335,0.134c-1.247-0.581-2.027-2.405-2.027-3.871 c0-3.151,2.289-6.045,6.601-6.045c3.466,0,6.159,2.469,6.159,5.77c0,3.444-2.171,6.213-5.184,6.213 c-1.013,0-1.964-0.525-2.29-1.146c0,0-0.501,1.907-0.623,2.374c-0.225,0.868-0.834,1.956-1.241,2.62 c0.935,0.289,1.928,0.445,2.958,0.445c5.517,0,9.99-4.473,9.99-9.99S-105.535-244.992-111.052-244.992"
                        transform="translate(123.042 246.992)"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full shadow-sm lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-network-linkedin hover:-translate-y-1 hover:shadow"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only"> LinkedIn </span>
                    <svg
                      className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:-h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Need help?
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1">
                  <svg
                    className="flex-none w-5 h-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="break-all"> (885) 242-9095 </span>
                </li>

                <li className="flex items-start transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1">
                  <svg
                    className="flex-none w-5 h-5 mr-3"
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
                  <div>
                    <span className="block break-all">
                      Monday – Friday: 9:00-20:00
                    </span>
                    <span className="block break-all">
                      Saturday: 11:00 – 15:00
                    </span>
                  </div>
                </li>

                <li className="flex items-start transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1">
                  <svg
                    className="flex-none w-5 h-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-all"> contact@example.com </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Information
              </p>

              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Delivery information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Account
              </p>

              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    My account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    My orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Store
              </p>

              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Discount
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Latest products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-block transition-all duration-200 transform hover:text-opacity-80 hover:translate-x-1"
                  >
                    Sale
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-600" />

          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:order-2">
              <img
                className="w-auto h-5 mx-auto md:mx-0"
                src="../assets/images/payment-options.png"
                alt=""
              />
            </div>

            <p className="mt-6 text-sm md:order-1 md:mt-0">
              Copyright © <span id="currentYear"></span>
              <span className="font-semibold">HepsTech</span>. All Rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER --> */}
    </>
  );
}
