import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section__23() {
  const { toggleStates, handleToggle, setIsOpenPopupModal } =
    useAdminGlobalContext();
  const { homePage, setCurrentBanner, setIsEditMode, setFormData } =
    useHomePageContext();

  // Filter banners for layoutNumber 23
  const sectionBanners = homePage.filter(
    (banner) => banner.home_page_layout_number?.layoutNumber === 23
  );

  const handleAddNew = () => {
    setCurrentBanner(null);
    setIsEditMode(false);
    setFormData((prev) => ({
      ...prev,
      layoutNumber: 23,
      // home_page_main_category: "",
      home_page_section_title: "",
      home_page_testimonial: "",
      home_page_image: null,
    }));
    setIsOpenPopupModal((prev) => ({
      ...prev,
      testimonials_Reviews_Slider_Section_23: true,
    }));
  };

  return (
    <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
      <div className="flex items-center justify-between space-x-8">
        <label
          htmlFor="testimonialsStatus"
          className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
        >
          Testimonials / Reviews Slider
        </label>

        <div className="flex-shrink-0 ml-4 toggle-switch">
          <input
            type="checkbox"
            id="testimonialsStatus"
            checked={toggleStates.testimonials_Reviews_Slider_Section_23}
            onChange={() =>
              handleToggle("testimonials_Reviews_Slider_Section_23")
            }
          />
          <label htmlFor="testimonialsStatus"></label>
        </div>
      </div>

      {toggleStates.testimonials_Reviews_Slider_Section_23 && (
        <div className="mt-4" id="testimonialsContent">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                  <table className="min-w-full divide-y divide-gray-200 custom-table">
                    <thead>
                      <tr>
                        <th scope="col">Testimonial</th>
                        <th scope="col">Customer</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {sectionBanners.map((testimonial, index) => (
                        <tr key={index}>
                          <td>{testimonial.home_page_testimonial}</td>
                          <td className="nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="flex-none">
                                <img
                                  className="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                  src={
                                    testimonial.customer_image ||
                                    "images/default-avatar.png"
                                  }
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate customer-name">
                                  <span className="text-gray-900">
                                    {testimonial.customer_name || "Anonymous"}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center -ml-2 space-x-3">
                              <button
                                className="btn-circle"
                                aria-label="Edit"
                                onClick={() => {
                                  // handleEdit(testimonial);
                                }}
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </button>

                              <button
                                className="btn-circle"
                                aria-label="Delete"
                                onClick={() => {
                                  // handleDelete(testimonial._id);
                                }}
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
            <button
              type="button"
              className="w-full btn btn-white sm:w-auto"
              onClick={handleAddNew}
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Testimonial
            </button>

            <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
              <button type="button" className="btn btn-dark-light">
                Discard
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
