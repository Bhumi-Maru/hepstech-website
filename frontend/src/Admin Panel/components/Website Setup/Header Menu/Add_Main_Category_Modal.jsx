import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Add_Main_Category_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* ADD MAIN CATEGORY MODAL */}
      <div
        className={`modal ${
          isOpenPopupModal.Header_Menu_Add_Category_Modal ? "active" : "hidden"
        }`}
        // className="modal active"
        id="addMainCategoryModal"
        // tabIndex="-1"
        role="dialog"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Add Main Category
              </h5>

              {/* close button */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div id="contentshow" className="modal-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="hidden" name="id" value="" />
                <input type="hidden" name="inputid1" value="" />
                <div>
                  <label htmlFor="mainCategory">Select Main Category</label>
                  <div className="relative mt-1">
                    <select
                      className="w-full p-2 border rounded"
                      id="mainCategory"
                      name="mainCategory"
                    >
                      <option value="5">Zenith MassRise</option>
                      <option value="2">mobile accessories</option>
                      <option value="3">Clothes</option>
                      <option value="4">Zenith VitaBoost</option>
                      <option value="6">Zenith Heromix</option>
                      <option value="7">Zenith SlimPulse</option>
                      <option value="8">Zenith Prolift</option>
                      <option value="9">Zenith SugerGuard</option>
                      <option value="10">Zenith ImmuneBoost</option>
                      <option value="11">Zenith VitalEdge</option>
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 items-center justify-end space-x-4">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
