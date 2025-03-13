import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import { useSubCategoryContext } from "../../../context/SubCategory_Context"; // Use your context
import { getFilePreview } from "../../../utils/fileUploadUtils"; // File preview logic
import { fetchMainTitleInSubAddModal } from "../../../utils/SubCategoryUtils";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";

export default function Sub_Category_Update_Modal({ categoryId }) {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const {
    mainCategoryTitle,
    setMainCategoryTitle,
    setSelectedSubImage,
    selectedSubImage,
  } = useSubCategoryContext();
  const [subCategoryTitle, setSubCategoryTitle] = useState("");
  const [subCategoryStatus, setSubCategoryStatus] = useState(false);
  const [mainCategoryId, setMainCategoryId] = useState("");
  const [subImage, setSubImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { mediaItems } = useAllMediaContext();

  console.log("main id", mainCategoryId._id);

  useEffect(() => {
    // Fetch main category titles for the modal
    fetchMainTitleInSubAddModal(setMainCategoryTitle);

    if (categoryId) {
      // Fetch existing sub-category details if editing
      axios
        .get(`http://localhost:7000/api/sub-category/getById/${categoryId}`)
        .then((response) => {
          const subCategory = response.data;
          setSubCategoryTitle(subCategory.sub_category_title);
          setSubCategoryStatus(subCategory.sub_category_status === "published");
          setMainCategoryId(subCategory.main_category_id);
          setSelectedSubImage(
            subCategory.sub_image ? subCategory.sub_image._id : null
          );
        })
        .catch((error) => console.error("Error fetching sub category", error));
    }

    // Initialize Select2 for the category select dropdown
    setTimeout(() => {
      $("#mainCategory").select2();
    }, 100);
  }, [categoryId]);

  const handleImageSelect = (file) => {
    // Set selected sub-image based on the file selected
    console.log("Selected Sub-Image:", file);
    setSelectedSubImage(file._id); // Update the selected sub-image
  };

  const updateSubImageFile = mediaItems.find(
    (item) => item._id === selectedSubImage
  );
  console.log("Selected Sub-Image:", selectedSubImage);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subCategoryTitle.trim()) {
      alert("Sub Category Title is required");
      return;
    }
    if (!mainCategoryId) {
      alert("Please select a main category");
      return;
    }

    const data = {
      sub_category_title: subCategoryTitle,
      main_category_id: mainCategoryId,
      sub_image: selectedSubImage,
      sub_category_status: subCategoryStatus ? "published" : "draft",
    };

    try {
      const response = await axios.put(
        `http://localhost:7000/api/sub-category/update/${categoryId}`,
        data
      );
      if (
        response.data.message &&
        response.data.message.includes("successfully")
      ) {
        setSubCategoryTitle("");
        setSubCategoryStatus(false);
        $("#mainCategory").val("").trigger("change");
        setSubImage(null);
        setIsOpenPopupModal(false);
      } else {
        alert(`Error: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error updating sub category:", error);
      alert("Error updating sub category. Please try again.");
    }
  };

  return (
    <div
      className="modal active"
      id="updateSubCategoryModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="false"
    >
      <div className="modal-overlay" tabIndex="-1"></div>
      <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
        <div className="modal-content" role="document">
          <div className="modal-header">
            <h5 className="mr-12 text-lg font-bold truncate">
              Update Sub Category
            </h5>
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
                {/* Main Category Selection */}
                <div>
                  <label>Main Category</label>
                  <div className="relative mt-1">
                    {mainCategoryTitle.length === 0 ? (
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
                        value={mainCategoryId._id}
                        onChange={(e) => setMainCategoryId(e.target.value)}
                      >
                        <option value="" disabled>
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
                        onClick={() =>
                          setIsOpenPopupModal((prev) => ({
                            ...prev,
                            startSelectFilesAndMedia: true,
                          }))
                        }
                      >
                        Select File
                      </button>
                    </div>
                    <div className="mt-1">
                      {getFilePreview(updateSubImageFile)}
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
              {/* Buttons */}
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
  );
}
