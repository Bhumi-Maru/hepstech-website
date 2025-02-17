import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Admin Panel/Sidebar/Sidebar";

export default function Admin_Panel_App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gray-50 selection:bg-skin-primary selection:text-white">
      {/* <!-- START WRAPPER --> */}
      <div class="flex h-screen overflow-hidden">
        <BrowserRouter>
          <Sidebar />
          <main className="flex flex-col flex-1 w-0 bg-gray-50"></main>
        </BrowserRouter>
      </div>
      {/* <!-- END WRAPPER --> */}
    </div>
  );
}
