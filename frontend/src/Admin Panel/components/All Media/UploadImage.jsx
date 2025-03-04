import React, { useState } from "react";
import axios from "axios";
import { useAllMediaContext } from "../../context/All_Media_Context";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function UploadImage() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { setMediaItems, previewUrl, setPreviewUrl } = useAllMediaContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFileType(file.type); // Store full MIME type
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

      const newFile = {
        name: selectedFile.name,
        size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
        imageUrl: `http://localhost:7000${response.data.filePath}`,
      };

      setMediaItems((prevItems) => [...prevItems, newFile]);
      setIsOpenPopupModal(false);
    } catch (error) {
      console.error("Failed to upload file", error);
      alert(
        error.response?.data?.message || "File upload failed. Please try again."
      );
    }
  };

  return (
    <div
      className={`modal ${isOpenPopupModal.uploadFiles ? "active" : ""}`}
      id="selectFilesModal"
    >
      <div className="modal-overlay"></div>
      <div className="modal-dialog modal-dialog-centered sm:max-w-6xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Image</h5>
            <button
              className="btn-close"
              onClick={() => setIsOpenPopupModal(false)}
            >
              X
            </button>
          </div>
          <div className="modal-body flex flex-col sm:flex-row gap-4">
            <div className="border-2 border-dashed rounded-md p-4 flex-1">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
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
                  JPG, JPEG, PNG, GIF, MP4, WebM, PDF
                </p>
                <button
                  type="button"
                  className="mt-2 btn btn-primary w-full sm:w-auto px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  <input
                    type="file"
                    id="fileUpload"
                    className="absolute opacity-0 w-0 h-0"
                    onChange={handleImageChange}
                    accept="image/*,video/*,application/pdf"
                  />
                  Browse Files
                </button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="border-2 border-dashed rounded-md p-4 flex-1 flex justify-center items-center">
              {previewUrl ? (
                fileType === "image" ? (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-48 object-contain"
                      style={{ height: "119px" }}
                    />
                  </a>
                ) : fileType === "video" ? (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <video
                      src={previewUrl}
                      controls
                      className="max-h-48 object-contain"
                      style={{ height: "119px", width: "300px" }}
                    />
                  </a>
                ) : fileType === "application/pdf" ? (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <embed
                      src={previewUrl}
                      type="application/pdf"
                      width="100%"
                      height="300px"
                      alt="PDF Preview"
                    />
                  </a>
                ) : (
                  <p className="text-gray-500">
                    Unsupported file type for preview
                  </p>
                )
              ) : (
                <p className="text-gray-500">No file selected</p>
              )}
            </div>
          </div>
          <div className="modal-footer flex justify-between">
            <button
              className="btn btn-light"
              onClick={() => setIsOpenPopupModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleFileUpload}
              disabled={!selectedFile}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
