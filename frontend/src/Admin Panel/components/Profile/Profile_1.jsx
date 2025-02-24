import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Profile_1() {
  const { toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* PROFILE SECTION 1 [Personal Information] */}

      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Update your username and manage your account.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="space-y-4">
                <div>
                  <label for="photo"> Avatar Photo </label>
                  <div className="relative flex items-center mt-2 space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full ring-1 ring-gray-100">
                      <img
                        className="object-cover w-full h-full profile-pic"
                        src="../../admin_assets/images/default-avatar.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="upload-avatar">
                      <button
                        type="button"
                        className="upload-button btn btn-white"
                        data-toggle="modal"
                        data-target="#selectFilesModal"
                        onClick={() => toggleModal("startSelectFilesAndMedia")}
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                        Upload
                      </button>
                      {/* <!-- <input className="!hidden file-upload" type="file" accept="image/*" /> --> */}
                    </div>
                    <button type="button" className="btn btn-error-light">
                      Remove
                    </button>
                  </div>
                </div>

                <div>
                  <label for=""> Full Name </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Email </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Customer ID </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                      value="#156282085"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
