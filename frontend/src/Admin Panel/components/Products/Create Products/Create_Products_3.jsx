import React, { useState } from "react";

export default function Create_Products_3({ setProductMainImage }) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validate file type (JPG, JPEG, PNG)
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
        return;
      }

      // Validate file size (max 3MB)
      if (file.size > 3 * 1024 * 1024) {
        alert("File size exceeds 3MB limit.");
        return;
      }

      // Create a preview URL
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      setProductMainImage(file);
    }
  };

  return (
    <>
      {/* CREATE PRODUCTS SECTION 3 [Product Main Image] */}

      <div className="overflow-hidden bg-white rounded-lg shadow xl:col-span-2">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Product Main Image</h3>
          <p className="mt-2 text-xs text-gray-600">
            Supported File Formats: JPG, JPEG &amp; PNG
          </p>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div className="jFiler jFiler-theme-dragdropbox">
            {/* Hidden File Input */}
            <input
              type="file"
              name="files"
              id="productMainImage"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <div className="jFiler-input-dragDrop">
              <div className="jFiler-input-inner">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-40 h-40 mx-auto rounded-lg border"
                  />
                ) : (
                  <>
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
                    <h3>Upload or Drag & Drop</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      JPG, JPEG, PNG up to 3MB
                    </p>
                  </>
                )}
              </div>

              <label
                htmlFor="productMainImage"
                className="mt-4 jFiler-input-choose-btn blue cursor-pointer"
              >
                Browse Files
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
