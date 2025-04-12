import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Best_Of_Services_Section_1() {
  const { toggleStates, handleToggle, setIsOpenPopupModal } =
    useAdminGlobalContext();
  const {
    setCurrentBanner,
    setIsEditMode,
    setFormData,
    setSelectedMainBanner1,
  } = useHomePageContext();

  const { homePage } = useHomePageContext();

  // Filter banners for layoutNumber 24
  const sectionBanners = homePage.filter(
    (banner) => banner.home_page_layout_number?.layoutNumber === 24
  );

  const handleEdit = (testimonial) => {
    setCurrentBanner(testimonial);
    setIsEditMode(true);
    setFormData({
      ...testimonial,
      layoutNumber: testimonial.home_page_layout_number?.layoutNumber || 24,
      home_page_image: testimonial.home_page_image?._id || null,
    });
    setSelectedMainBanner1(testimonial.home_page_image?._id || null);
    setIsOpenPopupModal((prev) => ({
      ...prev,
      best_of_services_section_24: true,
    }));
  };

  return (
    <>
      {/* BEST OF SERVICES SECTION 1 */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            htmlFor="bastofservicesStatus"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Best Of Services
          </label>
          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="bastofservicesStatus"
              role="checkbox"
              tabIndex={0}
              checked={toggleStates.best_of_services_section_24}
              onChange={() => handleToggle("best_of_services_section_24")}
            />
            <label htmlFor="bastofservicesStatus"></label>
          </div>
        </div>

        {toggleStates.best_of_services_section_24 && (
          <>
            <div className="mt-4" id="bastofservicesContent">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg max-h-80">
                      <table className="min-w-full divide-y divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Sub Title</th>
                            <th scope="col">Image</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {/* Example Static Row */}
                          {sectionBanners.map((service) => (
                            <tr key={service._id}>
                              <td>{service.home_page_section_title}</td>
                              <td className="nowrap">
                                <div className="flex items-center space-x-3">
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate customer-name">
                                      <span className="text-gray-900 hover:text-skin-primary">
                                        {service.home_page_testimonial}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="flex-none">
                                  {/* <img
                                    className="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                    src={service.image}
                                    alt=""
                                    loading="lazy"
                                  /> */}
                                  {service.home_page_image?.filePath ? (
                                    <img
                                      className="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                      src={`http://localhost:7000${service.home_page_image.filePath}`}
                                      alt={service.home_page_image.filename}
                                      style={{ background: "white" }}
                                      loading="lazy"
                                    />
                                  ) : (
                                    <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                                      <svg
                                        className="w-6 h-6 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center -ml-2 space-x-3">
                                  <button
                                    className="btn-circle"
                                    aria-label="Edit"
                                    data-toggle="modal"
                                    data-target="#addBastofservicesModal"
                                    onClick={() => handleEdit(service)}
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
                {/* Add any additional buttons or footer logic here */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
