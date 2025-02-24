//admin panel
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Admin Panel/components/Sidebar/Sidebar";
import Navbar from "./Admin Panel/components/Navbar/Navbar";
import Dashboard from "./Admin Panel/components/Dashboard/Dashboard";
import Footer from "./Admin Panel/components/Footer/Footer";
import All_Media from "./Admin Panel/components/All Media/All_Media";
import MainCategories from "./Admin Panel/components/Categories/Main Categories/MainCategories";
import SubCategories from "./Admin Panel/components/Categories/Sub Categories/SubCategories";
import Orders from "./Admin Panel/components/Orders/Orders";
import Customers from "./Admin Panel/components/Customers/Customers";
import Coupon_Codes from "./Admin Panel/components/Coupon Codes/Coupon_Codes";
import Shipping from "./Admin Panel/components/Shipping/Shipping";
import Time_Slots from "./Admin Panel/components/Time Slots/Time_Slots";
import Store_Settings from "./Admin Panel/components/Store Settings/Store_Settings";
import Website_Setup from "./Admin Panel/components/Website Setup/Website_Setup";
import Customer_Details from "./Admin Panel/components/Customers/Customer_Details";
import Orders_Details from "./Admin Panel/components/Orders/Orders_Details";
import Main_Category_Add_Modal from "./Admin Panel/components/Categories/Main Categories/Main_Category_Add_Modal";
import { useAdminGlobalContext } from "./Admin Panel/context/Admin_Global_Context";
import Sub_Category_Add_Modal from "./Admin Panel/components/Categories/Sub Categories/Sub_Category_Add_Modal";
import Wallet_Popup_Modal from "./Admin Panel/components/Customers/Wallet_Popup_Modal";
import Export_Details from "./Admin Panel/components/Orders/Export_Details";
import Create_Order from "./Admin Panel/components/Orders/Create_Order";
import Add_Custom_Items from "./Admin Panel/components/Orders/Add_Custom_Items";
import Create_Coupon_Codes from "./Admin Panel/components/Coupon Codes/Create_Coupon_Codes";
import Create_Time_Slots from "./Admin Panel/components/Time Slots/Create_Time_Slots";
import Deactive_Account from "./Admin Panel/components/Website Setup/Header Menu/Deactive_Account";

export default function Admin_Panel_App() {
  const { isOpenPopupModal } = useAdminGlobalContext();
  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gray-50 selection:bg-skin-primary selection:text-white">
      {/* <!-- START WRAPPER --> */}
      <div className="flex h-screen overflow-hidden">
        <Router basename="/admin">
          {/* SIDEBAR */}
          <Sidebar />
          {/* MAIN CONTENT */}
          <main className="flex flex-col flex-1 w-0 bg-gray-50">
            {/* NAVBAR */}
            <Navbar />
            {/* ROUTES */}
            <section className="relative flex-1 overflow-x-hidden overflow-y-auto focus:outline-none">
              <div className="flex flex-col justify-between h-full">
                <div className="flex-1 py-6">
                  <Routes>
                    {/* DASHBOARD */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* ALL MEDIA */}
                    <Route path="/all-media" element={<All_Media />} />
                    {/* MAIN CATEGORIES */}
                    <Route
                      path="/categories/main-categories"
                      element={<MainCategories />}
                    />

                    {/* SUB CATEGORIES */}
                    <Route
                      path="/categories/sub-categories"
                      element={<SubCategories />}
                    />
                    {/* ORDERS */}
                    <Route path="/orders" element={<Orders />} />
                    {/* ORDERS DETAILS */}
                    <Route path="/order-details" element={<Orders_Details />} />
                    {/* CREATE ORDERS */}
                    <Route path="/create-order" element={<Create_Order />} />
                    {/* CUSTOMERS */}
                    <Route path="/customers" element={<Customers />} />
                    {/* CUSTOMER DETAILS */}
                    <Route
                      path="/customer-details"
                      element={<Customer_Details />}
                    />
                    {/* COUPON CODES */}
                    <Route path="/coupon-codes" element={<Coupon_Codes />} />
                    {/* CREATE COUPON CODES */}
                    <Route
                      path="/create-coupon-code"
                      element={<Create_Coupon_Codes />}
                    />
                    {/* SHIPPING */}
                    <Route path="/shipping" element={<Shipping />} />
                    {/* TIME SLOTS */}
                    <Route path="/time-slots" element={<Time_Slots />} />
                    {/* WEBSITE SETUP */}
                    <Route
                      path="/website-setup/*"
                      element={<Website_Setup />}
                    />
                    {/* STORE SETTINGS */}
                    <Route path="/store-setting" element={<Store_Settings />} />
                  </Routes>
                </div>
                {/* FOOTER */}
                <Footer />
              </div>
            </section>
          </main>
        </Router>
      </div>
      {/* MAIN CATEGORY ADD POPUP MODAL */}
      {isOpenPopupModal.addMainCategoryPopupModal && (
        <>
          <Main_Category_Add_Modal />
        </>
      )}
      {/* SUB CATEGORY ADD POPUP MODAL */}
      {isOpenPopupModal.addSubCategoryPopupModal && (
        <>
          <Sub_Category_Add_Modal />
        </>
      )}
      {/* EDIT WALLET AMOUNT POPUP MODAL */}
      {isOpenPopupModal.editWalletAmount && (
        <>
          <Wallet_Popup_Modal />
        </>
      )}
      {/* EXPORT DETAILS POPUP MODAL */}
      {isOpenPopupModal.exportDetails && (
        <>
          <Export_Details />
        </>
      )}
      {/* ADD CUSTOM ITEM IN CREATE ORDER PAGE */}
      {isOpenPopupModal.addCustomItems && (
        <>
          <Add_Custom_Items />
        </>
      )}
      {/* CREATE TIME SLOTS */}
      {isOpenPopupModal.createTimeSlots && (
        <>
          <Create_Time_Slots />
        </>
      )}
      {/* DEACTIVE ACCOUNT POPUP MODAL IN HEADER MENU PAGE */}
      {isOpenPopupModal.deactiveAccountHeaderMenu && (
        <>
          <Deactive_Account />
        </>
      )}
      {/* <!-- END WRAPPER --> */}
    </div>
  );
}
