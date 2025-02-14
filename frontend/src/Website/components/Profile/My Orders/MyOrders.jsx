import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for nested routing
import MyOrders_1 from "./MyOrders_1";
import Profile_Sidebar from "../Profile_Sidebar";
import Cancel_Order_Modal from "./Cancel_Order_Modal";

export default function MyOrders({
  isCancelOrderModalOpen,
  setIsCancelOrderModalOpen,
}) {
  return (
    <div className="relative grid items-start grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
      {/* PROFILE SIDEBAR: Always present */}
      <Profile_Sidebar />

      {/* MAIN CONTENT AREA */}
      {/* Display MyOrders_1 for the /my-orders route */}
      <Routes>
        <Route path="/" element={<MyOrders_1 />} />
      </Routes>
      {isCancelOrderModalOpen && (
        <>
          <Cancel_Order_Modal
            setIsCancelOrderModalOpen={setIsCancelOrderModalOpen}
          />
        </>
      )}
    </div>
  );
}
