import React, { useEffect } from "react";
import { useAllMediaContext } from "../../context/All_Media_Context";
import axios from "axios";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Select_Files({ isBannerImageVisible }) {
  const {
    setMediaItems,
    mediaItems,
    setPreviewUrl,
    setSelectedMainImage,
    setSelectedBannerImage,
    selectedMainImage,
    selectedBannerImage,
  } = useAllMediaContext();

  // const { setIsOpenPopupModal } = useAdminGlobalContext();

  // Fetch media from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/files");
        const mediaData = response.data.files.map((item) => ({
          _id: item._id,
          name: item.filename,
          size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
          mimeType: item.fileType || "unknown",
          fileUrl: `http://localhost:7000${item.filePath}`,
        }));
        setMediaItems(mediaData);
      } catch (error) {
        console.error("Failed to fetch media", error);
      }
    };
    fetchMedia();
  }, []);

  // Handle file selection
  const handleFileSelect = (file, index) => {
    if (isBannerImageVisible) {
      setSelectedBannerImage(file._id); // Store the ID of the banner image
      console.log("Selected Banner Image ID:", file._id);
    } else {
      setSelectedMainImage(file._id); // Store the ID of the main image
      console.log("Selected Main Image ID:", file._id);
    }
    setPreviewUrl(file.fileUrl); // Set the preview URL
  };

  return (
    <>
      <div
        className="tab-pane show !py-0"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <ul
          role="list"
          className="flex flex-wrap gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10"
        >
          {mediaItems.map((item, index) => (
            <li key={index} className="relative h-100 w-100">
              <div className="absolute z-5 left-2 top-1.5">
                <input
                  type="checkbox"
                  name="selectedFiles"
                  id={`file-${index}`}
                  onChange={() => handleFileSelect(item, index)} // Handle file selection
                />
              </div>
              <div className="block w-full overflow-hidden bg-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
                {item.mimeType && item.mimeType.startsWith("image/") ? (
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setPreviewUrl(item.fileUrl)}
                  >
                    <img
                      src={item.fileUrl}
                      alt={item.name}
                      className="object-contain"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </a>
                ) : item.mimeType && item.mimeType.startsWith("video/") ? (
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setPreviewUrl(item.fileUrl)}
                  >
                    <video
                      controls
                      className="object-contain w-[100px] h-[100px]"
                    >
                      <source src={item.fileUrl} type={item.mimeType} />
                    </video>
                  </a>
                ) : item.mimeType === "application/pdf" ? (
                  <embed
                    src={item.fileUrl}
                    type="application/pdf"
                    className="w-[100px] h-[100px] overflow-y-hidden no-scrollbar"
                  />
                ) : (
                  <p className="text-gray-500">
                    Unsupported file type: {item.mimeType}
                  </p>
                )}
              </div>
              <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                {item.name}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {item.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
