import React, { useEffect, useRef, useState } from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import Date_Range_Model from "./Date_Range_Model";

export default function All_Media() {
  const { isDropdownOpen, toggleDropdown } = useAdminGlobalContext();
  const fileInputRef = useRef(null);

  // date range
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const datePickerRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Handle clicks outside the component to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* START ALL_MEDIA */}
      <div className="container" id="filesView">
        <div className="sm:flex sm:items-baseline sm:justify-between sm:space-x-8">
          {/* <!-- PAGE TITLE --> */}
          <h1 className="heading-1">All Media</h1>

          <div className="hidden mt-4 sm:mt-0 sm:block">
            <button
              onClick={handleClick}
              title="Upload Files"
              className="btn btn-primary flex items-center"
              type="button"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Upload Files
            </button>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="absolute opacity-0 w-0 h-0"
              onChange={(e) => console.log(e.target.files)}
            />
          </div>
        </div>

        <div className="mt-4 lg:flex lg:items-center lg:justify-between lg:space-x-4">
          <div className="flex-1 max-w-sm">
            <label for="searchFile" className="sr-only">
              {" "}
              Search{" "}
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
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="searchFile"
                id="searchFile"
                className="!pl-10"
                placeholder="Search by file name..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:mt-0 lg:flex-shrink lg:grid-cols-none lg:flex lg:space-x-4 lg:gap-0">
            {/* FILTER BY DATE */}
            <div className="relative" ref={datePickerRef}>
              <div className="flex-1 flex-shrink w-full col-span-2 sm:col-span-1">
                <input
                  type="text"
                  id="filterFilesByDate"
                  placeholder="Filter by Date"
                  className="cursor-pointer"
                  autoComplete="off"
                  readOnly
                  value={selectedDateRange}
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
              </div>
              {showDatePicker && (
                <Date_Range_Model
                  onDateSelect={(range) => {
                    setSelectedDateRange(range);
                    setShowDatePicker(false);
                  }}
                />
              )}
            </div>

            <div>
              <select name="" id="" className="">
                <option value="">All Media</option>
                <option value="">Images</option>
                <option value="">Videos</option>
                <option value="">GIFs</option>
                <option value="">Documents</option>
              </select>
            </div>

            <div>
              <select name="" id="" className="">
                <option value="">Sort by Newest</option>
                <option value="">Sort by Oldest</option>
                <option value="">Sort by Smallest</option>
                <option value="">Sort by Largest</option>
              </select>
            </div>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 mt-6 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 xl:grid-cols-6 list"
        >
          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  onClick={() => toggleDropdown("all_Media_Image")}
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen.all_Media_Image && (
                  <>
                    <div
                      className="dropdown-menu"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="divide-y divide-gray-100">
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            title=""
                            className="dropdown-item"
                            role="menuitem"
                            tabindex="-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </a>
                          <a
                            href="#"
                            title=""
                            className="dropdown-item"
                            role="menuitem"
                            tabindex="-1"
                          >
                            <svg
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
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_4985.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_4985.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              3.9 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&amp;ixqx=9JeVfFeU2K&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_5214.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_5214.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              4 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_3851.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_3851.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              3.8 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_4278.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_4278.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              4.1 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_6842.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_6842.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              4 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&amp;ixqx=9JeVfFeU2K&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_3284.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_3284.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              3.9 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_4841.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_4841.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              3.8 MB
            </p>
          </li>

          <li className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabindex="-1"
                      >
                        <svg
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
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for IMG_5644.HEIC</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              IMG_5644.HEIC
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              4 MB
            </p>
          </li>
        </ul>

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
      {/* END ALL_MEDIA */}
    </>
  );
}
