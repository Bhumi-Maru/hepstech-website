import React, { useState } from "react";

export default function Header_Section_admin_Logo({ logo, onLogoChange }) {
  const [previewLogo, setPreviewLogo] = useState(logo || "");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewLogo(URL.createObjectURL(file)); // Show preview
      if (onLogoChange) onLogoChange(file); // Pass file to parent
    }
  };

  const handleRemoveLogo = () => {
    setPreviewLogo("");
    if (onLogoChange) onLogoChange(null); // Clear parent state
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Admin Logo</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
          {previewLogo ? (
            <img
              className="w-auto h-16"
              src={previewLogo}
              alt="Admin Logo"
              loading="lazy"
            />
          ) : (
            <div className="w-auto h-16 flex items-center justify-center text-gray-400">
              No logo selected
            </div>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-4">
          {/* Upload Button */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => document.getElementById("admin-logo-upload").click()}
          >
            Select File
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="admin-logo-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Remove Button */}
          <button
            type="button"
            className="btn btn-error-light"
            onClick={handleRemoveLogo}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
