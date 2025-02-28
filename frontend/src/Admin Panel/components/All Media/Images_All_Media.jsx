import React, { useEffect } from "react";
import axios from "axios";
import { useAllMediaContext } from "../../context/All_Media_Context";

export default function Images_All_Media() {
  const { mediaItems, setMediaItems } = useAllMediaContext();

  // Fetch media from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/files");

        // Assuming the API returns an array of media objects with filename, filePath, etc.
        const mediaData = response.data.files.map((item) => ({
          name: item.filename,
          size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB", // Adjust this if the size format is different in the API response
          imageUrl: `http://localhost:7000${item.filePath}`, // Full URL for the image
        }));

        setMediaItems(mediaData); // Update state with fetched data
      } catch (error) {
        console.error("Failed to fetch media", error);
      }
    };

    fetchMedia();
  }, [mediaItems]); // Empty dependency array ensures this runs only once on component mount.

  return (
    <>
      {/* Display uploaded image */}
      <ul
        role="list"
        className="grid grid-cols-2 mt-6 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 xl:grid-cols-6 list"
      >
        {mediaItems.map((item, index) => (
          <li key={index} className="relative">
            <div className="absolute z-5 left-2 top-1.5">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="absolute z-5 top-2 right-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="text-white dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown options */}
                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="divide-y divide-gray-100">
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Download
                      </a>
                      <a
                        href="#"
                        title=""
                        className="dropdown-item"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-1 aspect-h-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
              <img
                className="object-cover pointer-events-none group-hover:opacity-75"
                src={
                  item.imageUrl
                    ? item.imageUrl
                    : "/path/to/placeholder-image.jpg"
                } // Fallback image if URL is missing
                alt={item.name} // Use the file name as alt text
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop in case of error
                  e.target.src = "/path/to/placeholder-image.jpg"; // Fallback to placeholder image
                }}
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {item.name}</span>
              </button>
            </div>
            <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none file-name">
              {item.name} {/* Display the file name */}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {item.size} {/* Display the file size */}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
