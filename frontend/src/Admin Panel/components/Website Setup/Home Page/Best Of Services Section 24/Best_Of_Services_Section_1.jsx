import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Best_Of_Services_Section_1() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();

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
                          {[
                            {
                              id: "60",
                              title: "FREE SHIPPING",
                              subtitle: "Free shipping all our India",
                              image:
                                "https://zenithenergize.com/media/slider/353724267_free_shipping_PNG3.png",
                            },
                            {
                              id: "61",
                              title: "SUPPORT 24/7",
                              subtitle:
                                "Contact us 10:00 Am To 18:00 Pm hours a day, 7 days a week",
                              image:
                                "https://zenithenergize.com/media/slider/459964229_kisspng-vector-graphics-computer-icons-logo-portable-netwo-cisco-collaboration-support-solutions-voice-vi-5ba4b60abe8c24.4202629715375211627805.jpg",
                            },
                            {
                              id: "62",
                              title: "Return Policy",
                              subtitle:
                                "Simply return it within 2 days of delivery.",
                              image:
                                "https://zenithenergize.com/media/slider/306473457_11153377.png",
                            },
                            {
                              id: "63",
                              title: "100% PAYMENT SECURE",
                              subtitle:
                                "We ensure payment with razorpay, visa, amazon pay, apple pay, G-pay & more.",
                              image:
                                "https://zenithenergize.com/media/slider/222427605_pngtree-100-secure-grunge-vector-icon-picture-image_7866021.png",
                            },
                          ].map((service) => (
                            <tr key={service.id}>
                              <td>{service.title}</td>
                              <td className="nowrap">
                                <div className="flex items-center space-x-3">
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate customer-name">
                                      <span className="text-gray-900 hover:text-skin-primary">
                                        {service.subtitle}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="flex-none">
                                  <img
                                    className="w-10 h-10 overflow-hidden bg-gray-500 rounded-full"
                                    src={service.image}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center -ml-2 space-x-3">
                                  <button
                                    className="btn-circle"
                                    aria-label="Edit"
                                    data-toggle="modal"
                                    data-target="#addBastofservicesModal"
                                    onClick={() =>
                                      toggleModal("best_of_services_section_24")
                                    }
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
