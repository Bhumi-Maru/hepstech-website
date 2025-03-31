import React, { useState } from "react";

export default function Header_Section_Favicon_Icon({
  favicon,
  onFaviconChange,
}) {
  const [previewFavicon, setPreviewFavicon] = useState(favicon || "");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewFavicon(URL.createObjectURL(file)); // Show preview
      if (onFaviconChange) onFaviconChange(file); // Pass file to parent
    }
  };

  const handleRemoveFavicon = () => {
    setPreviewFavicon("");
    if (onFaviconChange) onFaviconChange(null); // Clear parent state
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Favicon Icon</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          {previewFavicon ? (
            <img
              className="w-auto h-16"
              src={previewFavicon}
              alt="Favicon Icon"
              loading="lazy"
            />
          ) : (
            <div className="w-auto h-16 flex items-center justify-center text-gray-400">
              No favicon selected
            </div>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-4">
          {/* Upload Button */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              document.getElementById("favicon-icon-upload").click()
            }
          >
            Select File
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="favicon-icon-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Remove Button */}
          <button
            type="button"
            className="btn btn-error-light"
            onClick={handleRemoveFavicon}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
