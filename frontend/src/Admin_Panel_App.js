import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Admin Panel/components/Sidebar/Sidebar";
import Navbar from "./Admin Panel/components/Navbar/Navbar";
import Footer from "./Admin Panel/components/Footer/Footer";
import Dashboard from "./Admin Panel/components/Dashboard/Dashboard";
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
import Sub_Category_Add_Modal from "./Admin Panel/components/Categories/Sub Categories/Sub_Category_Add_Modal";
import Wallet_Popup_Modal from "./Admin Panel/components/Customers/Wallet_Popup_Modal";
import Export_Details from "./Admin Panel/components/Orders/Export_Details";
import Create_Order from "./Admin Panel/components/Orders/Create_Order";
import Add_Custom_Items from "./Admin Panel/components/Orders/Add_Custom_Items";
import Create_Coupon_Codes from "./Admin Panel/components/Coupon Codes/Create_Coupon_Codes";
import Create_Time_Slots from "./Admin Panel/components/Time Slots/Create_Time_Slots";
import Deactive_Account from "./Admin Panel/components/Website Setup/Header Menu/Deactive_Account";
import All_Products from "./Admin Panel/components/Products/All Products/All_Products";
import Create_Products from "./Admin Panel/components/Products/Create Products/Create_Products";
import Product_Reviews from "./Admin Panel/components/Products/Product Reviews/Product_Reviews";
import Login from "./Admin Panel/components/Authentication/Login/Login";
import Application_Setting from "./Admin Panel/components/Store Settings/Application Setting/Application_Setting";
import Checkout_Settings from "./Admin Panel/components/Store Settings/Checkout Settings/Checkout_Settings";
import Empty from "./Admin Panel/components/Empty/Empty";
import Add_Popup_Modal from "./Admin Panel/components/Website Setup/Footer Section/Add_Popup_Modal";
import General_Settings from "./Admin Panel/components/Store Settings/General Settings/General_Settings";
import Order_Settings from "./Admin Panel/components/Store Settings/Order Settings/Order_Settings";
import Pages from "./Admin Panel/components/Store Settings/Pages/Pages";
import Create_New_Page_Popup_Modal from "./Admin Panel/components/Store Settings/Pages/Create_New_Page_Popup_Modal";
import Plans_Subscriptions from "./Admin Panel/components/Store Settings/Plans & Subscriptions/Plans_Subscriptions";
import Website_Settings from "./Admin Panel/components/Store Settings/Website Settings/Website_Settings";
import Profile from "./Admin Panel/components/Profile/Profile";
import Start_Select_Files_And_Media_Modal from "./Admin Panel/components/Profile/Start_Select_Files_And_Media_Modal";
import { useAdminGlobalContext } from "./Admin Panel/context/Admin_Global_Context";
import Payment_Methods from "./Admin Panel/components/Store Settings/Payment Methods/Payment_Methods";
import Add_Main_Banner_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Main Banner Slider Section 1/Add_Main_Banner_Popup_Modal";
import Category_Slider_8_Items_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Category Slider 8 Items Section 01 Section 2/Category_Slider_8_Items_Popup_Modal";
import Add_Main_Banner_Section_3_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banner - Small - 1 Item section 3/Add_Main_Banner_Section_3_Popup_Modal";
import Add_Products_Section_4_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Flash Sale Slider section 4/Add_Products_Section_4_Popup_Modal";
import Add_Banner_Section_5_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - 3 Items - Section 5/Add_Banner_Section_5_Popup_Modal";
import Add_Category_Section_6_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Category Slider 02 Section 6/Add_Category_Section_6_Popup_Modal";
import Add_Products_Section_7_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Popular Products Slider 01 Section 7/Add_Products_Section_7_Popup_Modal";
import Add_Main_Banner_Section_8_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Large - 2 Items Section 8/Add_Main_Banner_Section_8_Popup_Modal";
import Add_Products_Section_9_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Popular Products Slider 02 Section 9/Add_Products_Section_9_Popup_Modal";
import Add_Main_Banner_10_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - 2 Items Section 10/Add_Main_Banner_10_Popup_Modal";
import Add_Product_Section_11_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Best Selling Products Slider 01 Section 11/Add_Product_Section_11_Popup_Modal";
import Add_Main_Banner_Section_12_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Vertical Banners - 4 Items Section 11/Add_Main_Banner_Section_12_Popup_Modal";
import Horizontal_Banners_Large_1_Item_Section_13_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Large - 1 Item Section 13/Horizontal_Banners_Large_1_Item_Section_13_Popup_Modal";
import Best_Selling_Products_Slider_02_Section_14_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Best Selling Products Slider 02 Section 14/Best_Selling_Products_Slider_02_Section_14_Popup_Modal";
import Horizontal_Banners_Small_1_Item_Section_15 from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Small - 1 Item Section 15/Horizontal_Banners_Small_1_Item_Section_15";
import VerticalBanners4Items_Section_16_PopupModal from "./Admin Panel/components/Website Setup/Home Page/Vertical Banners - 4 Items Section 16/VerticalBanners4Items_Section_16_PopupModal";
import Best_Selling_Products_Slider_03_Section_17_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Best Selling Products Slider 03 Section 17/Best_Selling_Products_Slider_03_Section_17_Popup_Modal";
import Add_Main_Banner_Section_18_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Large - 2 Items Section 18/Add_Main_Banner_Section_18_Popup_Modal";
import Add_Main_Banner_Section_19_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Large - 1 Item Section 19/Add_Main_Banner_Section_19_Popup_Modal";
import Best_Selling_Products_Slider_04_Section_20_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Best Selling Products Slider 04 Section 20/Best_Selling_Products_Slider_04_Section_20_Popup_Modal";
import Add_Main_Banner_Section_21_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Vertical Banners - 4 Items Section 21/Add_Main_Banner_Section_21_Popup_Modal";
import Add_Main_Banner_Section_22_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Horizontal Banners - Small - 1 Items Section 21/Add_Main_Banner_Section_22_Popup_Modal";
import Add_Testimonials_Section_23_Popup_Modal from "./Admin Panel/components/Website Setup/Home Page/Testimonials - Reviews Slider Section 23/Add_Testimonials_Section_23_Popup_Modal";
import Small_Screen_SideBar from "./Admin Panel/components/Navbar/Small_Screen_SideBar";

