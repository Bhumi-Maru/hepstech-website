import React from "react";
import { Link, useParams } from "react-router-dom";
import Profile_Sidebar from "../Profile_Sidebar";

export default function OrderDetails({ setIsCancelOrderModalOpen }) {
  const { id } = useParams();
  return (
    <>
      <section className="py-10 bg-white">
        <div className="container">
          <div className="relative grid items-start grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
            <div class="md:sticky md:left-0 md:top-24">
              <Profile_Sidebar />
            </div>
            {/* ORDER DETAILS */}
            <div class="md:col-span-3">
              <nav aria-label="Back">
                <Link
                  to="/my-orders"
                  title="My Orders"
                  class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Back to Orders
                </Link>
              </nav>

              <div class="mt-3 lg:flex lg:items-center lg:justify-between">
                <div class="sm:flex sm:items-center">
                  <h1 class="text-2xl font-bold text-gray-900">
                    Order ID: 334902461
                  </h1>
                  <span class="mt-2 sm:mt-0 sm:ml-3 badge badge-success">
                    Delivered
                  </span>
                </div>

                <div class="mt-4 lg:mt-0 sm:flex sm:items-center sm:space-x-4">
                  <Link
                    onClick={() => setIsCancelOrderModalOpen(true)}
                    title="Cancel Order"
                    class="w-full btn btn-error-light sm:w-auto"
                    role="button"
                    data-toggle="modal"
                    data-target="#cancelOrderConfirmationModal"
                  >
                    <svg
                      class="w-5 h-5 mr-2 -ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Cancel Order
                  </Link>

                  <a
                    href="#"
                    title=""
                    class="w-full mt-3 btn btn-primary sm:mt-0 sm:w-auto"
                    role="button"
                  >
                    <svg
                      class="w-5 h-5 mr-2 -ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Invoice
                  </a>
                </div>
              </div>

              <div class="grid grid-cols-1 mt-12 lg:grid-cols-6 lg:gap-x-8 gap-y-10">
                <div class="lg:col-span-4">
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="space-y-6">
                      <div>
                        <p class="text-sm text-gray-600">Items</p>
                        <p class="mt-1.5 font-medium">2</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Order Date & Time</p>
                        <p class="mt-1.5 font-medium">03 May 2020 / 10:05 AM</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Amount</p>
                        <p class="mt-1.5 font-medium">$305.98</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Payment Method</p>
                        <p class="mt-1.5 font-medium">Cash on Delivery</p>
                      </div>
                    </div>

                    <div class="space-y-6">
                      <div>
                        <p class="text-sm text-gray-600">Customer</p>
                        <p class="mt-1.5 font-medium">Dannie Trapp</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Email Address</p>
                        <p class="mt-1.5 font-medium">customer@example.com</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Mobile Number</p>
                        <p class="mt-1.5 font-medium">(885) 242-9095</p>
                      </div>

                      <div>
                        <p class="text-sm text-gray-600">Shipping Address</p>
                        <p class="mt-1.5 font-medium">
                          3 Park Heath Cottages, Park Heath, Cheswardine, TF9
                          2NR
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr class="mt-12 mb-0.5 border-gray-200" />

                  <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-left divide-y-2 divide-gray-200 custom-table">
                            <thead>
                              <tr>
                                <th scope="col" class="!pl-0">
                                  Products (3)
                                </th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty.</th>
                                <th scope="col" class="!pr-0">
                                  Total
                                </th>
                              </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200">
                              <tr>
                                <td class="!pl-0">
                                  <div class="flex items-start space-x-4">
                                    <div class="flex items-center justify-center flex-none overflow-hidden bg-gray-200 rounded-md w-14 h-14">
                                      <img
                                        class="object-cover w-full h-full"
                                        src=""
                                        alt=""
                                        loading="lazy"
                                      />
                                    </div>
                                    <div>
                                      <span class="block font-medium w-[150px] sm:w-[200px] md:w-full">
                                        Sassie Basic 31 LTR Navy Backpack
                                        Waterproof School Bag
                                      </span>
                                      <ul class="mt-2 space-y-1 text-gray-600">
                                        <li class="flex items-center space-x-2">
                                          <span> Color: </span>
                                          <span class="w-3.5 h-3.5 bg-black rounded-full"></span>
                                          <span> Black </span>
                                        </li>

                                        <li class="flex items-center space-x-2">
                                          <span> Size: </span>
                                          <span> XL </span>
                                        </li>

                                        <li class="flex items-center space-x-2">
                                          <span> Variant: </span>
                                          <span> Value </span>
                                        </li>

                                        <li class="flex items-center space-x-2">
                                          <span> Variant: </span>
                                          <span> Value </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td>₹1,000</td>
                                <td>2</td>
                                <td class="!pr-0">₹2,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="mb-6 border-gray-200" />

                  <div class="flex items-center justify-end">
                    <div class="w-full xl:w-2/3">
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

                  <hr class="my-8 border-gray-200" />

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-10">
                    <div class="sm:col-span-2">
                      <a
                        href="#"
                        title=""
                        class="btn btn-white"
                        role="button"
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          class="w-5 h-5 mr-2 -ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                          />
                        </svg>
                        Track Order
                      </a>
                    </div>

                    <div>
                      <p class="text-sm text-gray-600">Track Company Name</p>
                      <p class="mt-1.5 font-medium">FedEx</p>
                    </div>

                    <div>
                      <p class="text-sm text-gray-600">Tracking Number</p>
                      <p class="mt-1.5 font-medium">#123456</p>
                    </div>
                  </div>

                  <hr class="my-8 border-gray-200" />

                  <div>
                    <p class="text-sm text-gray-600">Notes</p>
                    <p class="mt-1.5 font-medium">
                      Proin sodales placerat sollicitudin. Donec fringilla, ante
                      nec consectetur placerat, velit libero cursus risus, sit
                      amet hendrerit velit enim non leo.
                    </p>
                  </div>
                </div>

                <div class="lg:col-span-2 lg:pl-4 xl:pl-10">
                  <div class="flow-root">
                    <ul class="-mb-8 status-timeline">
                      <li>
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-yellow-800 bg-yellow-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-warning">Received</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-blue-800 bg-blue-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-info">Process</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-purple-800 bg-purple-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-purple">Shipped</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-green-800 bg-green-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-success">Delivered</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-red-800 bg-red-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-danger">Cancel</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="last-status">
                        <div class="relative pb-8">
                          <span
                            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                            aria-hidden="true"
                          ></span>
                          <div class="relative flex space-x-3">
                            <div>
                              <span class="flex items-center justify-center w-8 h-8 text-orange-800 bg-orange-100 rounded-full ring-8 ring-white">
                                <svg
                                  class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="flex flex-1 min-w-0 pt-px">
                              <div>
                                <p class="badge badge-orange">Return</p>
                                <div class="mt-2 ml-0.5 space-y-1">
                                  <p class="text-sm">
                                    <span class="font-medium">Date:</span>
                                    2021-05-04
                                  </p>
                                  <p class="text-sm">
                                    <span class="font-medium">Time:</span>
                                    09:53:01
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
