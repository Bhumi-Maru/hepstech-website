import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for nested routing
import MyOrders_1 from "./MyOrders_1";
import Profile_Sidebar from "../Profile_Sidebar";
import OrderDetails from "./OrderDetails";

export default function MyOrders() {
  return (
    <div className="relative grid items-start grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
      {/* PROFILE SIDEBAR: Always present */}

      {/* MAIN CONTENT AREA */}
      {/* Display MyOrders_1 for the /my-orders route */}
      <Routes>
        <Profile_Sidebar />
        <Route path="/" element={<MyOrders_1 />} />
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes>
    </div>
  );
}
