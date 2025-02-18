import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Create_Time_Slots() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* START CREATE TIME SLOTS */}
      <div
        className="modal active"
        id="createTimeSlotModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Create Time Slot
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="sm:col-span-2">
                    <label for="timeSlotTitle"> Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="timeSlotTitle"
                        id="timeSlotTitle"
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for="startTime"> Start Time </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="startTime"
                        id="startTime"
                        className="!pr-10"
                        placeholder=""
                        readonly=""
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for="endTime"> End Time </label>
                    <div className="mt-1">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="endTime"
                          id="endTime"
                          className="!pr-10"
                          placeholder=""
                          readonly=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenPopupModal(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CREATE TIME SLOTS */}
    </>
  );
}
