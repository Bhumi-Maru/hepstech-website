import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Add_Testimonials_Section_23_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      <div
        className={`modal ${
          isOpenPopupModal.testimonials_Reviews_Slider_Section_23
            ? "active"
            : ""
        }`}
        id="addTestimonialModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Add Testimonial
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
                <div className="space-y-4">
                  <div>
                    <label for=""> Main Category Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter main category title"
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for=""> Main Image </label>
                    <div className="mt-1">
                      <div className="file-input">
                        <input type="file" />
                        <label className="label" data-js-label="">
                          No file selected
                        </label>
                        <span className="button">Choose</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for=""> Testimonial </label>
                    <div className="mt-1">
                      <textarea
                        name=""
                        id=""
                        placeholder=""
                        rows="4"
                        className="resize-y"
                      ></textarea>
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
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
