import React from "react";

export default function Pages_2() {
  return (
    <>
      {/* page section 1 [table] */}
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
                  <tr>
                    <td className="nowrap">About Us</td>
                    <td className="nowrap">
                      <span className="badge badge-success">Published</span>
                    </td>
                    <td className="nowrap">
                      <div className="flex items-center flex-shrink-0 space-x-3">
                        <a
                          href="#"
                          title=""
                          className="btn-circle"
                          aria-label="Edit"
                          data-microtip-position="top"
                          role="tooltip"
                        >
                          <svg
                            className="w-5 h-5"
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
                        </a>

                        <a
                          href="#"
                          title=""
                          className="btn-circle"
                          aria-label="Delete"
                          data-microtip-position="top"
                          role="tooltip"
                        >
                          <svg
                            className="w-5 h-5"
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
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="nowrap">Refund Policy</td>
                    <td className="nowrap">
                      <span className="badge badge-danger">Unpublished</span>
                    </td>
                    <td className="nowrap">
                      <div className="flex items-center flex-shrink-0 space-x-3">
                        <a
                          href="#"
                          title=""
                          className="btn-circle"
                          aria-label="Edit"
                          data-microtip-position="top"
                          role="tooltip"
                        >
                          <svg
                            className="w-5 h-5"
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
                        </a>

                        <a
                          href="#"
                          title=""
                          className="btn-circle"
                          aria-label="Delete"
                          data-microtip-position="top"
                          role="tooltip"
                        >
                          <svg
                            className="w-5 h-5"
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
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
