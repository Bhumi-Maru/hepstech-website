import React from "react";
import { handleImageChange } from "../../utils/fileUploadUtils";
import { useAllMediaContext } from "../../context/All_Media_Context";

export default function Upload_New() {
  const { setSelectedFile, setPreviewUrl, setFileType, previewUrl, fileType } =
    useAllMediaContext();
  return (
    <>
      {/* UPLOADS NEW  */}

      <div
        className="tab-pane !py-0 show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border-2 border-dashed rounded-md p-4 flex-1 text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="mt-2 text-center text-gray-600">
              <span>Upload Files</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              JPG, JPEG or PNG up to 3MB
            </p>
            <button
              type="button"
              className="mt-2 btn btn-primary w-full sm:w-auto px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              <input
                type="file"
                id="fileUpload"
                className="absolute opacity-0 w-0 h-0"
                onChange={(e) =>
                  handleImageChange(
                    e,
                    setSelectedFile,
                    setPreviewUrl,
                    setFileType
                  )
                }
                accept="image/*,video/*,application/pdf"
              />
              Browse Files
            </button>
          </div>
          {/* Preview Section */}
          <div className="border-2 border-dashed rounded-md p-4 flex-1 flex justify-center items-center">
            {previewUrl ? (
              fileType && fileType.startsWith("image/") ? ( // Check if fileType is not null and starts with "image/"
                <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-48 object-contain"
                    style={{ height: "119px" }}
                  />
                </a>
              ) : fileType && fileType.startsWith("video/") ? ( // Check if fileType is not null and starts with "video/"
                <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                  <video
                    src={previewUrl}
                    controls
                    className="max-h-48 object-contain"
                    style={{ height: "119px", width: "300px" }}
                  />
                </a>
              ) : fileType === "application/pdf" ? ( // For PDF files
                <a href={previewUrl} target="_blank" rel="noopener noreferrer">
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
      </div>
    </>
  );
}
