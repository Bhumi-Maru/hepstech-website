import React from "react";
import { Link } from "react-router-dom";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Orders() {
  const { toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* START ORDERS */}
      <div className="container">
        <div className="flex items-baseline justify-between">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Orders</h1>

          <div className="mt-4 sm:mt-0 sm:flex sm:items-center sm:space-x-4">
            <Link
              title="Export"
              className="btn btn-white"
              role="button"
              data-toggle="modal"
              data-target="#exportOrdersModal"
              onClick={() => toggleModal("exportDetails")}
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export
            </Link>

            <Link
              to="/create-order"
              title="Create Order"
              className="hidden btn btn-primary sm:inline-flex"
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create Order
            </Link>
          </div>
        </div>

        <div className="mt-4 lg:flex lg:items-center lg:justify-between lg:space-x-4">
          <div className="flex-1 max-w-sm">
            <label for="searchOrders" className="sr-only">
              {" "}
              Search{" "}
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

          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:mt-0 lg:flex-shrink lg:grid-cols-none lg:flex lg:space-x-4 lg:gap-0">
            <div className="flex-1 flex-shrink w-full col-span-2 sm:col-span-1">
              <input
                type="text"
                name=""
                id="filterByDate"
                placeholder="Filter by Date"
                className=""
                autocomplete="off"
                readonly
              />
            </div>

            <div>
              <select name="" id="">
                <option value="">All</option>
                <option value="">Received</option>
                <option value="">Process</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
                <option value="">Return</option>
              </select>
            </div>

            <div>
              <select name="" id="">
                <option value="">Order number (ascending)</option>
                <option value="">Order number (descending)</option>
                <option value="">Date (oldest first)</option>
                <option value="">Date (newest first)</option>
                <option value="">Customer name (A-Z)</option>
                <option value="">Customer name (Z-A)</option>
                <option value="">Payment status (A-Z)</option>
                <option value="">Payment status (Z-A)</option>
                <option value="">Total price (low to high)</option>
                <option value="">Total price (high to low)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4" id="ordersView">
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
                        <th scope="col" className="nowrap">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td className="order-id">#12345</td>
                        <td>2021-05-04 09:53:01</td>
                        <td>
                          <span className="badge badge-warning">Received</span>
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  RC
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate customer-name">
                                Ricardo Cooper
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

                      <tr>
                        <td className="order-id">#67890</td>
                        <td>2021-03-15 10:45:05</td>
                        <td>
                          <span className="badge badge-success">Delivered</span>
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  KA
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate customer-name">
                                Kelley Aranda
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (980) 206-3409
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>40</td>
                        <td>₹3,500</td>
                        <td className="nowrap">
                          <div className="flex items-center -ml-2 space-x-3">
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
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </a>

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
              Showing <span id="page-first-item-number">1</span> -
              <span id="page-last-item-number">5</span> of
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
      {/* END ORDERS */}
    </>
  );
}
