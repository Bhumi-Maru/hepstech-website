import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function SubCategories() {
  const { toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* START SUB CATEGORIES */}
      <div className="container">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">Sub Categories</h1>

          <div className="hidden mt-4 sm:mt-0 sm:block">
            <a
              title="Create Sub Category"
              className="btn btn-primary"
              role="button"
              data-toggle="modal"
              data-target="#createSubCategoryModal"
              onClick={() => toggleModal("addSubCategoryPopupModal")}
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
              Create Sub Category
            </a>
          </div>
        </div>

        <div className="max-w-sm mt-4">
          <label for="searchSubCategory" className="sr-only">
            Search
          </label>
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="searchSubCategory"
              id="searchSubCategory"
              className="!pl-10"
              placeholder="Search category by name..."
            />
          </div>
        </div>

        <div className="mt-4" id="subCategoriesView">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <input type="checkbox" id="" name="" />
                        </th>
                        <th scope="col">Image</th>
                        <th scope="col" className="nowrap">
                          Sub Category Title
                        </th>
                        <th scope="col" className="nowrap">
                          Main Category Title
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 list">
                      <tr>
                        <td>
                          <input type="checkbox" id="" name="" />
                        </td>
                        <td>
                          <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                            <svg
                              className="w-6 h-6 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="sub-category nowrap">SUV</td>
                        <td className="main-category nowrap">
                          Automobile & Motorcycle
                        </td>
                        <td>
                          <span className="badge badge-danger">Draft</span>
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
                              data-microtip-position="top"
                              role="tooltip"
                              data-toggle="modal"
                              data-target="#editSubCategoryModal"
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
                                />
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
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" id="" name="" />
                        </td>
                        <td>
                          <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                            <img
                              className="object-cover w-full h-full"
                              src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="sub-category nowrap">
                          Office Equipment
                        </td>
                        <td className="main-category nowrap">
                          Computer & Accessories
                        </td>
                        <td>
                          <span className="badge badge-success">Published</span>
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
                              data-microtip-position="top"
                              role="tooltip"
                              data-toggle="modal"
                              data-target="#editSubCategoryModal"
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
                                />
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
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" id="" name="" />
                        </td>
                        <td>
                          <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                            <img
                              className="object-cover w-full h-full"
                              src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="sub-category nowrap">
                          Outwear & Jackets
                        </td>
                        <td className="main-category nowrap">
                          Men Clothing & Fashion
                        </td>
                        <td>
                          <span className="badge badge-success">Published</span>
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
                              data-microtip-position="top"
                              role="tooltip"
                              data-toggle="modal"
                              data-target="#editSubCategoryModal"
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
                                />
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
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" id="" name="" />
                        </td>
                        <td>
                          <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                            <img
                              className="object-cover w-full h-full"
                              src="https://images.unsplash.com/photo-1541625247055-1a61cfa6a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="sub-category nowrap">Cycling</td>
                        <td className="main-category nowrap">
                          Sports & Outdoor
                        </td>
                        <td>
                          <span className="badge badge-success">Published</span>
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
                              data-microtip-position="top"
                              role="tooltip"
                              data-toggle="modal"
                              data-target="#editSubCategoryModal"
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
                                />
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
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type="checkbox" id="" name="" />
                        </td>
                        <td>
                          <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-md">
                            <img
                              className="object-cover w-full h-full"
                              src="https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="sub-category nowrap">Swimming</td>
                        <td className="main-category nowrap">
                          Sports & Outdoor
                        </td>
                        <td>
                          <span className="badge badge-success">Published</span>
                        </td>
                        <td>
                          <div className="flex items-center -ml-2 space-x-3">
                            <a
                              href="#"
                              title=""
                              className="btn-circle"
                              aria-label="Edit"
                              data-microtip-position="top"
                              role="tooltip"
                              data-toggle="modal"
                              data-target="#editSubCategoryModal"
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
                                />
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
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    <tfoot className="hidden not-found">
                      <tr>
                        <td
                          colspan="7"
                          className="px-4 py-3 text-center bg-white rounded-b-lg"
                        >
                          <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                            <svg
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            No Data Found
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
            <p className="text-gray-700 showing">
              Showing <span id="page-first-item-number">1</span> -
              <span id="page-last-item-number">5</span> of
              <span id="totalSubCategories">40</span> sub categories
            </p>

            <ul className="mt-5 pagination sm:mt-0"></ul>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <button type="button" className="btn btn-error">
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
          Bulk Delete
        </button>
      </div>
      {/* END SUB CATEGORIES */}
    </>
  );
}
