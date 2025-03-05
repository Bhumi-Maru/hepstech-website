import axios from "axios";
import React from "react";

export default function All_Media_3_Footer() {
  // Function to handle bulk delete
  const handleBulkDelete = async () => {
    try {
      // Make a DELETE request to the backend to delete all files
      const response = await axios.delete("http://localhost:7000/api/files");

      // Handle the successful response
      alert(response.data.message);
      // Optionally, you can trigger a refresh or update of your media list here
      // For example, you can fetch the updated list of files.
    } catch (error) {
      console.error("Error deleting files:", error);
      alert("Failed to delete files");
    }
  };

  return (
    <>
      {/* ALL MEDIA FOOTER */}
      <hr className="mt-6 mb-5 border-gray-200" />
      <button
        type="button"
        className="btn btn-error"
        onClick={handleBulkDelete}
      >
        <svg
          className="w-5 h-5 mr-2 -ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Bulk Delete
      </button>
    </>
  );
}
