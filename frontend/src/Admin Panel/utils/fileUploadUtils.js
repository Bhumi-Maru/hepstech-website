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
    setSelectedTab("select");
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
    // if (isOpenPopupModal?.startSelectFilesAndMedia) {
    //   setSelectedTab("select");
    //   setPreviewUrl(null);
    // }

    // // Clear preview AFTER the file is added to the media list if necessary
    // setTimeout(() => {
    //   // Clear only if the modal is closed
    //   if (!isOpenPopupModal.startSelectFilesAndMedia) {
    //     setSelectedFile(null);
    //     setPreviewUrl(null);
    //   }
    // }, 1000); // Small delay to prevent instant clearing
  } catch (error) {
    console.error("Failed to upload file", error);
    alert(
      error.response?.data?.message || "File upload failed. Please try again."
    );
  }
};

// export const getFilePreview = (file) => {
//   if (!file) return null;

//   let fileUrl = "";
//   let fileType = "";

//   if (typeof file === "string") {
//     // If it's a direct URL (from database)
//     fileUrl = file;
//     fileType = file.split(".").pop().toLowerCase();
//   } else if (file instanceof File) {
//     // If it's a newly uploaded file
//     fileUrl = URL.createObjectURL(file);
//     fileType = file.name.split(".").pop().toLowerCase();
//   } else if (file.fileUrl) {
//     // If the file object contains a fileUrl property
//     fileUrl = file.fileUrl;
//     fileType = file.fileType || fileUrl.split(".").pop().toLowerCase();
//   }

//   // Allow preview only for jpg, jpeg, and png file types
//   if (["jpg", "jpeg", "png"].includes(fileType)) {
//     return (
//       <img
//         src={fileUrl}
//         alt="Preview"
//         className="w-12 object-contain rounded-md"
//         style={{ height: "2.2rem" }}
//       />
//     );
//   }

//   return null; // Return null for non-image file types
// };

// Function to check the file type and return the appropriate preview
export const getFilePreview = (file) => {
  if (!file) return null;

  const fileUrl = file.fileUrl;
  const fileType = file.fileType || fileUrl.split(".").pop().toLowerCase();

  // Only show image previews for jpg, jpeg, png file types
  if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
    return (
      <img
        src={fileUrl}
        alt="Preview"
        className="w-12 object-contain rounded-md"
        style={{ height: "2.2rem" }}
      />
    );
  }

  return null; // Return null for all non-image file types
};

///get header section fetch data
export const fetchHeaderData = async (setFormData) => {
  try {
    const response = await axios.get(
      "http://localhost:7000/api/header-section/getAll"
    );

    if (response.data.success && response.data.data.length > 0) {
      // Sort by createdAt to get the most recent entry
      const sortedData = [...response.data.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const latestData = sortedData[0];

      setFormData(latestData);
      console.log("Most Recent Data:", latestData);
    }
  } catch (error) {
    console.error("Error fetching header data:", error);
  }
};

///get footer section fetch data
export const fetchFooterData = async (setFormData) => {
  try {
    const response = await axios.get(
      "http://localhost:7000/api/footer-section/getAll"
    );

    if (response.data.success && response.data.data.length > 0) {
      // Sort by createdAt to get the most recent entry
      const sortedData = [...response.data.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const latestData = sortedData[0];

      setFormData(latestData);
      console.log("Most Recent Data:", latestData);
    }
  } catch (error) {
    console.error("Error fetching header data:", error);
  }
};
