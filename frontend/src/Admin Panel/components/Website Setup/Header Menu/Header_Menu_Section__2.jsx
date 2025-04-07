import React, { useEffect } from "react";
import { useHeaderContext } from "../../../context/Header_Menu_Context";

export default function Header_Menu_Section__2() {
  const { headerMenuData } = useHeaderContext();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js";
    script.async = true;
    script.onload = () => {
      new window.Sortable(document.getElementById("elements-container"), {
        animation: 150,
        handle: ".draggable-element",
        draggable: ".draggable-element",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="showmenu"
      className="grid grid-cols-2 gap-5 mt-5 sm:grid-cols-4 xl:grid-cols-6"
    >
      <div className="lg:col-span-2" />

      <div id="menurow" className="col-span-4 bg-white rounded-lg shadow">
        <div className="px-4 pb-5 sm:px-5 sm:py-2.5">
          <form method="post" className="mt-5">
            <div className="space-y-4">
              <div className="space-y-3 drag" id="elements-container">
                {headerMenuData.main_categories.map((mainCategory) => (
                  <div
                    key={mainCategory._id}
                    className="font-medium bg-gray-100 rounded-md draggable-element main-categories"
                  >
                    <input type="hidden" name="id[]" value={mainCategory._id} />
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
                          {mainCategory.main_category_title}
                        </span>
                        <label className="text-gray-500">
                          <i>Category</i>
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            console.log("deleteCat", mainCategory._id)
                          }
                          className="ml-auto"
                        >
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
                ))}
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-5">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-2" />
    </div>
  );
}
