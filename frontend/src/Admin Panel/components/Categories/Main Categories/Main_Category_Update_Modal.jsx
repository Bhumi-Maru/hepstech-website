import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Main_Category_Update_Modal({ categoryId }) {
  const [mainCategoryTitle, setMainCategoryTitle] = useState("");
  const [mainCategoryStatus, setMainCategoryStatus] = useState(false);
  const [isBannerImageVisible, setIsBannerImageVisible] = useState(false);
  const [existingCategory, setExistingCategory] = useState(null);
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  // Fetch the existing category data when the component mounts or when categoryId changes
  useEffect(() => {
    if (categoryId) {
      axios
        .get(`http://localhost:7000/api/main-category/${categoryId}`)
        .then((response) => {
          const category = response.data.category;
          setExistingCategory(category);
          setMainCategoryTitle(category.main_category_title);
          setMainCategoryStatus(category.main_category_status);
          setIsBannerImageVisible(category.add_banner_image_status);
        })
        .catch((error) => {
          console.error("Error fetching category", error);
        });
    }
  }, [categoryId]);

  const handleMainImageChange = (e) => {
    // handle main image change logic
  };

  const handleBannerImageChange = (e) => {
    // handle banner image change logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCategoryData = {
      main_category_title: mainCategoryTitle,
      main_category_status: mainCategoryStatus,
      add_banner_image_status: isBannerImageVisible,
    };

    if (existingCategory) {
      // Send the updated data to the backend API
      axios
        .put(
          `http://localhost:7000/api/main-category/update/${categoryId}`,
          updatedCategoryData
        )
        .then((response) => {
          alert("Category updated successfully!");
          setIsOpenPopupModal(false);
        })
        .catch((error) => {
          console.error("Error updating category", error);
        });
    }
  };

  if (!existingCategory) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className={`modal ${
          isOpenPopupModal.editMainCategoryPopupModal ? "active" : ""
        }`}
        id="createMainCategoryModal"
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
                        onChange={(e) => setMainCategoryTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="categoryMainImage">Main Image</label>
                    <input
                      type="file"
                      id="categoryMainImage"
                      onChange={handleMainImageChange}
                    />
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="bannerImageStatus"
                        checked={isBannerImageVisible}
                        onChange={(e) =>
                          setIsBannerImageVisible(e.target.checked)
                        }
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
                      <input
                        type="file"
                        id="categoryBannerImage"
                        onChange={handleBannerImageChange}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="toggleSwitch">Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        checked={mainCategoryStatus}
                        onChange={(e) =>
                          setMainCategoryStatus(e.target.checked)
                        }
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
