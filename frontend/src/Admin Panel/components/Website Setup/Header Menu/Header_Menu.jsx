import React from "react";
import Header_Menu_Section_1 from "./Header_Menu_Section_1";
import Header_Menu_Section__1 from "./Header_Menu_Section__1";
import Header_Menu_Section__2 from "./Header_Menu_Section__2";
import Add_Main_Category_Modal from "./Add_Main_Category_Modal";
import Header_Menu_Add_Popup_Modal from "./Header_Menu_Add_Popup_Modal";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Header_Menu() {
  const { isOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      <div class="flex-1">
        <div class="container">
          {/* <Header_Menu_Section_1 /> */}
          {/* HEADER MENU SECTION 1 [HEADING , ADD CATEGORY BTN , ADD PAGE BTN] */}
          <Header_Menu_Section__1 />
          {/* HEADER SECTION 2 [CATEGORY LIST & PAGE LIST] */}
          <Header_Menu_Section__2 />
        </div>
      </div>

      {/* HEADER MENU SECTION MAIN CATEGORY ADD MODAL */}
      {isOpenPopupModal.Header_Menu_Add_Category_Modal && (
        <>
          <Add_Main_Category_Modal />
        </>
      )}

      {/* HEADER MENU SECTION ADD PAGE AND CUSTOM LINK MODAL */}
      {isOpenPopupModal.Header_Menu_Add_Page_Custom_Link_Popup_Modal && (
        <>
          <Header_Menu_Add_Popup_Modal />
        </>
      )}
    </>
  );
}
