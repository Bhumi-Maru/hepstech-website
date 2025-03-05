import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AllMediaContext = createContext();

export const useAllMediaContext = () => {
  return useContext(AllMediaContext);
};

export const AllMediaProvider = ({ children }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState("all"); // Default value
  const [selectedSortOrder, setSelectedSortOrder] = useState("newest"); // Added sorting state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  //select files or file type
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  // select the tab like select files or upload
  const [selectedTab, setSelectedTab] = useState("select"); // 'select' or 'upload'

  // Fetch media from the API
  // const fetchMedia = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:7000/api/files");
  //     console.log(response.data); // Log the response to check the structure

  //     const mediaData = response.data.files.map((item) => {
  //       return {
  //         name: item.filename,
  //         size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
  //         mimeType: item.fileType || "unknown", // Default to 'unknown' if mimeType is undefined
  //         fileUrl: `http://localhost:7000${item.filePath}`,
  //       };
  //     });
  //     setMediaItems(mediaData);
  //   } catch (error) {
  //     console.error("Failed to fetch media", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMedia();
  // }, [mediaItems]); // Empty dependency array to fetch only once when the component mounts

  // Filter media items based on search term
  const filteredMediaItems = mediaItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter media based on type
  const filteredMedia = filteredMediaItems.filter((item) => {
    if (selectedMediaType === "all") return true;

    const imageTypes = ["image/jpeg", "image/png", "image/webp"];
    const videoTypes = [
      "video/mp4",
      "video/mov",
      "video/avi",
      "video/mkv",
      "video/webm",
    ];
    const gifTypes = ["image/gif"];
    const documentTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    switch (selectedMediaType) {
      case "image":
        return imageTypes.includes(item.mimeType);
      case "video":
        return videoTypes.includes(item.mimeType);
      case "gif":
        return gifTypes.includes(item.mimeType);
      case "document":
        return documentTypes.includes(item.mimeType);
      default:
        return false;
    }
  });

  // Sorting logic based on selectedSortOrder
  const sortedMedia = filteredMedia.sort((a, b) => {
    switch (selectedSortOrder) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt); // Sort by oldest
      case "smallest":
        return a.fileSize - b.fileSize; // Sort by smallest
      case "largest":
        return b.fileSize - a.fileSize; // Sort by largest
      default:
        return 0;
    }
  });

  // Handle date selection
  const handleDateSelect = (range) => {
    setSelectedDateRange(range);
    setShowDatePicker(false);
  };

  return (
    <AllMediaContext.Provider
      value={{
        mediaItems: sortedMedia, // Provide filtered media
        setMediaItems,
        selectedDateRange,
        setSelectedDateRange,
        showDatePicker,
        setShowDatePicker,
        handleDateSelect,
        searchTerm,
        setSearchTerm,
        previewUrl,
        setPreviewUrl,
        selectedMediaType,
        setSelectedMediaType,
        selectedSortOrder, // Provide sorting state
        setSelectedSortOrder,
        // fetchMedia, // fetch all images
        selectedFile,
        setSelectedFile,
        fileType,
        setFileType,
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </AllMediaContext.Provider>
  );
};
