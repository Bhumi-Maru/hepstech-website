import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Admin Panel/Sidebar/Sidebar";
import Navbar from "./Admin Panel/Navbar/Navbar";
import Dashboard from "./Admin Panel/Dashboard/Dashboard";
import Footer from "./Admin Panel/Footer/Footer";
import All_Media from "./Admin Panel/All Media/All_Media";
import MainCategories from "./Admin Panel/Categories/Main Categories/MainCategories";
import SubCategories from "./Admin Panel/Categories/Sub Categories/SubCategories";
import Orders from "./Admin Panel/Orders/Orders";
import Customers from "./Admin Panel/Customers/Customers";
import Coupon_Codes from "./Admin Panel/Coupon Codes/Coupon_Codes";
import Shipping from "./Admin Panel/Shipping/Shipping";
import Time_Slots from "./Admin Panel/Time Slots/Time_Slots";
import Store_Settings from "./Admin Panel/Store Settings/Store_Settings";
import Website_Setup from "./Admin Panel/Website Setup/Website_Setup";

export default function Admin_Panel_App() {
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
                    {/* CUSTOMERS */}
                    <Route path="/customers" element={<Customers />} />
                    {/* COUPON CODES */}
                    <Route path="/coupon-codes" element={<Coupon_Codes />} />
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
      {/* <!-- END WRAPPER --> */}
    </div>
  );
}
