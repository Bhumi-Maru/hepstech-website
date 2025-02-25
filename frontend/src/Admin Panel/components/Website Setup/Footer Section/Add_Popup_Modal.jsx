import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Add_Popup_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const [activeTab, setActiveTab] = useState("addPages"); // State to track active tab

  return (
    <>
      {/* ADD PAGES AND ADD CUSTOM LINKS POPUP MODAL IN FOOTER SECTION PAGE */}
      <div
        className="modal active"
        id="createLinkModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header !pb-0">
              <ul className="flex items-center space-x-6 tabs" role="tablist">
                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    className={`tab-link ${
                      activeTab === "addPages" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("addPages")}
                  >
                    Add Pages
                  </button>
                </li>

                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    className={`tab-link ${
                      activeTab === "addCustomLink" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("addCustomLink")}
                  >
                    Add Custom Link
                  </button>
                </li>
              </ul>

              {/* Close Button */}
              <button
                type="button"
                className="!-mt-5 btn-close"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div className="tab-content">
                {/* Add Pages Tab */}
                {activeTab === "addPages" && (
                  <div className="tab-pane !py-0 show" role="tabpanel">
                    <form action="#">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="pageTitle"> Enter Page Title </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="pageTitle"
                              placeholder=""
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="selectPage"> Select Page </label>
                          <div className="mt-1">
                            <select id="selectPage" className="">
                              <option value="">Select Page</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex items-center justify-end space-x-4">
                          <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => setIsOpenPopupModal(false)}
                          >
                            Discard
                          </button>
                          <button type="button" className="btn btn-primary">
                            Add Page
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Add Custom Link Tab */}
                {activeTab === "addCustomLink" && (
                  <div className="tab-pane !py-0 show" role="tabpanel">
                    <form action="#">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="linkTitle"> Enter Link Title </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="linkTitle"
                              placeholder=""
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="linkURL"> Enter Link URL </label>
                          <div className="mt-1">
                            <input
                              type="url"
                              id="linkURL"
                              placeholder=""
                              className=""
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-end space-x-4">
                          <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => setIsOpenPopupModal(false)}
                          >
                            Discard
                          </button>
                          <button type="button" className="btn btn-primary">
                            Add Link
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
