import React from "react";
import { usePageContext } from "../../../context/Store_Setting_Page";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Pages_2() {
  const { data, setCurrentPage, deletePage, setIsEditingId } = usePageContext();
  const { setIsOpenPopupModal, toggleModal } = useAdminGlobalContext();
  const handleEdit = (page) => {
    console.log("page is", page._id);
    setCurrentPage(page);
    toggleModal("createNewPage");
    setIsOpenPopupModal((prev) => ({ ...prev, createNewPage: true }));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      await deletePage(id);
    }
  };

  return (
    <>
      {/* Page section 1 [table] */}
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 custom-table">
                <thead>
                  <tr>
                    <th scope="col" className="nowrap">
                      Page Title
                    </th>
                    <th scope="col" className="nowrap">
                      Status
                    </th>
                    <th scope="col" className="nowrap"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 list">
                  {data.map((page) => (
                    <tr key={page._id}>
                      <td className="nowrap">{page.pageTitle}</td>
                      <td className="nowrap">
                        <span
                          className={`badge ${
                            page.page_status === "Published"
                              ? "badge-success"
                              : "badge-danger"
                          }`}
                        >
                          {page.page_status}
                        </span>
                      </td>
                      <td className="nowrap">
                        <div className="flex items-center flex-shrink-0 space-x-3">
                          <a
                            href="#"
                            className="btn-circle"
                            aria-label="Edit"
                            title="Edit"
                            id="createPageModal"
                            onClick={() => handleEdit(page)}
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
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414
                                    a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="btn-circle"
                            aria-label="Delete"
                            title="Delete"
                            onClick={() => handleDelete(page._id)}
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
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10
                                    V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
