import axios from "axios";

export const handleImageChange = (
  e,
  setSelectedFile,
  setPreviewUrl,
  setFileType
) => {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setFileType(file.type);
  }
};

export const handleFileUpload = async (
  selectedFile,
  setMediaItems,
  setIsOpenPopupModal, // Ensure this is passed properly
  setPreviewUrl,
  setSelectedTab,
  isOpenPopupModal
) => {
  if (!selectedFile) {
    alert("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await axios.post(
      "http://localhost:7000/api/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const newFile = {
      name: selectedFile.name,
      size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
      imageUrl: `http://localhost:7000${response.data.filePath}`,
    };
    setPreviewUrl(null);
    // Only reset the tab if startSelectFilesAndMedia modal is open
    if (isOpenPopupModal?.startSelectFilesAndMedia) {
      setSelectedTab("select");
    }

    // Close modal after upload
    setIsOpenPopupModal((prev) => ({
      ...prev,
      uploadFiles: false, // Close only the Upload modal
    }));

    setMediaItems((prevItems) => [...prevItems, newFile]);
  } catch (error) {
    console.error("Failed to upload file", error);
    alert(
      error.response?.data?.message || "File upload failed. Please try again."
    );
  }
};
