import React from "react";

export default function Time_Slots() {
  return (
    <>
      {/* START TIME SLOTS PAGE */}
      <div className="container">
        <div className="flex items-baseline justify-between space-x-8">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Time Slots</h1>

          <div className="hidden mt-4 sm:mt-0 sm:block">
            <a
              href="#"
              title="Import Data"
              className="btn btn-primary"
              role="button"
              data-toggle="modal"
              data-target="#createTimeSlotModal"
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
              Create Time Slot
            </a>
          </div>
        </div>

        <div className="mt-4 lg:flex lg:items-end lg:space-x-4">
          <div className="flex-1 max-w-sm">
            <label for="searchTimeSlots"> Search Time Slots </label>
            <div className="relative mt-1 rounded-md">
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
                name="searchTimeSlots"
                id="searchTimeSlots"
                className="!pl-10"
                placeholder="Search time slots..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:mt-0 lg:flex-shrink lg:grid-cols-none lg:flex lg:space-x-4 lg:gap-0">
            <div className="flex-1 col-span-2 sm:col-span-1">
              <label for="timeSlotStatus" className="">
                Enable/Disable Time Slots
              </label>
              <div className="mt-1">
                <select name="" id="" className="">
                  <option value="">Active</option>
                  <option value="">Deactive</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <label for="" className="">
                {" "}
                Delivery Starts from{" "}
              </label>
              <div className="mt-1">
                <select name="" id="" className="">
                  <option value="">Today</option>
                  <option value="">Tomorrow</option>
                  <option value="">Third Day</option>
                  <option value="">Fourth Day</option>
                  <option value="">Fifth Day</option>
                  <option value="">Sixth Day</option>
                  <option value="">Seventh Day</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <label for="" className="">
                {" "}
                Days you want to allow{" "}
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="0"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4" id="timeSlotsView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th className="nowrap">Title</th>
                        <th className="nowrap">Start Time</th>
                        <th className="nowrap">End Time</th>
                        <th className="nowrap">Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td className="timeslot-title nowrap">
                          9:00 AM to 10:00 AM
                        </td>
                        <td className="nowrap start-time">9:00:00</td>
                        <td className="nowrap end-time">10:00:00</td>
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
              <span id="totalTimeSlots">40</span> time slots
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
      {/* END TIME SLOTS PAGE */}
    </>
  );
}
