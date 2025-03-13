import React, { useEffect, useState, useCallback } from "react";
import { useAllMediaContext } from "../../context/All_Media_Context";
import axios from "axios";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { useSubCategoryContext } from "../../context/SubCategory_Context";

export default function Select_Files() {
  const {
    setMediaItems,
    mediaItems,
    setPreviewUrl,
    setSelectedMainImage,
    setSelectedBannerImage,
    isBannerImageVisible,
  } = useAllMediaContext();

  const { isOpenPopupModal } = useAdminGlobalContext();
  const { setSelectedSubImage } = useSubCategoryContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch media from the API
  const fetchMedia = useCallback(async () => {
    try {
      setLoading(true);
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
      setError("Failed to load media files.");
      console.error("Failed to fetch media", error);
    } finally {
      setLoading(false);
    }
  }, [setMediaItems]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // Handle Image Selection
  const handleImageSelect = (file) => {
    if (isBannerImageVisible) {
      setSelectedBannerImage(file._id);
      console.log("Banner Image ID:", file._id);
    } else if (isOpenPopupModal.addMainCategoryPopupModal) {
      setSelectedMainImage(file._id);
      console.log("Main Image ID:", file._id);
    } else if (isOpenPopupModal.addSubCategoryPopupModal) {
      setSelectedSubImage(file._id);
      console.log("Sub image ID:", file._id);
    }
    setPreviewUrl(file.fileUrl);
  };

  return (
    <>
      <div
        className="tab-pane show !py-0"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading media files...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <ul
            role="list"
            className="flex flex-wrap gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10"
          >
            {mediaItems
              .filter((item) =>
                isOpenPopupModal.addMainCategoryPopupModal ||
                isOpenPopupModal.editMainCategoryPopupModal ||
                isOpenPopupModal.addSubCategoryPopupModal
                  ? item.mimeType.startsWith("image/") &&
                    !item.mimeType.includes("gif")
                  : true
              )
              .map((item, index) => (
                <li key={item._id} className="relative h-100 w-100">
                  <div className="absolute z-5 left-2 top-1.5">
                    <input
                      type="checkbox"
                      name="selectedFiles"
                      id={`file-${index}`}
                      onChange={() => handleImageSelect(item)}
                    />
                  </div>
                  <div className="block w-full overflow-hidden bg-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
                    {item.mimeType.startsWith("image/") &&
                    !item.mimeType.includes("gif") ? (
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPreviewUrl(item.fileUrl)}
                      >
                        <img
                          src={item.fileUrl}
                          alt={`Preview of ${item.name}`}
                          className="object-contain h-24 w-24"
                        />
                      </a>
                    ) : item.mimeType.startsWith("video/") ? (
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPreviewUrl(item.fileUrl)}
                      >
                        <video controls className="object-contain w-24 h-24">
                          <source src={item.fileUrl} type={item.mimeType} />
                        </video>
                      </a>
                    ) : item.mimeType === "application/pdf" ? (
                      <embed
                        src={item.fileUrl}
                        type="application/pdf"
                        className="w-24 h-24 overflow-hidden no-scrollbar"
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
        )}
      </div>
    </>
  );
}
