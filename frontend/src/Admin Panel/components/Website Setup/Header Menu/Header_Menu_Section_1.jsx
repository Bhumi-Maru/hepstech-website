import React from "react";

export default function Header_Menu_Section_1() {
  return (
    <>
      {/* START HEADER MENU SECTION 1 */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Header Menu</h1>

          <button type="submit" className="btn btn-primary">
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
            Add Menu
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <div className="flex items-center justify-between space-x-8">
                <h3
                  className="text-base font-medium truncate"
                  id="sectionTitleValue"
                >
                  Menu Title
                </h3>

                <a
                  href="#"
                  title="Delete Menu"
                  className="btn btn-error-light"
                  role="button"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </a>
              </div>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <form action="#">
                <div className="space-y-4">
                  <div>
                    <label for=""> Enter Menu Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id="sectionTitle"
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div className="space-y-3" id="elements-container">
                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-1">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 1
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-1">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 2
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-1">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 3
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-outline"
                    data-toggle="modal"
                    data-target="#addMainCategoryModal"
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
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <div className="flex items-center justify-between space-x-8">
                <h3
                  className="text-base font-medium truncate"
                  id="sectionTitleValue2"
                >
                  Menu Title 2
                </h3>

                <a
                  href="#"
                  title="Delete Menu"
                  className="btn btn-error-light"
                  role="button"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </a>
              </div>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <form action="#">
                <div className="space-y-4">
                  <div>
                    <label for=""> Enter Menu Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id="sectionTitle2"
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div className="space-y-3" id="elements-container2">
                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-2">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 1
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-2">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 2
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="font-medium bg-gray-100 rounded-md draggable-element main-categories-2">
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
                            />
                          </svg>
                          <span className="flex-1 block truncate">
                            Category 3
                          </span>
                          <button type="button" className="ml-auto">
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary-outline">
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
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="btn btn-dark-light"
            data-toggle="modal"
            data-target="#confirmationModal"
          >
            Discard
          </button>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
      {/* END HEADER MENU SECTION 1 */}
    </>
  );
}
