import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Home_Page_Section_5() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* [HOME PAGE SECTION 5] Horizontal Banners - 3 Items  */}
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
              checked={toggleStates.horizontal_Banners_3_Items}
              onChange={() => handleToggle("horizontal_Banners_3_Items")}
            />
            <label for="horizontalBanners02Status"></label>
          </div>
        </div>

        {toggleStates.horizontal_Banners_3_Items && (
          <>
            <div class="mt-4" id="horizontalBanners02Content">
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
                  onClick={() => toggleModal("horizontal_Banners_3_Items")}
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
                    ></path>
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
          </>
        )}
      </div>
    </>
  );
}
