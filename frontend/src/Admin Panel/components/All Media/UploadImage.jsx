import React, { useState } from "react";
import axios from "axios";
import { useAllMediaContext } from "../../context/All_Media_Context";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function UploadImage() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems, setMediaItems } = useAllMediaContext();
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:7000/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Assuming response contains the new file data
      const newFile = {
        name: selectedFile.name,
        size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
        imageUrl: `http://localhost:7000${response.data.filePath}`,
      };

      // Update the media items state
      setMediaItems((prevItems) => [...prevItems, newFile]);
      setIsOpenPopupModal(false); // Close the modal after successful upload
    } catch (error) {
      console.error("Failed to upload file", error);
      alert("File upload failed. Please try again.");
    }
  };

  return (
    <div
      className={`modal ${isOpenPopupModal.uploadFiles ? "active" : ""}`} // Only active when true
      id="selectFilesModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="false"
      style={{ zIndex: "1060" }}
    >
      <div className="modal-overlay" tabIndex="-1"></div>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered sm:max-w-6xl">
        <div className="modal-content" role="document">
          <div className="modal-header !pb-0">
            <ul
              className="flex items-center space-x-6 tabs"
              id="myTab"
              role="tablist"
            >
              <li className="tab-item" role="presentation">
                <button
                  type="button"
                  id="profile-tab"
                  className="tab-link active"
                  data-toggle="tab"
                  data-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Upload
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="!-mt-5 btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsOpenPopupModal(false)} // Close the modal
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
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane !py-0 show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="mt-2 text-center text-gray-600">
                      <span>Upload Files</span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      JPG, JPEG or PNG up to 3MB
                    </p>
                    <button type="button" className="mt-2 btn btn-primary">
                      <input
                        type="file"
                        id="fileUpload"
                        className="absolute opacity-0 w-0 h-0"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4">
              <div className="flex items-center space-x-3">
                <p className="mr-3 font-medium">1 file selected</p>
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-skin-primary hover:underline"
                >
                  Clear Selection
                </a>
              </div>
              <div className="flex items-center justify-end mt-5 space-x-4">
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenPopupModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFileUpload}
                >
                  Add Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
