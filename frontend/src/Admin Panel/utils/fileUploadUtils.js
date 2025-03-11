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
  setIsOpenPopupModal,
  setPreviewUrl,
  setSelectedTab,
  isOpenPopupModal,
  setSelectedFile
) => {
  if (!selectedFile) {
    alert("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("filename", selectedFile);

  setPreviewUrl(null);

  try {
    const response = await axios.post(
      "http://localhost:7000/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const newFile = {
      name: selectedFile.name,
      size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
      imageUrl: `http://localhost:7000${response.data.filePath}`,
    };

    // Add file to media list BEFORE clearing the preview
    setMediaItems((prevItems) => [...prevItems, newFile]);

    // Close modal after upload
    setIsOpenPopupModal((prev) => {
      const newState = { ...prev, uploadFiles: false };
      // Reset preview only if the modal is closed or the selected tab changes
      if (
        !newState.startSelectFilesAndMedia ||
        newState.selectedTab !== "upload" ||
        newState.selectedTab === "upload"
      ) {
        setPreviewUrl(null); // Clear only if necessary
      }
      return newState;
    });

    // Only reset the tab if the modal is open
    if (isOpenPopupModal?.startSelectFilesAndMedia) {
      setSelectedTab("select");
      setPreviewUrl(null);
    }

    // Clear preview AFTER the file is added to the media list if necessary
    setTimeout(() => {
      // Clear only if the modal is closed
      if (!isOpenPopupModal.startSelectFilesAndMedia) {
        setSelectedFile(null);
        setPreviewUrl(null);
      }
    }, 1000); // Small delay to prevent instant clearing
  } catch (error) {
    console.error("Failed to upload file", error);
    alert(
      error.response?.data?.message || "File upload failed. Please try again."
    );
  }
};
