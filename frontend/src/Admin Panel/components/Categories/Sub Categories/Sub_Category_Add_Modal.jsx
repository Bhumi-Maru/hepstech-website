import React, { useEffect } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
// Import jQuery and Select2
import $ from "jquery";
import "select2/dist/js/select2.min.js"; // Import Select2 JS
import "select2/dist/css/select2.min.css"; // Import Select2 CSS
import List from "list.js";

export default function Sub_Category_Add_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();

  useEffect(() => {
    // Initialize select2
    $("#mainCategory").select2();

    // Your other jQuery code and List.js initialization
    $(function () {
      var subCategoryListOptions = {
        valueNames: ["main-category", "sub-category"],
        page: 10,
        pagination: {
          outerWindow: 2,
          innerWindow: 1,
        },
      };

      var subCategoryList = new List(
        "subCategoriesView",
        subCategoryListOptions
      );

      $("#searchSubCategory").on("keyup", function () {
        subCategoryList.search($("#searchSubCategory").val());
        if ($(".list").children().length === 0) {
          $(".not-found").removeClass("hidden");
        } else {
          $(".not-found").addClass("hidden");
        }
        checkPagerPosition();
      });

      var subCategoryListSize = subCategoryList.size();
      $("#totalSubCategories").html(subCategoryListSize);

      subCategoryList.on("searchComplete", function () {
        var updateNumber = subCategoryList.update().matchingItems.length;
        $("#totalSubCategories").html(updateNumber);
        console.log(subCategoryList.update().matchingItems.length);
      });

      $(document).on("click", ".page", function () {
        checkPagerPosition();
      });

      checkPagerPosition();

      function checkPagerPosition() {
        updateRecordTracker();
      }

      function updateRecordTracker() {
        var pageNumber = $(".pagination li.active .page").text();
        var pageRecordCount = 0;
        var missingPageItems =
          pageRecordCount - subCategoryList.visibleItems.length;
        var firstPageItemNumber =
          pageRecordCount * pageNumber - (pageRecordCount - 1);
        var lastPageItemNumber =
          pageRecordCount * pageNumber - missingPageItems;
        $("#page-first-item-number").text(firstPageItemNumber);
        $("#page-last-item-number").text(lastPageItemNumber);
        if ($(".list").children().length === 0) {
          $("#page-first-item-number").text(firstPageItemNumber - 1);
        }
      }

      $("#mainCategory").select2({});
    });
  }, []);

  return (
    <>
      {/* START ADD SUB CATEGORY POPUP MODAL */}
      <div
        className="modal active"
        id="createSubCategoryModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5
                className="mr-12 text-lg font-bold truncate"
                id="exampleModalLabel"
              >
                Edit Sub Category
              </h5>
              {/* <!-- close button --> */}
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
            <div className="modal-body">
              <form>
                <div className="space-y-4">
                  <div>
                    <label>Sub Category Title</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter sub category title"
                        className=""
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mainCategory">Main Category</label>
                    <div className="relative mt-1">
                      <select
                        className="select2-hidden-accessible"
                        id="mainCategory"
                        name="mainCategory"
                        data-select2-id="select2-data-mainCategory"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-2-0lfm">
                          Select Main Category
                        </option>
                        <option value="" data-select2-id="select2-data-5-91ve">
                          Main Category 1
                        </option>
                        <option value="" data-select2-id="select2-data-6-xpcr">
                          Main Category 2
                        </option>
                        <option value="" data-select2-id="select2-data-7-ugr1">
                          Main Category 3
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Image</label>
                    <div className="mt-1">
                      <button
                        type="button"
                        className="btn btn-white"
                        data-toggle="modal"
                        data-target="#selectFilesModal"
                      >
                        Select File
                      </button>
                    </div>
                  </div>
                  <div>
                    <label>Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        role="checkbox"
                        tabIndex="0"
                      />
                      <label htmlFor="toggleSwitch"></label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenPopupModal(false)}
                >
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END ADD SUB CATEGORY POPUP MODAL */}
    </>
  );
}
