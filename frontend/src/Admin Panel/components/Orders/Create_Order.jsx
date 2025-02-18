import React from "react";
import { Link } from "react-router-dom";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Create_Order() {
  const { toggleModal, count, increment, decrement } = useAdminGlobalContext();
  return (
    <>
      {/* START CREATE ORDER POPUP MODAL */}
      <div className="container">
        <div className="sm:flex sm:items-center sm:space-x-3">
          <nav aria-label="Back">
            <Link
              to="/orders"
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
              <span className="block sm:hidden"> Back </span>
            </Link>
          </nav>

          {/* <!-- PAGE TITLE --> */}
          <h1 className="mt-3 heading-1 sm:mt-0">Create Order</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-4 xl:grid-cols-12">
          <div className="space-y-5 xl:col-span-8">
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-3 sm:px-5">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <h3 className="text-base font-medium">Order Details</h3>

                  <Link
                    title="Add Custom Item"
                    className="mt-4 btn btn-light sm:mt-0"
                    data-toggle="modal"
                    data-target="#addCustomItemModal"
                    role="button"
                    onClick={() => toggleModal("addCustomItems")}
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
                    Add Custom Item
                  </Link>
                </div>

                <div className="mt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
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
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="searchOrders"
                          id="searchOrders"
                          className="!pl-10"
                          placeholder="Search products..."
                        />
                      </div>
                    </div>
                    <button type="button" className="btn btn-white">
                      Browse
                    </button>
                  </div>
                </div>
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
                            <th scope="col">Total</th>
                            <th scope="col" className="!rounded-none"></th>
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
                                <div>
                                  <span className="block font-medium">
                                    Animal Print Boys Track Suit
                                  </span>
                                  <span className="block text-gray-600">
                                    ₹1,000
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="relative w-24 overflow-hidden border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 px-1 py-px border-l border-gray-300 rounded-none focus:outline-none addQty hover:bg-gray-100"
                                  onClick={() => increment()}
                                >
                                  <svg
                                    className="w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M5 15l7-7 7 7"
                                    />
                                  </svg>
                                </button>

                                <input
                                  type="text"
                                  name=""
                                  id="productQty"
                                  value={count}
                                  min="1"
                                  max="100"
                                  className="!w-24 !border-none font-semibold rounded-none"
                                />

                                <button
                                  type="button"
                                  className="absolute bottom-0 right-0 px-1 py-px border-t border-l border-gray-300 rounded-none focus:outline-none subQty hover:bg-gray-100"
                                  onClick={() => decrement()}
                                >
                                  <svg
                                    className="w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                            <td>₹1,000</td>
                            <td>
                              <a
                                href="#"
                                title=""
                                className="btn-circle"
                                aria-label="Delete"
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-5 border-t border-gray-200 sm:px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <div>
                      <label for=""> Notes </label>
                      <div className="mt-1 form-input">
                        <textarea
                          name=""
                          id=""
                          rows="2"
                          placeholder=""
                          className="resize-y"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <p className="font-medium">Subtotal</p>
                        <p className="font-medium">₹0.00</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="text-gray-600">Discount</p>
                        <p className="text-gray-600">₹0.00</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="text-gray-600">Tax</p>
                        <p className="text-gray-600">₹0.00</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="text-gray-600">Delivery Charge</p>
                        <p className="text-gray-600">₹0.00</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-gray-900">
                          Total
                        </p>
                        <p className="text-lg font-semibold">₹0.00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 border-t border-gray-200 sm:px-5">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Invoice</p>

                  <a
                    href="#"
                    title=""
                    className="btn btn-primary"
                    role="button"
                  >
                    Send Invoice
                  </a>
                </div>
              </div>

              <div className="px-4 py-5 border-t border-gray-200 sm:px-5">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <p className="font-medium">Payment</p>

                  <div className="flex flex-col mt-3 space-y-3 sm:space-y-0 sm:flex-row sm:mt-0 sm:space-x-3 sm:items-center">
                    <a
                      href="#"
                      title=""
                      className="btn btn-white"
                      role="button"
                    >
                      Mark as Paid
                    </a>
                    <a
                      href="#"
                      title=""
                      className="btn btn-white"
                      role="button"
                    >
                      Mark as Pending
                    </a>
                    <a
                      href="#"
                      title=""
                      className="btn btn-white"
                      role="button"
                    >
                      Pay by Credit Card
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 xl:col-span-4">
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
                    <label for=""> Track Company Name </label>
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
                    <label for=""> Tracking Number </label>
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
                    <label for=""> Add Link </label>
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
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <div className="flex items-center justify-end space-x-4">
          <button type="button" className="btn btn-dark-light">
            Discard
          </button>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
      {/* END CREATE ORDER POPUP MODAL */}
    </>
  );
}
