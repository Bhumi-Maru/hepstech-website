import React from "react";

export default function Header_Menu_Section__2() {
  return (
    <>
      {/* HEADER SECTION 2 [CATEGORY LIST & PAGE LIST] */}
      <div
        id="showmenu"
        className="grid grid-cols-2 gap-5 mt-5 sm:grid-cols-4 xl:grid-cols-6"
      >
        <div className="lg:col-span-2"></div>
        <div id="menurow" className="col-span-4 bg-white rounded-lg shadow">
          <div className="px-4 pb-5 sm:px-5 sm:py-2.5">
            <form method="post" action="./public/drag-itemset.php" className="mt-5">
              <div className="space-y-4">
                <div className="space-y-3 drag" id="elements-container">
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="143" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">Home </span>
                        <label className="text-gray-500">
                          <i>Custom Link</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('143')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="145" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith ImmuneBoost{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('145')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="137" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith Heromix{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('137')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="138" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith SlimPulse{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('138')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="140" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith Prolift{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('140')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="136" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith MassRise{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('136')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="135" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith VitaBoost{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('135')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="141" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith SugerGuard{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('141')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories">
                    <input type="hidden" name="id[]" value="144" />
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-4">
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
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                        <span className="flex-1 block truncate">
                          Zenith VitalEdge{" "}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onclick="deleteCat('144')"
                          className="ml-auto"
                        >
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-5">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:col-span-2"></div>
      </div>
    </>
  );
}
