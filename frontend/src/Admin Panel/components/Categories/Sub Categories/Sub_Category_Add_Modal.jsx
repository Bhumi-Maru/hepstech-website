import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
// Import jQuery and Select2
import $ from "jquery";
import "select2/dist/js/select2.min.js"; // Import Select2 JS
import "select2/dist/css/select2.min.css"; // Import Select2 CSS
import { fetchMainTitleInSubAddModal } from "../../../utils/SubCategoryUtils";
import { useSubCategoryContext } from "../../../context/SubCategory_Context";
import axios from "axios";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";

export default function Sub_Category_Add_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { selectedFile, mediaItems } = useAllMediaContext();
  const {
    mainCategoryTitle,
    setMainCategoryTitle,
    selectedSubImage,
    setSelectedSubImage,
    subCategoryMediaItems,
  } = useSubCategoryContext();

  // Sub category states
  const [subCategoryTitle, setSubCategoryTitle] = useState("");
  const [subCategoryStatus, setSubCategoryStatus] = useState(false);

  useEffect(() => {
    fetchMainTitleInSubAddModal(setMainCategoryTitle);
  }, []);

  useEffect(() => {
    if (mainCategoryTitle.length > 0) {
      setTimeout(() => {
        $("#mainCategory").select2(); // Ensure Select2 initializes
      }, 100);
    }
  }, [mainCategoryTitle]);
  // console.log("subCategoryMediaItems", subCategoryMediaItems);
  // / Find the file URL for the selected main image and banner image
  const subImageFile = mediaItems.find((item) => {
    // console.log("item is", item._id);
    // console.log("selected sub image", selectedSubImage);
    return item._id === selectedSubImage;
  });

  // console.log("sub image file", subImageFile);

  // Function to check the file type and return the appropriate preview

  // console.log("selecte ffile", selectedFile);
  useEffect(() => {
    if (selectedFile) {
      if (selectedSubImage) {
        setSelectedSubImage(selectedSubImage);
      }
    }
  }, [selectedFile]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subCategoryTitle.trim()) {
      alert("Sub Category Title is required");
      return;
    }

    const selectedMainCategory = $("#mainCategory").val();
    if (!selectedMainCategory) {
      alert("Please select a main category");
      return;
    }

    const data = {
      sub_category_title: subCategoryTitle,
      main_category_id: selectedMainCategory,
      sub_image: selectedSubImage,
      sub_category_status: subCategoryStatus ? "published" : "draft",
    };

    console.log("Submitted Data:", data); // Log the data to verify its structure

    try {
      const response = await axios.post(
        "http://localhost:7000/api/sub-category/add",
        data
      );

      // Log the full response to debug
      console.log(response.data);

      // Assuming the response has a success message:
      if (
        response.data.message &&
        response.data.message.includes("successfully")
      ) {
        // Success, Sub Category was added
        // alert("Sub Category Added Successfully!");
        setSubCategoryTitle("");
        setSubCategoryStatus(false);
        $("#mainCategory").val("").trigger("change");
        setSelectedSubImage(null);
        setIsOpenPopupModal(false);
      } else {
        // Error, Show response message
        alert(`Error: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding sub category:", error);
      alert("Error adding sub category. Please try again.");
    }
  };

  return (
    <>
      {/* START ADD SUB CATEGORY POPUP MODAL */}
      <div
        className="modal active"
        id="createSubCategoryModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5
                className="mr-12 text-lg font-bold truncate"
                id="exampleModalLabel"
              >
                Add Sub Category
              </h5>
              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
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
                  {/* Sub Category Title */}
                  <div>
                    <label>Sub Category Title</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter sub category title"
                        value={subCategoryTitle}
                        onChange={(e) => setSubCategoryTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Main Category Dropdown */}
                  {/* <div>
                    <label>Main Category</label>
                    <div className="relative mt-1">
                      <select
                        id="mainCategory"
                        className="select2-hidden-accessible"
                      >
                        <option value="select main category" selected disabled>
                          Select Main Category
                        </option>
                        {mainCategoryTitle.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  <div>
                    <label>Main Category</label>
                    <div className="relative mt-1">
                      {mainCategoryTitle.length === 0 ? (
                        // If no main categories are available, show the selected category or a fallback message
                        <p
                          className="text-gray-500"
                          style={{ fontSize: "0.8rem" }}
                        >
                          No main categories available.
                        </p>
                      ) : (
                        <select
                          id="mainCategory"
                          className="select2-hidden-accessible"
                        >
                          <option
                            value="select main category"
                            selected
                            disabled
                          >
                            Select Main Category
                          </option>
                          {mainCategoryTitle.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.title}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {/* Image Selection */}
                  <div>
                    <label>Image</label>
                    <div className="flex" style={{ gap: "10px" }}>
                      <div className="mt-1">
                        <button
                          type="button"
                          className="btn btn-white"
                          onClick={() => {
                            setIsOpenPopupModal((prev) => ({
                              ...prev,
                              startSelectFilesAndMedia: true,
                            }));
                            setSelectedSubImage(null); // Ensure previous selection is cleared
                          }}
                        >
                          Select File
                        </button>
                      </div>
                      <div className="mt-1">
                        {getFilePreview(subImageFile)}{" "}
                        {/* {console.log("sub image file", subImageFile)} */}
                      </div>
                    </div>
                  </div>

                  {/* Status Toggle */}
                  <div>
                    <label>Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        checked={subCategoryStatus}
                        onChange={(e) => setSubCategoryStatus(e.target.checked)}
                      />
                      <label htmlFor="toggleSwitch"></label>
                    </div>
                  </div>
                </div>

                {/* Modal Footer with Save Button */}
                <div className="modal-footer">
                  <div className="flex items-center justify-end space-x-4">
                    <button
                      type="button"
                      className="btn btn-light"
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
      {/* END ADD SUB CATEGORY POPUP MODAL */}
    </>
  );
}
