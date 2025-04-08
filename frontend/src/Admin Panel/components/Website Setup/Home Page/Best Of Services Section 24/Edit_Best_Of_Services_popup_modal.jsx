import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Edit_Best_Of_Services_popup_modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* EDIT BEST OF SERVICES POPUP MODAL [SECTION 24] */}
      <div
        // class="modal active"
        className={`modal ${
          isOpenPopupModal.best_of_services_section_24 ? "active" : ""
        }`}
        id="addBastofservicesModal"
        tabindex="-1"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div class="modal-content" role="document">
            <div class="modal-header">
              <h5 class="mr-12 text-lg font-bold truncate">
                Edit Bast Of Services
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-6 h-6"
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
            <div id="bastofservisModel">
              <form
                method="post"
                action="./insertFile/edit-bastofservices.php"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="id" value="63" />

                <div class="modal-body">
                  <div class="space-y-4">
                    <div>
                      <label for="">Title</label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder=" "
                          class=""
                          value="100% PAYMENT SECURE"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="">
                        Image<span>(Image ratio should be 1:1)</span>
                      </label>
                      <div class="mt-1">
                        <div class="file-input">
                          <input type="file" id="file-upload" name="image" />
                          <label class="label" id="file-name" data-js-label="">
                            No file selected
                          </label>
                          <span class="button">Choose</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label for="">SubTitle</label>
                      <div class="mt-1">
                        <textarea
                          name="testimonial"
                          id=""
                          placeholder=""
                          rows="4"
                          class="resize-y"
                        >
                          We ensure payment with razorpay, visa, amazon pay,
                          apple pay, G-pay &amp; more.
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <div class="flex items-center justify-end space-x-4">
                    {/* <!--  <button type="button" class="btn btn-light" data-dismiss="modal" aria-label="Close Modal">
                  Discard
              </button>--> */}

                    <button type="submit" name="submit" class="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
