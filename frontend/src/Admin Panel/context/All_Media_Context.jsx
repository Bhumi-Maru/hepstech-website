import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AllMediaContext = createContext();

export const useAllMediaContext = () => {
  return useContext(AllMediaContext);
};

export const AllMediaProvider = ({ children }) => {
  const [isBannerImageVisible, setIsBannerImageVisible] = useState(false);
  // ftech all files
  const [mediaItems, setMediaItems] = useState([]);
  // console.log("media items", mediaItems);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState("all"); // Default value
  const [selectedSortOrder, setSelectedSortOrder] = useState("newest"); // Added sorting state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  //select files or file type in upload tab
  const [selectedFile, setSelectedFile] = useState(null); // Fix for undefined error

  //select file in select tab
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [selectedBannerImage, setSelectedBannerImage] = useState(null);

  const [fileType, setFileType] = useState(null);
  // select the tab like select files or upload
  const [selectedTab, setSelectedTab] = useState("select"); // 'select' or 'upload'

  //main categories
  const [categories, setCategories] = useState([]);
  // select files in all media page
  const [selectedFiles, setSelectedFiles] = useState([]); // Track selected files

  // update main category
  const onUpdateCategory = (updatedCategory) => {
    // Update the categories state with the updated category
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
  };

  useEffect(() => {
    fetchMedia();
  }, [selectedSortOrder]);

  const fetchMedia = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/files");
      const mediaData = response.data.files.map((item) => {
        return {
          name: item.filename,
          size: item.fileSize,
          sizeFormatted: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
          mimeType: item.fileType || "unknown",
          fileUrl: `http://localhost:7000${item.filePath}`,
          _id: item._id,
          createdAt: item.createdAt,
        };
      });

      const sortedMedia = mediaData.sort((a, b) => {
        switch (selectedSortOrder) {
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt);
          case "oldest":
            return new Date(a.createdAt) - new Date(b.createdAt);
          case "smallest":
            return a.size - b.size;
          case "largest":
            return b.size - a.size;
          default:
            return 0;
        }
      });

      setMediaItems(sortedMedia);
    } catch (error) {
      console.error("Failed to fetch media", error);
    }
  };

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

  // Handle date selection
  const handleDateSelect = (range) => {
    setSelectedDateRange(range);
    setShowDatePicker(false);
  };

  return (
    <AllMediaContext.Provider
      value={{
        mediaItems: filteredMedia, // Provide filtered media
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
        fetchMedia, // fetch all images
        selectedFile, // this is for selected file (start_select_files_And_Media_Modal)
        setSelectedFile, // this is for selected file (start_select_files_And_Media_Modal)
        selectedMainImage,
        setSelectedMainImage,
        selectedBannerImage,
        setSelectedBannerImage,
        fileType,
        setFileType,
        selectedTab,
        setSelectedTab,
        onUpdateCategory,
        categories,
        setCategories,
        //select files in all media page
        selectedFiles,
        setSelectedFiles,
        isBannerImageVisible,
        setIsBannerImageVisible,
      }}
    >
      {children}
    </AllMediaContext.Provider>
  );
};
