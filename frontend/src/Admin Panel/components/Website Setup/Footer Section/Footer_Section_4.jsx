import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useFooterSection } from "../../../context/Footer_Section_Context";
import Add_Popup_Modal from "./Add_Popup_Modal";

export default function Footer_Section_4() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { footerFormData, handleInputChange, removeLinkFromColumn } =
    useFooterSection();
  const [currentColumnIndex, setCurrentColumnIndex] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editLinkIndex, setEditLinkIndex] = useState(null);

  const openAddLinkModal = (columnIndex, linkIndex = null) => {
    setCurrentColumnIndex(columnIndex);
    setEditLinkIndex(linkIndex); // null means "add", number means "edit"
    setIsEditing(linkIndex !== null);
    setIsOpenPopupModal(true);
  };

  // Ensure we always have exactly 3 columns
  const columnsData = Array(3)
    .fill()
    .map((_, index) => ({
      ...(footerFormData?.columnsData?.[index] || {}),
      columnTitle:
        footerFormData?.columnsData?.[index]?.columnTitle ||
        `Column ${index + 1}`,
      links: footerFormData?.columnsData?.[index]?.links || [],
    }));

  return (
    <>
      {/* FOOTER SECTION 4 [COLUMNS] */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {columnsData.map((column, columnIndex) => (
          <div key={columnIndex} className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <h3 className="text-base font-medium">{column.columnTitle}</h3>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <div>
                <label htmlFor={`columnTitle-${columnIndex}`}>
                  Column Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id={`columnTitle-${columnIndex}`}
                    placeholder="Column title"
                    className="w-full"
                    value={column.columnTitle}
                    onChange={(e) =>
                      handleInputChange(
                        `columnsData.${columnIndex}.columnTitle`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <hr className="my-5 border-gray-200" />

              <p className="text-sm text-gray-500">Links</p>
              <div className="mt-2 space-y-2">
                {column.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center space-x-5">
                    <div className="flex-1">
                      <p className="font-medium truncate">
                        {link.title || "Untitled Link"}
                        {/* {link.type && ` (${link.type})`} */}
                      </p>
                      {link.url && (
                        <p className="text-xs text-gray-500 truncate hidden">
                          {link.url}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center flex-shrink-0 space-x-3">
                      {/* edit */}
                      <button
                        type="button"
                        className="btn-circle"
                        aria-label="Update"
                        onClick={() => openAddLinkModal(columnIndex, linkIndex)}
                      >
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          ></path>
                        </svg>
                      </button>
                      {/* delete */}
                      <button
                        type="button"
                        className="btn-circle"
                        aria-label="Delete"
                        onClick={() =>
                          removeLinkFromColumn(columnIndex, linkIndex)
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openAddLinkModal(columnIndex)}
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render the modal when needed */}
      {isOpenPopupModal && currentColumnIndex !== null && (
        <Add_Popup_Modal
          columnIndex={currentColumnIndex}
          isEditing={isEditing}
          editLinkIndex={editLinkIndex}
        />
      )}
    </>
  );
}
