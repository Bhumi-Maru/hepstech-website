import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Admin Panel/Sidebar/Sidebar";
import Navbar from "./Admin Panel/Navbar/Navbar";
import Dashboard from "./Admin Panel/Dashboard/Dashboard";
import Footer from "./Admin Panel/Footer/Footer";
import All_Media from "./Admin Panel/All Media/All_Media";
import MainCategories from "./Admin Panel/Categories/Main Categories/MainCategories";

export default function Admin_Panel_App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gray-50 selection:bg-skin-primary selection:text-white">
      {/* ------------------------------------------------------------ */}
      {/* <!-- START WRAPPER --> */}
      <div class="flex h-screen overflow-hidden">
        <BrowserRouter>
          {/* ------------------------------------------------------------ */}
          {/* START SIDEBAR */}
          <Sidebar />
          {/* END SIDEBAR */}
          {/* ------------------------------------------------------------ */}
          <main className="flex flex-col flex-1 w-0 bg-gray-50">
            {/* ------------------------------------------------------------ */}
            {/* START NAVBAR */}
            <Navbar />
            {/* END NAVBAR */}
            {/* ------------------------------------------------------------ */}
            {/* START ROUTES */}
            <section className="relative flex-1 overflow-x-hidden overflow-y-auto focus:outline-none">
              <div className="flex flex-col justify-between h-full">
                <div className="flex-1 py-6">
                  <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/all-media" element={<All_Media />} />
                    <Route
                      path="/categories/main-categories"
                      element={<MainCategories />}
                    />
                  </Routes>
                </div>

                {/* ------------------------------------------------------------ */}
                {/* START FOOTER */}
                <Footer />
                {/* END FOOTER */}
                {/* ------------------------------------------------------------ */}
              </div>
            </section>
            {/* END ROUTES */}
            {/* ------------------------------------------------------------ */}
          </main>
        </BrowserRouter>
      </div>
      {/* <!-- END WRAPPER --> */}
    </div>
  );
}
