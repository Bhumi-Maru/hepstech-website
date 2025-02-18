import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard_2() {
  return (
    <>
      {/* START DASHBOARD SUB SECTION 2 */}
      <div className="">
        <div className="mt-5 sm:flex sm:items-end sm:justify-between sm:space-x-32">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            New Orders
          </h3>

          <div className="sm:flex sm:items-center sm:flex-1 sm:space-x-4 sm:justify-end">
            <Link
              to="/orders"
              title="View All Orders"
              className="flex-shrink-0 w-full mt-3 sm:w-auto sm:ml-5 btn btn-primary sm:order-3 sm:mt-0"
            >
              View All Orders
            </Link>

            <div className="mt-4 sm:ml-auto sm:order-2 sm:mt-0 sm:flex-1 sm:max-w-md">
              <label for="searchOrders" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="searchOrders"
                  id="searchOrders"
                  className="!pl-10"
                  placeholder="Search by order #, customer name or phone..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5" id="ordersView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col" className="nowrap">
                          Order #
                        </th>
                        <th scope="col" className="nowrap">
                          Date & Time
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Qty.</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td className="font-medium order-id">#12345</td>
                        <td>2021-05-04 09:53:01</td>
                        <td>
                          <span className="badge badge-warning">Received</span>
                        </td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <a
                              href="customer-details.html"
                              title=""
                              className="flex flex-none"
                            >
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  RC
                                </span>
                              </span>
                            </a>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <Link
                                  to="/customer-details"
                                  title="customer details"
                                  className="hover:text-skin-primary"
                                >
                                  Ricardo Cooper
                                </Link>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (885) 242-9095
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>100</td>
                        <td>₹1,000</td>
                        <td className="nowrap">
                          <div className="flex items-center -ml-2 space-x-3">
                            <Link
                              to="/order-details"
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
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </Link>

                            <a
                              href="#"
                              title="Download Invoice"
                              className="btn-circle"
                              aria-label="Download Invoice"
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
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    <tfoot className="hidden not-found">
                      <tr>
                        <td
                          colspan="7"
                          className="px-4 py-3 text-center bg-white rounded-b-lg"
                        >
                          <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                            <svg
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            No Data Found
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
            <p className="text-gray-700 showing">
              Showing <span id="page-first-item-number">1</span> -{" "}
              <span id="page-last-item-number">5</span> of{" "}
              <span id="totalOrders">40</span> orders
            </p>

            <ul className="mt-5 pagination sm:mt-0">
              <li className="active">
                <a className="page" href="#" data-i="1" data-page="10">
                  1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* END DASHBOARD SUB SECTION 2 */}
    </>
  );
}
