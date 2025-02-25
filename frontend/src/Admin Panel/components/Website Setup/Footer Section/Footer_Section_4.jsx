import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Footer_Section_4() {
  const { toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* FOOTER SECTION 4 [COLUMNS] */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3 sm:px-5">
            <h3 className="text-base font-medium">First Column</h3>
          </div>

          <div className="px-4 pb-5 sm:px-5">
            <div>
              <label for=""> First Column Title </label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <hr className="my-5 border-gray-200" />

            <p className="text-sm text-gray-500">Links</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-5">
                <div className="flex-1">
                  <p className="font-medium truncate">About Us</p>
                </div>

                <div className="flex items-center flex-shrink-0 space-x-3">
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
              </div>

              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#createLinkModal"
                onClick={() => toggleModal("addPagesAndaddCustomLink")}
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
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3 sm:px-5">
            <h3 className="text-base font-medium">Second Column</h3>
          </div>

          <div className="px-4 pb-5 sm:px-5">
            <div>
              <label for=""> Second Column Title </label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <hr className="my-5 border-gray-200" />

            <p className="text-sm text-gray-500">Links</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-5">
                <div className="flex-1">
                  <p className="font-medium truncate">My Account</p>
                </div>

                <div className="flex items-center flex-shrink-0 space-x-3">
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
              </div>

              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#createLinkModal"
                onClick={() => toggleModal("addPagesAndaddCustomLink")}
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
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3 sm:px-5">
            <h3 className="text-base font-medium">Third Column</h3>
          </div>

          <div className="px-4 pb-5 sm:px-5">
            <div>
              <label for=""> Third Column Title </label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <hr className="my-5 border-gray-200" />

            <p className="text-sm text-gray-500">Links</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-5">
                <div className="flex-1">
                  <p className="font-medium truncate">Discount</p>
                </div>

                <div className="flex items-center flex-shrink-0 space-x-3">
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
              </div>

              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#createLinkModal"
                onClick={() => toggleModal("addPagesAndaddCustomLink")}
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
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
