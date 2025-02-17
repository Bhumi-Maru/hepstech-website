import React from "react";

export default function Shipping() {
  return (
    <>
      {/* START SHIPPING PAGE */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between sm:space-x-8">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Shipping</h1>

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="#"
              title="Import Data"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Import Data
            </a>

            <a
              href="#"
              title="Export Data"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export Data
            </a>
          </div>
        </div>

        <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:space-x-4">
          <div className="flex-1">
            <label for="searchLocations" className="sr-only">
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
                name="searchLocations"
                id="searchLocations"
                className="!pl-10"
                placeholder="Search location..."
              />
            </div>
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:space-x-4 sm:mt-0">
            <div className="flex-none">
              <span className="relative z-0 flex flex-shrink-0 rounded-md shadow-sm radio-group">
                <div className="relative flex-1 custom-radio sm:flex-none">
                  <label for="" className="sr-only">
                    {" "}
                    Optional{" "}
                  </label>
                  <div className="toggle-radio">
                    <input
                      type="radio"
                      id="optionalButton"
                      role="radio"
                      tabindex="0"
                      name="type"
                    />
                    <label for="optionalButton"> Optional </label>
                  </div>
                </div>

                <div className="relative flex-1 custom-radio sm:flex-none">
                  <label for="" className="sr-only">
                    {" "}
                    Compulsory{" "}
                  </label>
                  <div className="toggle-radio">
                    <input
                      type="radio"
                      id="compulsoryButton"
                      role="radio"
                      tabindex="0"
                      name="type"
                    />
                    <label for="compulsoryButton"> Compulsory </label>
                  </div>
                </div>
              </span>
            </div>

            <div className="flex-none mt-4 sm:mt-0">
              <span className="relative z-0 flex flex-shrink-0 rounded-md shadow-sm radio-group">
                <div className="relative flex-1 custom-radio sm:flex-none">
                  <label for="" className="sr-only">
                    {" "}
                    Active{" "}
                  </label>
                  <div className="toggle-radio">
                    <input
                      type="radio"
                      id="activeButton"
                      role="radio"
                      tabindex="0"
                      name="status"
                    />
                    <label for="activeButton"> Active </label>
                  </div>
                </div>

                <div className="relative flex-1 custom-radio sm:flex-none">
                  <label for="" className="sr-only">
                    {" "}
                    De-active{" "}
                  </label>
                  <div className="toggle-radio">
                    <input
                      type="radio"
                      id="deactiveButton"
                      role="radio"
                      tabindex="0"
                      name="status"
                    />
                    <label for="deactiveButton"> De-active </label>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4" id="shippingView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th className="nowrap">Country</th>
                        <th className="nowrap">State</th>
                        <th className="nowrap">City</th>
                        <th className="nowrap">Area</th>
                        <th className="nowrap">PIN Code</th>
                        <th className="nowrap">Delivery Charges</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td className="country nowrap">India</td>
                        <td className="state nowrap">Gujarat</td>
                        <td className="city nowrap">Ahmedabad</td>
                        <td className="area nowrap">Satellite</td>
                        <td className="pin nowrap">380005</td>
                        <td>₹100</td>
                      </tr>

                      <tr>
                        <td className="country nowrap">India</td>
                        <td className="state nowrap">Gujarat</td>
                        <td className="city nowrap">Vadodara</td>
                        <td className="area nowrap">Waghodia</td>
                        <td className="pin nowrap">390025</td>
                        <td>₹250</td>
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
              <span id="totalLocations">40</span> locations
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
      {/* END SHIPPING PAGE */}
    </>
  );
}
