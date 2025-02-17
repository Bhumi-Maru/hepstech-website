import React, { useState } from "react";

export default function Mobile_Navigation_Modal({
  setIsMobileNavigationModal,
}) {
  const [dropdownsState, setDropdownsState] = useState({
    men: false,
    women: false,
    kids: false,
    electronics: false,
    mobilePhones: false,
    furniture: false,
  });

  const toggleDropdown = (section) => {
    setDropdownsState((prevState) => {
      const newDropdownsState = {
        ...prevState,
        [section]: !prevState[section],
      };

      // Close all other dropdowns if one is opened
      for (let key in newDropdownsState) {
        if (key !== section) {
          newDropdownsState[key] = false;
        }
      }

      return newDropdownsState;
    });
  };

  return (
    <>
      <aside
        className="max-w-xs drawer drawer-left sm:max-w-sm active"
        tabIndex="-1"
        id="mobileNavigation"
        aria-hidden="false"
      >
        <div className="px-4 py-3 drawer-header">
          <img
            className="w-auto h-10"
            src="../website assets/images/logo.png"
            alt=""
          />

          <button
            type="button"
            className="btn-close"
            data-dismiss="drawer"
            aria-label="Close"
            onClick={() => setIsMobileNavigationModal(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <form action="#" className="p-4 border-b border-gray-200 sm:hidden">
            <div>
              <label htmlFor="" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for products, brand and more..."
                  className="!pl-10 !py-2"
                />
              </div>
            </div>
          </form>

          <nav className="divide-y divide-gray-200 accordion" id="menuLinks">
            {[
              { name: "Men", section: "men" },
              { name: "Women", section: "women" },
              { name: "Kids", section: "kids" },
              { name: "Electronics", section: "electronics" },
              { name: "Mobile Phones", section: "mobilePhones" },
              { name: "Furniture", section: "furniture" },
            ].map((item) => (
              <div className="accordion-item" key={item.section}>
                <dt
                  className={`accordion-header ${
                    dropdownsState[item.section] ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="px-5 accordion-button"
                    aria-expanded={dropdownsState[item.section]}
                    aria-controls={`collapse-${item.section}`}
                    onClick={() => toggleDropdown(item.section)}
                  >
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                    <span className="flex items-center ml-6 accordion-control h-7">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 transform ${
                          dropdownsState[item.section] ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </dt>

                {dropdownsState[item.section] && (
                  <dd className="block">
                    <div className="accordion-content">
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex px-5 py-2 hover:bg-gray-100 focus:bg-gray-100"
                          >
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex px-5 py-2 hover:bg-gray-100 focus:bg-gray-100"
                          >
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex px-5 py-2 hover:bg-gray-100 focus:bg-gray-100"
                          >
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </dd>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <div className="drawer-overlay show" tabIndex="-1"></div>
    </>
  );
}
