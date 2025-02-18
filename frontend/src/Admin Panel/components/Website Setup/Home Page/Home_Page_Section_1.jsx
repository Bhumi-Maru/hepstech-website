import React from "react";

export default function Home_Page_Section_1() {
  return (
    <>
      {/* START HOME PAGE */}
      <div class="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 class="heading-1">Home Page Setup</h1>

        <div class="mt-4 space-y-4">
          {/* <!-- MAIN BANNER SLIDER --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="mainBannerStatus"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Main Banner Slider
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="mainBannerStatus"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="mainBannerStatus"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="mainBannerContent">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- CATEGORY SLIDER - 8 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="categorySection01Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Category Section 01
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="categorySection01Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="categorySection01Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="categorySection01Content">
              <div class="max-w-xs">
                <label for="" class="sr-only">
                  Enter Category Title
                </label>
                <div class="mt-1 form-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter category title"
                    class=""
                  />
                </div>
              </div>

              <div class="flex flex-col mt-5">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th>Title</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 list">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="w-16 h-16 overflow-hidden bg-gray-200 border border-gray-200 rounded-md">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>Cotten Kurti</td>
                            <td>3</td>
                            <td>3</td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addCategoryModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNER - SMALL - 1 ITEM --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalSingleBanner01Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banner - Small - 1 Item
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalSingleBanner01Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalSingleBanner01Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalSingleBanner01Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- FLASH SALE SLIDER --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="flashSaleSliderStatus"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Flash Sale Slider
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="flashSaleSliderStatus"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="flashSaleSliderStatus"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="flashSaleSliderContent">
              <div class="max-w-xs">
                <div>
                  <label for=""> Set Timer for Flash Sale </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id="setTimer"
                      placeholder="Enter days"
                      class=""
                      autofocus="false"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <hr class="my-4 border-gray-200" />
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNERS - 3 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners02Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - 3 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners02Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners02Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners02Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- CATEGORY SLIDER - 5 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="categorySection02Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Category Slider 02
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="categorySection02Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="categorySection02Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="categorySection02Content">
              <div class="max-w-xs">
                <label for="" class="sr-only">
                  Enter Category Title
                </label>
                <div class="mt-1 form-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter category title"
                    class=""
                  />
                </div>
              </div>

              <div class="flex flex-col mt-5">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th>Title</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 list">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="w-16 h-16 overflow-hidden bg-gray-200 border border-gray-200 rounded-md">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>Cotten Kurti</td>
                            <td>3</td>
                            <td>3</td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addCategoryModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- POPULAR PRODUCTS SLIDER 01 - 4 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="popularProducts01Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Popular Products Slider 01
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="popularProducts01Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="popularProducts01Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="popularProducts01Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNERS - LARGE - 2 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners03Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Large - 2 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners03Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners03Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners03Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- POPULAR PRODUCTS SLIDER 02 - 4 ITEMS  --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="popularProducts02Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Popular Products Slider 02
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="popularProducts02Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="popularProducts02Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="popularProducts02Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNERS - 2 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners04Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - 2 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners04Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners04Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners04Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- BEST SELLING PRODUCTS SLIDER 01 - 6 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="bestSellingProducts01Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Best Selling Products Slider 01
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="bestSellingProducts01Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="bestSellingProducts01Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="bestSellingProducts01Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- VERTICAL BANNERS - 4 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="verticalBanners01Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Vertical Banners - 4 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="verticalBanners01Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="verticalBanners01Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="verticalBanners01Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md aspect-w-2 aspect-h-3">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNER - LARGE - 1 ITEM --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners05Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Large - 1 Item
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners05Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners05Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners05Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- BEST SELLING PRODUCTS SLIDER 02 - 6 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="bestSellingProducts02Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Best Selling Products Slider 02
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="bestSellingProducts02Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="bestSellingProducts02Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="bestSellingProducts02Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNER - SMALL - 1 ITEM --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners06Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Small - 1 Item
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners06Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners06Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners06Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- VERTICAL BANNERS - 4 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="verticalBanners02Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Vertical Banners - 4 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="verticalBanners02Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="verticalBanners02Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="verticalBanners02Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md aspect-w-2 aspect-h-3">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- BEST SELLING PRODUCTS SLIDER 03 - 6 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="bestSellingProducts03Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Best Selling Products Slider 03
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="bestSellingProducts03Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="bestSellingProducts03Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="bestSellingProducts03Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNERS - LARGE - 2 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners07Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Large - 2 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners07Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners07Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners07Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNER - LARGE - 1 ITEM --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners08Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Large - 1 Item
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners08Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners08Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners08Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- BEST SELLING PRODUCTS SLIDER 04 - 6 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="bestSellingProducts04Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Best Selling Products Slider 04
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="bestSellingProducts04Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="bestSellingProducts04Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="bestSellingProducts04Content">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div class="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div class="relative mt-1">
                    <select
                      class=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div class="mt-1 form-input">
                    <select name="" id="" placeholder="0" class="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Products
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- VERTICAL BANNERS - 4 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="verticalBanners03Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Vertical Banners - 4 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="verticalBanners03Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="verticalBanners03Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="verticalBanners03Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md aspect-w-2 aspect-h-3">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- HORIZONTAL BANNER - SMALL - 1 ITEM --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="horizontalBanners09Status"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Horizontal Banners - Small - 1 Items
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="horizontalBanners09Status"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="horizontalBanners09Status"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="horizontalBanners09Content">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Main Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Products</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>1</td>
                            <td>
                              <div class="overflow-hidden bg-gray-200 border border-gray-200 rounded-md w-28 aspect-w-16 aspect-h-6">
                                <img
                                  class="object-cover w-full h-full"
                                  src=""
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>21 products</td>
                            <td>
                              <div class="w-36">
                                <select name="" id="" class="">
                                  <option value="">Published</option>
                                  <option value="">Unpublished</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addMainBannerModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Banner
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- TESTIMONIALS / REVIEWS SLIDER - 4 ITEMS --> */}
          <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
            <div class="flex items-center justify-between space-x-8">
              <label
                for="testimonialsStatus"
                class="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
              >
                Testimonials / Reviews Slider
              </label>

              <div class="flex-shrink-0 ml-4 toggle-switch">
                <input
                  type="checkbox"
                  id="testimonialsStatus"
                  role="checkbox"
                  tabindex="0"
                />
                <label for="testimonialsStatus"></label>
              </div>
            </div>

            <div class="hidden mt-4" id="testimonialsContent">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table class="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Testimonial</th>
                            <th scope="col">Customer</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td>
                              “This is an super space for your customers quote.
                              Don’t worry it works smooth as pie. You will get
                              all what you need by writing a text here.“
                            </td>
                            <td class="nowrap">
                              <div class="flex items-center space-x-3">
                                <div class="flex-none">
                                  <img
                                    class="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                    src="images/default-avatar.png"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium truncate customer-name">
                                    <a
                                      href="customer-details.html"
                                      title=""
                                      class="text-gray-900 hover:text-skin-primary"
                                    >
                                      Jamey Craghead
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>

                          <tr>
                            <td>
                              “This is an super space for your customers quote.
                              Don’t worry it works smooth as pie. You will get
                              all what you need by writing a text here.“
                            </td>
                            <td class="nowrap">
                              <div class="flex items-center space-x-3">
                                <div class="flex-none">
                                  <img
                                    class="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9JeVfFeU2K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium truncate customer-name">
                                    <a
                                      href="customer-details.html"
                                      title=""
                                      class="text-gray-900 hover:text-skin-primary"
                                    >
                                      Jamey Craghead
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="flex items-center -ml-2 space-x-3">
                                <a
                                  href="#"
                                  title=""
                                  class="btn-circle"
                                  aria-label="Edit"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                                  class="btn-circle"
                                  aria-label="Delete"
                                  data-microtip-position="top"
                                  role="tooltip"
                                >
                                  <svg
                                    class="w-5 h-5"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  class="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#addTestimonialModal"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
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
                  Add Testimonial
                </button>

                <div class="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" class="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END HOME PAGE */}
    </>
  );
}
