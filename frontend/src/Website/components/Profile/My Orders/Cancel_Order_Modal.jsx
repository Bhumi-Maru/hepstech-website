import React from "react";

export default function Cancel_Order_Modal({ setIsCancelOrderModalOpen }) {
  return (
    <>
      {/* CANCEL ORDER MODAL */}
      <div
        className="modal active"
        id="cancelOrderConfirmationModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-md">
          <div className="modal-content" role="document">
            {/* <!-- close button --> */}
            <button
              type="button"
              className="absolute btn-close top-4 right-4"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsCancelOrderModalOpen(false)}
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

            <div className="px-4 py-8 modal-body">
              <div className="sm:flex sm:items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="w-6 h-6 text-red-600"
                    x-description="Heroicon name: outline/exclamation"
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h5
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Are you sure to cancel this order?
                  </h5>
                  <p className="mt-2 text-sm text-gray-500">
                    Donec fringilla, ante nec consectetur placerat, velit libero
                    cursus risus, sit amet hendrerit velit enim non leo. This
                    action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 modal-footer">
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-white"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsCancelOrderModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-error">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
