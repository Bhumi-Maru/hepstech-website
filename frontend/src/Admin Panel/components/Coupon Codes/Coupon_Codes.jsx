import React from "react";

export default function Coupon_Codes() {
  return (
    <>
      {/* START COUPON CODES PAGE */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Coupon Codes</h1>

          <div className="hidden mt-4 sm:mt-0 sm:block">
            <a
              href="create-coupon-code.html"
              title="Create Coupon Code"
              className="btn btn-primary"
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
              Create Coupon Code
            </a>
          </div>
        </div>

        <div className="max-w-sm mt-4">
          <label for="searchCoupons" className="sr-only">
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
              name="searchCoupons"
              id="searchCoupons"
              className="!pl-10"
              placeholder="Search coupon by promo code or message..."
            />
          </div>
        </div>

        <div className="mt-5" id="couponsView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col" className="nowrap">
                          Promo Code
                        </th>
                        <th>Timeframe</th>
                        <th scope="col" className="nowrap">
                          No. of Users
                        </th>
                        <th scope="col">Used</th>
                        <th scope="col">Min. Order Amount</th>
                        <th scope="col">Discount</th>
                        <th scope="col" className="nowrap">
                          Discount Type
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td className="nowrap">
                          <span className="block font-medium coupon-code">
                            DIWALI50
                          </span>
                          <span className="block mt-1 text-gray-600 message">
                            Aenean ut tellus tellus
                          </span>
                        </td>
                        <td>15-05-2021 to 20-05-2021</td>
                        <td>15</td>
                        <td>5</td>
                        <td>₹1,000</td>
                        <td>₹100</td>
                        <td className="discount-type">Flat</td>
                        <td>
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
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
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
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                ></path>
                              </svg>
                            </a>

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
              <span id="totalCoupons">40</span> coupon codes
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
      {/* END COUPON CODES PAGE */}
    </>
  );
}
