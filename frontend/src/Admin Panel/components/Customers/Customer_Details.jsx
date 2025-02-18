import React from "react";

export default function Customer_Details() {
  return (
    <>
      {/*START CUSTOMER DETAILS  */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div className="sm:flex sm:items-center sm:space-x-3">
            <nav aria-label="Back">
              <a
                href="customers.html"
                title="Back to Customers"
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-1 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  classNameName="w-6 h-6"
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

            {/* <!-- PAGE TITLE --> */}
            <h1 className="mt-3 heading-1 sm:mt-0">Jamey Craghead</h1>
          </div>

          <a
            href="#"
            title="Ban Customer"
            className="mt-4 btn btn-error-light sm:mt-0"
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ban this Customer
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-12">
          <div className="space-y-5 md:col-span-8">
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 pt-4 pb-5 sm:px-5">
                <div className="flex items-center space-x-3">
                  <div className="flex-none">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
                      <span className="text-sm font-medium leading-none text-white">
                        JC
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">Jamey Craghead</p>
                    <p className="mt-0.5 text-sm text-gray-600">
                      Member since 12/01/2021
                    </p>
                  </div>
                </div>

                <form className="mt-6">
                  <div>
                    <label for="">Customer Note</label>
                    <div className="mt-1 form-input">
                      <textarea
                        name=""
                        id=""
                        rows="1"
                        placeholder="Add a note"
                        className="resize-y"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium">
                  All Orders <span className="ml-1 text-gray-600">(12)</span>
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col" className="!rounded-none nowrap">
                              Order #
                            </th>
                            <th scope="col" className="nowrap">
                              Date & Time
                            </th>
                            <th scope="col">Status</th>
                            <th>Amount</th>
                            <th scope="col" className="!rounded-none">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 list">
                          <tr>
                            <td>#67890</td>
                            <td>2021-05-04 09:53:01</td>
                            <td>
                              <span className="badge badge-warning">
                                Received
                              </span>
                            </td>
                            <td>₹1,000</td>
                            <td>
                              <div className="-ml-2">
                                <a
                                  href="order-details.html"
                                  title="View Order Details"
                                  className="btn-circle"
                                  aria-label="View"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
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
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </td>
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
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">Customer Overview</h3>

                  <p>
                    <a
                      href="#"
                      title=""
                      className="text-link primary"
                      data-toggle="modal"
                      data-target="#editWalletModal"
                    >
                      Edit Wallet
                    </a>
                  </p>
                </div>
              </div>
              <div className="px-4 pb-5 sm:px-5">
                <p className="mt-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
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
                  Address
                </p>
                <p className="mt-3 text-sm break-all">
                  3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CUSTOMER DETAILS */}
    </>
  );
}
