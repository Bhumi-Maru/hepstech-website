import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";

export default function Main_Category_Update_Modal({ categoryId }) {
  const [mainCategoryTitle, setMainCategoryTitle] = useState("");
  const [mainCategoryStatus, setMainCategoryStatus] = useState(false);
  const [isBannerImageVisible, setIsBannerImageVisible] = useState(false);
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { onUpdateCategory } = useAllMediaContext();

  // Fetch the existing category data when the component mounts or when categoryId changes
  useEffect(() => {
    if (categoryId) {
      console.log("Fetching category data for ID:", categoryId); // Log categoryId being used
      axios
        .get(`http://localhost:7000/api/main-category/${categoryId}`)
        .then((response) => {
          const category = response.data.category;
          console.log("Fetched category:", category); // Log the fetched category data
          setMainCategoryTitle(category.main_category_title);
          setMainCategoryStatus(category.main_category_status === "published");
          setIsBannerImageVisible(
            category.add_banner_image_status === "active"
          );
        })
        .catch((error) => {
          console.error("Error fetching category", error);
        });
    }
  }, [categoryId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCategoryData = {
      main_category_title: mainCategoryTitle,
      main_category_status: mainCategoryStatus ? "published" : "draft",
      add_banner_image_status: isBannerImageVisible ? "active" : "deactive",
    };

    console.log("Updated category data:", updatedCategoryData); // Log the data before sending it to the server

    if (categoryId) {
      axios
        .put(
          `http://localhost:7000/api/main-category/update/${categoryId}`,
          updatedCategoryData
        )
        .then((response) => {
          alert("Category updated successfully!");
          setIsOpenPopupModal(false); // Close the modal

          // Make sure that the updated category data is passed back to the parent
          const updatedCategory = response.data.category;
          onUpdateCategory(updatedCategory); // Update the parent component with the updated category
          console.log("Updated category response:", updatedCategory); // Log the updated category data

          setIsOpenPopupModal(false);
        })
        .catch((error) => {
          console.error("Error updating category", error);
        });
    }
  };

  return (
    <>
      <div
        className="modal active"
        id="editMainCategoryModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Update Main Category
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
                  aria-hidden="true"
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
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="mainCategoryTitle">
                      Main Category Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="mainCategoryTitle"
                        placeholder="Enter main category title"
                        className="input-field"
                        value={mainCategoryTitle}
                        onChange={(e) => {
                          setMainCategoryTitle(e.target.value);
                          console.log(
                            "Category title changed:",
                            e.target.value
                          ); // Log input change
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="categoryMainImage">Main Image</label>
                    <input type="file" id="categoryMainImage" />
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="bannerImageStatus"
                        checked={isBannerImageVisible}
                        onChange={(e) => {
                          setIsBannerImageVisible(e.target.checked);
                          console.log(
                            "Banner image visibility changed:",
                            e.target.checked
                          ); // Log checkbox change
                        }}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="bannerImageStatus">
                        Add Banner Image
                      </label>
                    </div>
                  </div>
                  {isBannerImageVisible && (
                    <div className="mt-4">
                      <label htmlFor="categoryBannerImage">Banner Image</label>
                      <input type="file" id="categoryBannerImage" />
                    </div>
                  )}
                  <div>
                    <label htmlFor="toggleSwitch">Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        checked={mainCategoryStatus}
                        onChange={(e) => {
                          setMainCategoryStatus(e.target.checked);
                          console.log("Status changed:", e.target.checked); // Log status checkbox change
                        }}
                      />
                      <label htmlFor="toggleSwitch"></label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="flex items-center justify-end space-x-4">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-dismiss="modal"
                      aria-label="Close Modal"
                      onClick={() => setIsOpenPopupModal(false)}
                    >
                      Discard
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
