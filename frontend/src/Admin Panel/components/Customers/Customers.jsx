import React from "react";
import { Link } from "react-router-dom";

export default function Customers() {
  return (
    <>
      {/* START CUSTOMERS PAGE */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Customers</h1>

        <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:space-x-4">
          <div className="flex-1 max-w-sm">
            <label for="searchCustomers" className="sr-only">
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
                name="searchCustomers"
                id="searchCustomers"
                className="!pl-10"
                placeholder="Search customer by name, email or phone..."
              />
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <select name="" id="">
              <option value="">All</option>
              <option value="">New</option>
              <option value="">Returning</option>
              <option value="">Wallet User</option>
            </select>
          </div>
        </div>

        <div className="mt-4" id="customersView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <input type="checkbox" name="" id="" />
                        </th>
                        <th scope="col">Customer</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Wallet Amount</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-none">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  JC
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <a
                                  href="customer-details.html"
                                  title=""
                                  className="text-gray-900 hover:text-skin-primary"
                                >
                                  Jamey Craghead
                                </a>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (885) 242-9095
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="email-address">
                          jameycraghead@company.com
                        </td>
                        <td>12</td>
                        <td>₹5,000</td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-4">
                            <Link
                              to="/customer-details"
                              title="View Customer Details"
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

                            <div>
                              <label for="" className="sr-only">
                                Toggle Switch
                              </label>
                              <div className="h-6 toggle-switch">
                                <input
                                  type="checkbox"
                                  id="toggleSwitch"
                                  role="checkbox"
                                  tabindex="0"
                                />
                                <label for="toggleSwitch"></label>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  TU
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <a
                                  href="#"
                                  title=""
                                  className="text-gray-900 hover:text-skin-primary"
                                >
                                  Timothy Upshaw
                                </a>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (478) 699-0023
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="email-address">
                          timothy.upshaw@example.com
                        </td>
                        <td>12</td>
                        <td>₹5,000</td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-4">
                            <a
                              href="customer-details.html"
                              title="View Customer Details"
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

                            <div>
                              <label for="" className="sr-only">
                                Toggle Switch
                              </label>
                              <div className="h-6 toggle-switch">
                                <input
                                  type="checkbox"
                                  id="toggleSwitch"
                                  role="checkbox"
                                  tabindex="0"
                                />
                                <label for="toggleSwitch"></label>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  OC
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <a
                                  href="#"
                                  title=""
                                  className="text-gray-900 hover:text-skin-primary"
                                >
                                  Oren Chester
                                </a>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (383) 676-4230
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="email-address">
                          oren.chester@company.com
                        </td>
                        <td>12</td>
                        <td>₹5,000</td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-4">
                            <a
                              href="customer-details.html"
                              title="View Customer Details"
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

                            <div>
                              <label for="" className="sr-only">
                                Toggle Switch
                              </label>
                              <div className="h-6 toggle-switch">
                                <input
                                  type="checkbox"
                                  id="toggleSwitch"
                                  role="checkbox"
                                  tabindex="0"
                                />
                                <label for="toggleSwitch"></label>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  ?
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <a
                                  href="#"
                                  title=""
                                  className="text-gray-900 hover:text-skin-primary"
                                >
                                  Untitled
                                </a>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (481) 249-6182
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="email-address">Email not available</td>
                        <td>12</td>
                        <td>₹5,000</td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-4">
                            <a
                              href="customer-details.html"
                              title="View Customer Details"
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

                            <div>
                              <label for="" className="sr-only">
                                Toggle Switch
                              </label>
                              <div className="h-6 toggle-switch">
                                <input
                                  type="checkbox"
                                  id="toggleSwitch"
                                  role="checkbox"
                                  tabindex="0"
                                />
                                <label for="toggleSwitch"></label>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                                <span className="text-sm font-medium leading-none text-white">
                                  KR
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate customer-name">
                                <a
                                  href="#"
                                  title=""
                                  className="text-gray-900 hover:text-skin-primary"
                                >
                                  Kayla Renteria
                                </a>
                              </p>
                              <p className="text-sm text-gray-500 truncate phone-number">
                                (821) 861-3288
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="email-address">
                          kyla.renteria@example.com
                        </td>
                        <td>12</td>
                        <td>₹5,000</td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-4">
                            <a
                              href="customer-details.html"
                              title="View Customer Details"
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

                            <div>
                              <label for="" className="sr-only">
                                Toggle Switch
                              </label>
                              <div className="h-6 toggle-switch">
                                <input
                                  type="checkbox"
                                  id="toggleSwitch"
                                  role="checkbox"
                                  tabindex="0"
                                />
                                <label for="toggleSwitch"></label>
                              </div>
                            </div>
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
              <span id="totalCustomers">40</span> customers
            </p>

            <ul className="mt-5 pagination sm:mt-0"></ul>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <button type="button" className="btn btn-error">
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
          Bulk Deactivate
        </button>
      </div>
      {/* END CUSTOMERS PAGE */}
    </>
  );
}
