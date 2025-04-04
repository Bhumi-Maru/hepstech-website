import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Header_Menu_Section__1() {
  const { toggleModal, setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* HEADER MENU SECTION 1 [HEADING , ADD CATEGORY BTN , ADD PAGE BTN] */}

      <div className="flex items-center justify-between">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Header Menu</h1>
        <div>
          <button
            id="addMainCategoryModal"
            className="btn btn-primary mr-2"
            onClick={() => toggleModal("Header_Menu_Add_Category_Modal")}
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add Category
          </button>
          <button
            id="createPageandcreateLinkModal"
            onClick={() =>
              toggleModal("Header_Menu_Add_Page_Custom_Link_Popup_Modal")
            }
            className="btn btn-primary"
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add Pages
          </button>
        </div>
      </div>
    </>
  );
}
