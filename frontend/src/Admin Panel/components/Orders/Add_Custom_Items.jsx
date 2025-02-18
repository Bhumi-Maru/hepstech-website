import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Add_Custom_Items() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* START ADD CUSTOM ITEM */}
      <div
        className="modal active"
        id="addCustomItemModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Add Custom Item
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
                <div className="grid grid-cols-7 gap-5">
                  <div className="col-span-3">
                    <label for=""> Item Name </label>
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

                  <div className="col-span-2">
                    <label for=""> Price </label>
                    <div className="relative mt-1 rounded-md">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500 sm:text-sm"> ₹ </span>
                      </div>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="!pl-7"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label for=""> Quantity </label>
                    <div className="relative w-24 mt-1 overflow-hidden border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                      <button
                        type="button"
                        className="absolute top-0 right-0 px-1 py-px border-l border-gray-300 rounded-none hover:bg-gray-100 focus:outline-none addQty"
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
                          ></path>
                        </svg>
                      </button>

                      <input
                        type="text"
                        name=""
                        id="productQty2"
                        value="1"
                        min="1"
                        max="100"
                        className="!w-24 !border-none font-semibold rounded-none"
                      />

                      <button
                        type="button"
                        className="absolute bottom-0 right-0 px-1 py-px border-t border-l border-gray-300 rounded-none hover:bg-gray-100 focus:outline-none subQty"
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
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="itemTaxable"
                        id="itemTaxable"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label for="itemTaxable"> Item is taxable </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="itemShipping"
                        id="itemShipping"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label for="itemShipping"> Item requires shipping </label>
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
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END ADD CUSTOM ITEM */}
    </>
  );
}
