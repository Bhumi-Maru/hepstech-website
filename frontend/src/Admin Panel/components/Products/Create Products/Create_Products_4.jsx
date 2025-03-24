import React, { useState } from "react";

export default function Create_Products_4({ setGalleryImages }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];

    files.forEach((file) => {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert(
          `Invalid file type: ${file.name}. Only JPG, JPEG, and PNG are allowed.`
        );
      } else if (file.size > 3 * 1024 * 1024) {
        alert(`File size exceeds 3MB limit: ${file.name}`);
      } else {
        validFiles.push({
          file,
          previewURL: URL.createObjectURL(file),
        });
      }
    });

    setSelectedImages([...selectedImages, ...validFiles]);
    setGalleryImages([
      ...selectedImages.map((img) => img.file),
      ...validFiles.map((img) => img.file),
    ]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    setGalleryImages(updatedImages.map((img) => img.file));
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow xl:col-span-3">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Product Gallery Images</h3>
        <p className="mt-2 text-xs text-gray-600">
          Supported File Formats: JPG, JPEG & PNG
        </p>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png"
          id="productGalleryImages"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="jFiler-input-dragDrop">
          {!selectedImages.length && (
            <div className="jFiler-input-inner">
              <div className="jFiler-input-text">
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
                <h3>Upload Files or drag and drop</h3>
                <p className="mt-1 text-xs text-gray-500">
                  JPG, JPEG or PNG up to 3MB
                </p>
              </div>
            </div>
          )}

          {/* Image Preview Section */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.previewURL}
                    alt="Preview"
                    className="w-100 h-100 object-cover rounded-md border mt-2"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1 opacity-75 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Label to trigger file input */}
          <label
            htmlFor="productGalleryImages"
            className="mt-4 jFiler-input-choose-btn blue cursor-pointer"
          >
            Browse Files
          </label>
        </div>
      </div>
    </div>
  );
}
