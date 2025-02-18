import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Export_Details() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* START EXPORT DETAILS POPUP MODAL */}
      <div
        className="modal active"
        id="exportOrdersModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Export Orders
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
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">Export</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="currentPageOrders"
                          name="exportData"
                          className=""
                        />
                        <label for="currentPageOrders" className="ml-3">
                          Current page
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="allOrders"
                          name="exportData"
                          className=""
                        />
                        <label for="allOrders" className="ml-3">
                          {" "}
                          All orders{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="selectedOrders"
                          name="exportData"
                          className=""
                        />
                        <label for="selectedOrders" className="ml-3">
                          Selected: 0 orders
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="matchingOrders"
                          name="exportData"
                          className=""
                        />
                        <label for="matchingOrders" className="ml-3">
                          12 orders matching your search
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="ordersDate"
                          name="exportData"
                          className=""
                        />
                        <label for="ordersDate" className="ml-3">
                          Orders by date
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Export as</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="csvForExcel"
                          name="exportAs"
                          className=""
                        />
                        <label for="csvForExcel" className="ml-3">
                          CSV for Excel, Numbers, or other spreadsheet programs
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="plainCSV"
                          name="exportAs"
                          className=""
                        />
                        <label for="plainCSV" className="ml-3">
                          Plain CSV file
                        </label>
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
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Export Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END EXPORT DETAILS POPUP MODAL */}
    </>
  );
}
