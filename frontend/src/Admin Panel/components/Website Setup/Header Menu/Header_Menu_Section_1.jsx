import React, { useState, useEffect } from "react";
import Sortable from "sortablejs"; // Import Sortable library

const Header_Menu_Section_1 = () => {
  // State for menu titles
  const [menuTitle, setMenuTitle] = useState("");
  const [menuTitle2, setMenuTitle2] = useState("");

  useEffect(() => {
    // Initialize Sortable when the component mounts
    const categoryContainer1 = document.getElementById("elements-container");
    const categoryContainer2 = document.getElementById("elements-container2");

    if (categoryContainer1) {
      new Sortable(categoryContainer1, {
        animation: 150,
        ghostClass: "sortable-ghost",
      });
    }

    if (categoryContainer2) {
      new Sortable(categoryContainer2, {
        animation: 150,
        ghostClass: "sortable-ghost",
      });
    }
  }, []); // Empty dependency array ensures this only runs once after the component mounts

  // Handle title input change
  const handleTitleChange = (e, setTitle) => {
    setTitle(e.target.value);
  };

  return (
    <section className="relative flex-1 overflow-x-hidden overflow-y-auto focus:outline-none">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 py-6">
          <div className="container">
            <div className="flex items-center justify-between">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>{" "}
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
                      {menuTitle || "Menu Title"}
                    </h3>
                    <button type="button" className="btn btn-error-light">
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>{" "}
                      Delete
                    </button>
                  </div>
                </div>
                <div className="px-4 pb-5 sm:px-5">
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label>Enter Menu Title</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="sectionTitle"
                            value={menuTitle}
                            onChange={(e) => handleTitleChange(e, setMenuTitle)}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div id="elements-container" className="space-y-3">
                        {/* Categories */}
                        {["Category 1", "Category 2", "Category 3"].map(
                          (category, index) => (
                            <div
                              key={index}
                              className="font-medium bg-gray-100 rounded-md draggable-element main-categories-1"
                            >
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
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"
                                    />
                                  </svg>
                                  <span className="flex-1 block truncate">
                                    {category}
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
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary-outline">
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
                      {menuTitle2 || "Menu Title 2"}
                    </h3>
                    <button type="button" className="btn btn-error-light">
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>{" "}
                      Delete
                    </button>
                  </div>
                </div>
                <div className="px-4 pb-5 sm:px-5">
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label>Enter Menu Title</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="sectionTitle2"
                            value={menuTitle2}
                            onChange={(e) =>
                              handleTitleChange(e, setMenuTitle2)
                            }
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div id="elements-container2" className="space-y-3">
                        {/* Categories */}
                        {["Category 1", "Category 2", "Category 3"].map(
                          (category, index) => (
                            <div
                              key={index}
                              className="font-medium bg-gray-100 rounded-md draggable-element main-categories-2"
                            >
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
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"
                                    />
                                  </svg>
                                  <span className="flex-1 block truncate">
                                    {category}
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
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary-outline">
                        Add Category
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header_Menu_Section_1;
