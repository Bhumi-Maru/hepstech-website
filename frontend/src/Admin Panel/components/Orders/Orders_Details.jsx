import React from "react";

export default function Orders_Details() {
  return (
    <>
      {/* START ORDER DETAILS */}
      <div className="container">
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4">
          <div className="sm:flex sm:items-center sm:space-x-3">
            <nav aria-label="Back">
              <a
                href="orders.html"
                title="Back to Orders"
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-1 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <span className="block sm:hidden">Back</span>
              </a>
            </nav>

            <div className="flex items-center mt-3 space-x-2 sm:mt-0">
              <h1 className="text-lg font-bold md:text-xl">Order #12345</h1>

              <span className="badge badge-warning">Received</span>
            </div>
          </div>

          <div className="mt-3 sm:flex sm:items-center sm:space-x-4 sm:mt-0">
            <div>
              <label for="orderStatus" className="sr-only">
                Order Status
              </label>
              <div className="flex items-center py-1 pl-3 bg-white border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                <div className="flex-none pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    Change Status:
                  </span>
                </div>
                <select
                  name="orderStatus"
                  id="orderStatus"
                  className="py-0 pl-2 border-none rounded-none pr-auto focus:border-none focus:ring-0 focus:outline-none"
                >
                  <option value="">Received</option>
                  <option value="">Process</option>
                  <option value="">Shipped</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                  <option value="">Return</option>
                </select>
              </div>
            </div>

            <a
              href="#"
              title=""
              className="mt-4 btn btn-primary sm:mt-0"
              role="button"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
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

        <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-12">
          <div className="space-y-5 md:col-span-8">
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Order Details</h3>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <div className="flow-root mt-3">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">
                        Order #
                      </p>

                      <p className="text-sm font-medium">#12345</p>
                    </li>

                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">
                        Order Date
                      </p>

                      <p className="text-sm font-medium">2021-05-04 09:53:01</p>
                    </li>

                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">Qty.</p>

                      <p className="text-sm font-medium">100</p>
                    </li>

                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-semibold text-gray-600">
                        Total Amount
                      </p>

                      <p className="text-sm font-semibold">₹1,000</p>
                    </li>

                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-semibold text-gray-600">
                        Payment Method
                      </p>

                      <p className="text-sm font-semibold">Cash on Delivery</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Payment Summary</h3>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <div className="flow-root mt-2">
                  <ul className="-my-3 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">
                        Subtotal
                      </p>
                      <p className="text-sm font-medium text-gray-600">₹500</p>
                    </li>
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">
                        Discount
                      </p>
                      <p className="text-sm font-medium text-gray-600">₹0</p>
                    </li>
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">Tax</p>
                      <p className="text-sm font-medium text-gray-600">₹500</p>
                    </li>
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-medium text-gray-600">
                        Delivery Charge
                      </p>
                      <p className="text-sm font-medium text-gray-600">₹50</p>
                    </li>
                    <li className="flex items-center justify-between py-3">
                      <p className="text-sm font-semibold">Total</p>
                      <p className="text-sm font-semibold">₹1,000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Products</h3>
              </div>
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col" className="!rounded-none">
                              Product
                            </th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Amount</th>
                            <th scope="col" className="!rounded-none">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 list">
                          <tr>
                            <td>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center flex-none w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                                  <svg
                                    className="w-6 h-6 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                </div>
                                <span className="font-medium">
                                  Animal Print Boys Track Suit
                                </span>
                              </div>
                            </td>
                            <td>2</td>
                            <td>₹500</td>
                            <td>₹1,000</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center flex-none w-12 h-12 overflow-hidden bg-gray-100 rounded-md">
                                  <img
                                    className="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1472717400230-1c592a3179d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80"
                                    alt=""
                                  />
                                </div>
                                <span className="font-medium">
                                  Sassie Basic 31 LTR Navy Backpack Waterproof
                                  School Bag
                                </span>
                              </div>
                            </td>
                            <td>2</td>
                            <td>₹500</td>
                            <td>₹1,000</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center flex-none w-12 h-12 overflow-hidden bg-gray-100 rounded-md">
                                  <img
                                    className="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1613710774862-d813121e6d44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <span className="font-medium">
                                  Analog Black Dial Men's Watch-32-BK-CK
                                </span>
                              </div>
                            </td>
                            <td>2</td>
                            <td>₹500</td>
                            <td>₹1,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:col-span-4">
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Customer Details</h3>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <div className="flex items-center mt-1 space-x-3">
                  <div className="flex-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                      <span className="text-sm font-medium leading-none text-white">
                        RC
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate user-name">
                      Ricardo Cooper
                    </p>
                  </div>
                  <div className="ml-auto">
                    <a
                      href="customer-details.html"
                      title="View Customer Details"
                      className="btn btn-white"
                      role="button"
                    >
                      View
                    </a>
                  </div>
                </div>

                <hr className="my-5 border-gray-200" />

                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Contact Information
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block text-sm break-all hover:text-blue-600 hover:underline"
                    >
                      ricardo.cooper@company.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block text-sm break-all hover:text-blue-600 hover:underline"
                    >
                      (885) 242-9095
                    </a>
                  </li>
                </ul>

                <hr className="my-5 border-gray-200" />

                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Shipping Address
                </p>
                <p className="mt-3 text-sm break-all">
                  3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Tracking Details</h3>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <div className="space-y-4">
                  <div>
                    <label for="">Track Company Name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for="">Tracking Number</label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for="">Add Link</label>
                    <div className="mt-1">
                      <input
                        type="url"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">Status Timeline</h3>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <div className="flow-root mt-2">
                  <ul className="-mb-8 status-timeline">
                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-yellow-800 bg-yellow-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-warning">Received</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
                                  09:53:01
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-blue-800 bg-blue-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-info">Process</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
                                  09:53:01
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-purple-800 bg-purple-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-purple">Shipped</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
                                  09:53:01
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-green-800 bg-green-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-success">Delivered</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
                                  09:53:01
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-red-800 bg-red-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-danger">Cancel</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
                                  09:53:01
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="last-status">
                      <div className="relative pb-8">
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 sideline"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex items-center justify-center w-8 h-8 text-orange-800 bg-orange-100 rounded-full ring-8 ring-white">
                              <svg
                                className="w-5 h-5"
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
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-1 min-w-0 pt-px">
                            <div>
                              <p className="badge badge-orange">Return</p>
                              <div className="mt-2 ml-0.5 space-y-1">
                                <p className="text-sm">
                                  <span className="font-medium">Date:</span>{" "}
                                  2021-05-04
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Time:</span>{" "}
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
      {/* END ORDER DETAILS */}
    </>
  );
}
