import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Home_Page_Section__23() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* [HOME PAGE SECTION 23] Testimonials / Reviews Slider  */}
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
              checked={toggleStates.testimonials_Reviews_Slider_Section_23}
              onChange={() =>
                handleToggle("testimonials_Reviews_Slider_Section_23")
              }
            />
            <label for="testimonialsStatus"></label>
          </div>
        </div>

        {toggleStates.testimonials_Reviews_Slider_Section_23 && (
          <>
            <div
              class="mt-4"
              id="testimonialsContent"
              style={{ display: "block" }}
            >
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
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=9JeVfFeU2K&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
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
                  onClick={() =>
                    toggleModal("testimonials_Reviews_Slider_Section_23")
                  }
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
          </>
        )}
      </div>
    </>
  );
}