export default function Admin_Panel_App() {
  const { isOpenPopupModal } = useAdminGlobalContext();

  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.remove();
    }
  }, []);

  // Check if the current route is for login
  const isLoginPage = window.location.pathname === "/admin";

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gray-50 selection:bg-skin-primary selection:text-white">
      <Router basename="/admin">
        {/* <!-- START WRAPPER --> */}
        {/* Render login page without Sidebar, Navbar, or Footer */}
        {isLoginPage ? (
          <Routes>
            {/* LOGIN PAGE AND KNOWN AS INDEX.HTML */}
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <>
            <div className="flex h-screen overflow-hidden">
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

                        {/* Products */}
                        {/* ALL PRODUCTS */}
                        <Route
                          path="/products/all-products"
                          element={<All_Products />}
                        />
                        {/* CREATE PRODUCTS */}
                        <Route
                          path="/products/create-product"
                          element={<Create_Products />}
                        />
                        {/* PRODUCTS REVIEWS */}
                        <Route
                          path="/products/product-reviews"
                          element={<Product_Reviews />}
                        />

                        {/* ORDERS */}
                        <Route path="/orders" element={<Orders />} />
                        {/* ORDERS DETAILS */}
                        <Route
                          path="/order-details"
                          element={<Orders_Details />}
                        />
                        {/* CREATE ORDERS */}
                        <Route
                          path="/create-order"
                          element={<Create_Order />}
                        />
                        {/* CUSTOMERS */}
                        <Route path="/customers" element={<Customers />} />
                        {/* CUSTOMER DETAILS */}
                        <Route
                          path="/customer-details"
                          element={<Customer_Details />}
                        />
                        {/* COUPON CODES */}
                        <Route
                          path="/coupon-codes"
                          element={<Coupon_Codes />}
                        />
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
                        <Route
                          path="/store-settings"
                          element={<Store_Settings />}
                        />

                        {/* APPLICATION SETTINGS */}
                        <Route
                          path="/application-settings"
                          element={<Application_Setting />}
                        />

                        {/* CHECKOUT SETTINGS */}
                        <Route
                          path="/checkout-settings"
                          element={<Checkout_Settings />}
                        />

                        {/* GENERAL SETTINGS */}
                        <Route
                          path="/general-settings"
                          element={<General_Settings />}
                        />

                        {/* GENERAL SETTINGS */}
                        <Route
                          path="/payment-methods"
                          element={<Payment_Methods />}
                        />

                        {/* ORDERS SETTINGS */}
                        <Route
                          path="/order-settings"
                          element={<Order_Settings />}
                        />

                        {/* PAGES */}
                        <Route path="/pages" element={<Pages />} />

                        {/* Plans & Subscriptions */}
                        <Route
                          path="/plans-subscriptions"
                          element={<Plans_Subscriptions />}
                        />

                        {/* WEBSITE SETTINGS */}
                        <Route
                          path="/website-settings"
                          element={<Website_Settings />}
                        />

                        {/* Profile */}
                        <Route path="/profile" element={<Profile />} />

                        {/* EMPTY */}
                        <Route path="/empty" element={<Empty />} />
                      </Routes>
                    </div>
                    {/* FOOTER */}
                    <Footer />
                  </div>
                </section>
              </main>
            </div>
          </>
        )}
        {/* SMALL SCREEN SIDEBAR WHEN CLICK ON MENU BTN */}
        {isOpenPopupModal.small_Screen_Sidebar && (
          <>
            <Small_Screen_SideBar />
          </>
        )}

        {/* DEACTIVE ACCOUNT POPUP MODAL IN HEADER MENU PAGE */}
        {isOpenPopupModal.deactiveAccountHeaderMenu && (
          <>
            <Deactive_Account />
          </>
        )}
      </Router>

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

      {/* ADD PAGES AND ADD CUSTOME LINKS POPUP MODAL IN FOOTER SECTION PAGE */}
      {isOpenPopupModal.addPagesAndaddCustomLink && (
        <>
          <Add_Popup_Modal />
        </>
      )}

      {/* CREATE NEW PAGE IN PAGES */}
      {isOpenPopupModal.createNewPage && (
        <>
          <Create_New_Page_Popup_Modal />
        </>
      )}

      {/* START SELECT FILES MODAL IN PROFILE PAGE */}
      {isOpenPopupModal.startSelectFilesAndMedia && (
        <>
          <Start_Select_Files_And_Media_Modal />
        </>
      )}

      {/* ADD MAIN BANNER SECTION 1 IN HOME PAGE */}
      {isOpenPopupModal.addMainBanner && (
        <>
          <Add_Main_Banner_Popup_Modal />
        </>
      )}

      {/* CATEGORY SLIDER - 8 ITEMS SECTION 2  IN HOME PAGE */}
      {isOpenPopupModal.categorySlider8Items && (
        <>
          <Category_Slider_8_Items_Popup_Modal />
        </>
      )}

      {/* Horizontal Banner - Small - 1 Item SECTION 3  IN HOME PAGE */}
      {isOpenPopupModal.horizontal_Banner_Small_1_Item_section_3 && (
        <>
          <Add_Main_Banner_Section_3_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 4] Flash Sale Slider IN SECTION 4   */}
      {isOpenPopupModal.flashSaleSlider && (
        <>
          <Add_Products_Section_4_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 5] Horizontal Banners - 3 Items IN SECTION 5   */}
      {isOpenPopupModal.horizontal_Banners_3_Items && (
        <>
          <Add_Banner_Section_5_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 6] Horizontal Banners - 3 Items IN SECTION 6  */}
      {isOpenPopupModal.category_Slider_02 && (
        <>
          <Add_Category_Section_6_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 7] Popular Products Slider 01 IN SECTION 7  */}
      {isOpenPopupModal.popular_Products_Slider_01 && (
        <>
          <Add_Products_Section_7_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 8] Horizontal Banners - Large - 2 Items IN SECTION 8  */}
      {isOpenPopupModal.horizontal_Banners_Large_2_Items && (
        <>
          <Add_Main_Banner_Section_8_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 9] Popular Products Slider 02 IN SECTION 9  */}
      {isOpenPopupModal.Popular_Products_Slider_02 && (
        <>
          <Add_Products_Section_9_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 10] Horizontal Banners - 2 Items IN SECTION 10  */}
      {isOpenPopupModal.Horizontal_Banners_2_Items && (
        <>
          <Add_Main_Banner_10_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 11] Best Selling Products Slider 01 IN SECTION 11  */}
      {isOpenPopupModal.best_Selling_Products_Slider_01 && (
        <>
          <Add_Product_Section_11_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 12] Vertical Banners - 4 Items IN SECTION 12  */}
      {isOpenPopupModal.vertical_Banners_4_Items && (
        <>
          <Add_Main_Banner_Section_12_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 13] Horizontal Banners - Large - 1 Item IN SECTION 13  */}
      {isOpenPopupModal.horizontal_Banners_Large_1_Item_Section_13 && (
        <>
          <Horizontal_Banners_Large_1_Item_Section_13_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 14] Best Selling Products Slider 02 IN SECTION 14  */}
      {isOpenPopupModal.best_Selling_Products_Slider_02_Section_14 && (
        <>
          <Best_Selling_Products_Slider_02_Section_14_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 15] Horizontal Banners - Small - 1 Item IN SECTION 15  */}
      {isOpenPopupModal.horizontal_Banners_Small_1_Item_Section_15 && (
        <>
          <Horizontal_Banners_Small_1_Item_Section_15 />
        </>
      )}

      {/* [HOME PAGE SECTION 16] Vertical Banners - 4 Items IN SECTION 16  */}
      {isOpenPopupModal.vertical_Banners_4_Items_Section_16 && (
        <>
          <VerticalBanners4Items_Section_16_PopupModal />
        </>
      )}

      {/* [HOME PAGE SECTION 17] Best Selling Products Slider 03 IN SECTION 17  */}
      {isOpenPopupModal.best_Selling_Products_Slider_03_Section_17 && (
        <>
          <Best_Selling_Products_Slider_03_Section_17_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 18] Horizontal Banners - Large - 2 Items IN SECTION 18  */}
      {isOpenPopupModal.horizontal_Banners_Large_2_Items_Section_18 && (
        <>
          <Add_Main_Banner_Section_18_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 19] Horizontal Banners - Large - 1 Items IN SECTION 19  */}
      {isOpenPopupModal.horizontal_Banners_Large_1_Items_Section_19 && (
        <>
          <Add_Main_Banner_Section_19_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 20] Best Selling Products Slider 04 IN SECTION 20  */}
      {isOpenPopupModal.best_Selling_Products_Slider_04_Section_20 && (
        <>
          <Best_Selling_Products_Slider_04_Section_20_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 21] Vertical Banners - 4 Items IN SECTION 21  */}
      {isOpenPopupModal.vertical_Banners_4_Items_Section_21 && (
        <>
          <Add_Main_Banner_Section_21_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 22] Vertical Banners - 4 Items IN SECTION 22  */}
      {isOpenPopupModal.horizontal_Banners_Small_1_Items_Section_22 && (
        <>
          <Add_Main_Banner_Section_22_Popup_Modal />
        </>
      )}

      {/* [HOME PAGE SECTION 23] Testimonials / Reviews Slider IN SECTION 23  */}
      {isOpenPopupModal.testimonials_Reviews_Slider_Section_23 && (
        <>
          <Add_Testimonials_Section_23_Popup_Modal />
        </>
      )}

      {/* <!-- END WRAPPER --> */}
    </div>
  );
}
