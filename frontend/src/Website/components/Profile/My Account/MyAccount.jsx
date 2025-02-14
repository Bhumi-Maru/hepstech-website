import React from "react";
import MyAccount_1 from "./MyAccount_1";
import Profile_Sidebar from "../Profile_Sidebar";
import { Route, Routes } from "react-router-dom";

export default function MyAccount() {
  return (
    <>
      <div className="relative grid items-start grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
        {/* PROFILE SIDEBAR*/}
        <Profile_Sidebar />

        {/* MAIN CONTENT AREA */}
        {/* Display MyAccount_1  */}
        <MyAccount_1 />
      </div>
    </>
  );
}
