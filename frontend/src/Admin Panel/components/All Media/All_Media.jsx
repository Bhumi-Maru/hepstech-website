import React, { useState } from "react";
import Images_All_Media from "./Images_All_Media";
import All_Media_1 from "./All_Media_1";
import All_Media_2 from "./All_Media_2";
import All_Media_3_Footer from "./All_Media_3_Footer";
import { useAllMediaContext } from "../../context/All_Media_Context";
import axios from "axios";

export default function All_Media() {
  const { mediaItems, setMediaItems, selectedFiles, setSelectedFiles } =
    useAllMediaContext();

  // Bulk delete selected files or all files
  const deleteSelectedFiles = async () => {
    try {
      const filesToDelete =
        selectedFiles.length > 0
          ? selectedFiles
          : mediaItems.map((item) => item._id);

      // Make DELETE request to delete selected files from the server
      await axios.delete("http://localhost:7000/api/SelectedFiles", {
        data: { fileIds: filesToDelete },
      });

      // Remove the deleted files from the mediaItems list
      setMediaItems((prevItems) =>
        prevItems.filter((item) => !filesToDelete.includes(item._id))
      );

      // Reset the selected files state
      setSelectedFiles([]);
    } catch (error) {
      console.error("Failed to delete selected files", error);
    }
  };
  return (
    <>
      {/* START ALL_MEDIA */}
      <div className="container" id="filesView">
        <All_Media_1 />
        <All_Media_2 />

        {/* DISPLAY ALL IMAGES */}
        <Images_All_Media deleteSelectedFiles={deleteSelectedFiles} />

        {/* End Display uploaded image */}
        <All_Media_3_Footer deleteSelectedFiles={deleteSelectedFiles} />
      </div>
      {/* END ALL_MEDIA */}
    </>
  );
}
