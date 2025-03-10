import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAllMediaContext } from "../../context/All_Media_Context";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Images_All_Media() {
  const { mediaItems, setMediaItems, setPreviewUrl } = useAllMediaContext();
  const { isDropdownOpen, toggleDropdown } = useAdminGlobalContext();

  // Fetch media from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/files");

        const mediaData = response.data.files.map((item) => {
          return {
            name: item.filename,
            size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
            mimeType: item.fileType || "unknown", // Default to 'unknown' if mimeType is undefined
            fileUrl: `http://localhost:7000${item.filePath}`,
            _id: item._id, // Ensure _id is included
          };
        });
        setMediaItems(mediaData);
      } catch (error) {
        console.error("Failed to fetch media", error);
      }
    };
    fetchMedia();
  }, [mediaItems]);

  // Delete file function
  const deleteFile = async (_id) => {
    try {
      // Make DELETE request to delete the file from the server using _id
      await axios.delete(`http://localhost:7000/api/files/${_id}`);

      // Remove the deleted file from the mediaItems list
      setMediaItems((prevItems) =>
        prevItems.filter((item) => item._id !== _id)
      );
    } catch (error) {
      console.error("Failed to delete file", error);
    }
  };

  return (
    <ul
      role="list"
      className="grid grid-cols-2 mt-6 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 xl:grid-cols-6 list"
    >
      {mediaItems.map((item, index) => (
        <li key={index} className="relative">
          <div className="absolute left-2 top-1.5" style={{ zIndex: "1" }}>
            <input type="checkbox" />
          </div>
          <div className="absolute top-2 right-2" style={{ zIndex: "1" }}>
            <button
              type="button"
              className="text-white"
              onClick={() => toggleDropdown(`media_${index}`)}
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {isDropdownOpen[`media_${index}`] && (
              <div
                className="absolute top-8 right-2 bg-white shadow-lg border rounded-md p-2"
                style={{ zIndex: "10" }}
              >
                <button
                  className="dropdown-item"
                  onClick={async (e) => {
                    e.stopPropagation(); // Prevent dropdown from closing

                    try {
                      // Fetch the file data
                      const response = await fetch(item.fileUrl);
                      if (!response.ok) {
                        throw new Error("Failed to fetch the file");
                      }
                      // Get the file data as a Blob
                      const blob = await response.blob();
                      const downloadUrl = URL.createObjectURL(blob);

                      // Create an anchor element to trigger the download
                      const link = document.createElement("a");
                      link.href = downloadUrl;
                      link.download = item.name; // Set the download file name
                      document.body.appendChild(link);
                      link.click(); // Trigger the download
                      document.body.removeChild(link); // Remove the link element after clicking

                      // Release the object URL
                      URL.revokeObjectURL(downloadUrl);
                    } catch (error) {
                      console.error("Error downloading file:", error);
                    }
                  }}
                >
                  Download
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => {
                    deleteFile(item._id); // Use _id for deletion
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          <div className="block w-full bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1">
            {item.mimeType && item.mimeType.startsWith("image/") ? (
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
            ) : item.mimeType && item.mimeType.startsWith("video/") ? (
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
              <embed
                src={item.fileUrl}
                type="application/pdf"
                className="w-full h-48 overflow-y-hidden no-scrollbar"
              />
            ) : item.mimeType === "image/gif" ? (
              <img
                src={item.fileUrl}
                alt={item.name}
                className="object-contain w-full h-full"
              />
            ) : (
              <p className="text-gray-500">
                Unsupported file type: {item.mimeType}
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
