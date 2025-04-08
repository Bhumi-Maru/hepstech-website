import React, { useState } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../context/Header_Menu_Context";

export default function Add_Main_Category_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { mainCategory, setMainCategory } = useHeaderContext();
  const [selectedId, setSelectedId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedId) {
        return alert("Please select a category.");
      }

      const response = await axios.post(
        "http://localhost:7000/api/header-menu-section/category",
        {
          categoryId: selectedId,
        }
      );

      setIsOpenPopupModal(false);
    } catch (error) {
      console.error("Error adding category to header menu:", error);

      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "Category already added."
      ) {
        alert("This category is already in the header menu.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      className={`modal ${
        isOpenPopupModal.Header_Menu_Add_Category_Modal ? "active" : "hidden"
      }`}
    >
      <div className="modal-overlay" tabIndex="-1"></div>
      <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
        <div className="modal-content" role="document">
          <div className="modal-header">
            <h5 className="mr-12 text-lg font-bold truncate">
              Add Main Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsOpenPopupModal(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
          <div id="contentshow" className="modal-body">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="mainCategory">Select Main Category</label>
                <div className="relative mt-1">
                  <select
                    className="w-full p-2 border rounded"
                    id="mainCategory"
                    name="mainCategory"
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    required
                  >
                    <option value="">Select a category</option>
                    {mainCategory
                      .filter(
                        (category) =>
                          category.main_category_status === "published"
                      )
                      .map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.main_category_title}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex mt-3 items-center justify-end space-x-4">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
