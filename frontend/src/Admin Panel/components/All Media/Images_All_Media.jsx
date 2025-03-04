import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAllMediaContext } from "../../context/All_Media_Context";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Images_All_Media() {
  const { mediaItems, setMediaItems, previewUrl, setPreviewUrl } =
    useAllMediaContext();
  const { isDropdownOpen, toggleDropdown } = useAdminGlobalContext();

  // Fetch media from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/files");
        const mediaData = response.data.files.map((item) => {
          const fileType = item.fileType.split("/")[0]; // Extract file type
          return {
            name: item.filename,
            size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
            fileType: fileType,
            mimeType: item.fileType, // Full MIME type for better handling
            fileUrl: `http://localhost:7000${item.filePath}`,
          };
        });
        setMediaItems(mediaData);
      } catch (error) {
        console.error("Failed to fetch media", error);
      }
    };
    fetchMedia();
  }, [mediaItems]); // Run only once to avoid infinite API calls

  return (
    <ul
      role="list"
      className="grid grid-cols-2 mt-6 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 xl:grid-cols-6 list"
    >
      {mediaItems.map((item, index) => (
        <li key={index} className="relative">
          <div className="absolute left-2 top-1.5">
            <input type="checkbox" />
          </div>
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="text-white"
              onClick={() => toggleDropdown(`media_${index}`)}
            >
              <svg className="w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
              </svg>
            </button>
            {isDropdownOpen[`media_${index}`] && (
              <div className="dropdown-menu active">
                <a href={item.fileUrl} download className="dropdown-item">
                  Download
                </a>
                <button className="dropdown-item">Delete</button>
              </div>
            )}
          </div>

          <div className="block w-full bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1">
            {item.fileType === "image" ? (
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPreviewUrl(item.fileUrl)} // Ensure the preview URL updates
              >
                <img
                  src={item.fileUrl}
                  alt={item.name}
                  className="object-contain w-full h-full"
                />
              </a>
            ) : item.fileType === "video" ? (
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPreviewUrl(item.fileUrl)}
              >
                <video controls className="object-contain w-full h-full">
                  <source src={item.fileUrl} type={item.mimeType} />
                </video>
              </a>
            ) : item.mimeType === "application/pdf" ? (
              <div>
                {/* Clickable Transparent Overlay */}
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-transparent"
                  style={{ zIndex: 10 }}
                >
                  <p className="text-blue-600 underline bg-gray-200 bg-opacity-30 px-2 py-1 rounded w-full flex items-center justify-center">
                    Open Document
                  </p>
                </a>

                {/* Embedded PDF Preview */}
                <embed
                  src={item.fileUrl}
                  type="application/pdf"
                  className="w-full h-48 overflow-y-hidden no-scrollbar"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {" "}
                Unsupported file type: {item.mimeType}{" "}
              </p>
            )}
          </div>

          <p className="mt-2 text-sm font-medium text-gray-900 truncate">
            {item.name}
          </p>
          <p className="text-sm text-gray-500">{item.size}</p>
        </li>
      ))}
    </ul>
  );
}
