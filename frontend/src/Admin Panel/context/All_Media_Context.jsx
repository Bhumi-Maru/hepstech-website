import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AllMediaContext = createContext();

export const useAllMediaContext = () => {
  return useContext(AllMediaContext);
};

export const AllMediaProvider = ({ children }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [previewUrl, setPreviewUrl] = useState(null);

  // Filtered media items based on search term
  const filteredMediaItems = mediaItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.imageUrl.toLowerCase().includes(searchTerm.toLowerCase()) // You can extend this to search by other attributes
  );

  const handleDateSelect = (range) => {
    setSelectedDateRange(range);
    setShowDatePicker(false);
  };

  return (
    <AllMediaContext.Provider
      value={{
        mediaItems: filteredMediaItems, // Provide filtered media items
        setMediaItems,
        selectedDateRange,
        setSelectedDateRange,
        showDatePicker,
        setShowDatePicker,
        handleDateSelect,
        searchTerm, // Add searchTerm to the context
        setSearchTerm, // Provide setSearchTerm to update the search term
        previewUrl, //track image , video , document and gif
        setPreviewUrl,
      }}
    >
      {children}
    </AllMediaContext.Provider>
  );
};
