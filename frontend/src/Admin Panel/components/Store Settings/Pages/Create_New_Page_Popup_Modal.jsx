import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_New_Page_Popup_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* CREATE A NEW PAGE POPUP MODAL */}
      <div
        className="modal active"
        id="createPageModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-2xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Create New Page
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
              <form action="#">
                <div className="space-y-4">
                  <div>
                    <label for=""> Enter Page Title </label>
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
                  <div>
                    <label for=""> Page Content </label>
                    <div className="mt-1">
                      <div className="ql-toolbar ql-snow">
                        <span className="ql-formats">
                          <span className="ql-header ql-picker">
                            <span
                              className="ql-picker-label"
                              tabindex="0"
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-2"
                            >
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <polygon
                                  className="ql-stroke"
                                  points="7 11 9 13 11 11 7 11"
                                ></polygon>{" "}
                                <polygon
                                  className="ql-stroke"
                                  points="7 7 9 5 11 7 7 7"
                                ></polygon>{" "}
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabindex="-1"
                              id="ql-picker-options-2"
                            >
                              <span
                                tabindex="0"
                                role="button"
                                className="ql-picker-item"
                                data-value="1"
                              ></span>
                              <span
                                tabindex="0"
                                role="button"
                                className="ql-picker-item"
                                data-value="2"
                              ></span>
                              <span
                                tabindex="0"
                                role="button"
                                className="ql-picker-item"
                                data-value="3"
                              ></span>
                              <span
                                tabindex="0"
                                role="button"
                                className="ql-picker-item ql-selected"
                              ></span>
                            </span>
                          </span>
                          <select
                            className="ql-header"
                            style={{ display: "none" }}
                          >
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option selected="selected"></option>
                          </select>
                        </span>
                        <span className="ql-formats">
                          <button type="button" className="ql-bold">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <path
                                className="ql-stroke"
                                d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                              ></path>{" "}
                              <path
                                className="ql-stroke"
                                d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                              ></path>{" "}
                            </svg>
                          </button>
                          <button type="button" className="ql-italic">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="13"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="5"
                                x2="11"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="8"
                                x2="10"
                                y1="14"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </button>
                          <button type="button" className="ql-underline">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <path
                                className="ql-stroke"
                                d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                              ></path>{" "}
                              <rect
                                className="ql-fill"
                                height="1"
                                rx="0.5"
                                ry="0.5"
                                width="12"
                                x="3"
                                y="15"
                              ></rect>{" "}
                            </svg>
                          </button>
                          <button type="button" className="ql-link">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="11"
                                y1="7"
                                y2="11"
                              ></line>{" "}
                              <path
                                className="ql-even ql-stroke"
                                d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                              ></path>{" "}
                              <path
                                className="ql-even ql-stroke"
                                d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                              ></path>{" "}
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-list"
                            value="ordered"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke ql-thin"
                                x1="2.5"
                                x2="4.5"
                                y1="5.5"
                                y2="5.5"
                              ></line>{" "}
                              <path
                                className="ql-fill"
                                d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                              ></path>{" "}
                              <path
                                className="ql-stroke ql-thin"
                                d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                              ></path>{" "}
                              <path
                                className="ql-stroke ql-thin"
                                d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                              ></path>{" "}
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-list"
                            value="bullet"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button type="button" className="ql-clean">
                            <svg className="" viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="5"
                                x2="13"
                                y1="3"
                                y2="3"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="9.35"
                                y1="12"
                                y2="3"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="11"
                                x2="15"
                                y1="11"
                                y2="15"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="11"
                                y1="11"
                                y2="15"
                              ></line>{" "}
                              <rect
                                className="ql-fill"
                                height="1"
                                rx="0.5"
                                ry="0.5"
                                width="7"
                                x="2"
                                y="14"
                              ></rect>{" "}
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div
                        className="rounded-b-lg long-content ql-container ql-snow"
                        id="newPageContent"
                      >
                        <div
                          className="ql-editor ql-blank"
                          data-gramm="false"
                          contenteditable="true"
                          data-placeholder="Write content"
                        >
                          <p>
                            <br />
                          </p>
                        </div>
                        <div
                          className="ql-clipboard"
                          contenteditable="true"
                          tabindex="-1"
                        ></div>
                        <div className="ql-tooltip ql-hidden">
                          <a
                            className="ql-preview"
                            target="_blank"
                            href="about:blank"
                          ></a>
                          <input
                            type="text"
                            data-formula="e=mc^2"
                            data-link="https://quilljs.com"
                            data-video="Embed URL"
                          />
                          <a className="ql-action"></a>
                          <a className="ql-remove"></a>
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
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Add Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
