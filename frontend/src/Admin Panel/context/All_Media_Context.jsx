import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AllMediaContext = createContext();

export const useAllMediaContext = () => {
  return useContext(AllMediaContext);
};

export const AllMediaProvider = ({ children }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [image, setImage] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await axios.post(
        "http://localhost:7000/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const newImage = {
        name: image.name,
        size: (image.size / 1024 / 1024).toFixed(2) + " MB",
        imageUrl: `http://localhost:7000${response.data.file.filePath}`,
      };
      setMediaItems((prevItems) => [...prevItems, newImage]);
      alert("Upload successful: " + response.data.message);
      setImage(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    }
  };

  const handleDateSelect = (range) => {
    setSelectedDateRange(range);
    setShowDatePicker(false);
  };

  return (
    <AllMediaContext.Provider
      value={{
        mediaItems,
        setMediaItems,
        image,
        handleImageChange,
        handleUpload,
        selectedDateRange,
        setSelectedDateRange,
        showDatePicker,
        setShowDatePicker,
        handleDateSelect,
      }}
    >
      {children}
    </AllMediaContext.Provider>
  );
};
