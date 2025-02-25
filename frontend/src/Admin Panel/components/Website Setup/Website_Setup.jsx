import React from "react";
import { Route, Routes } from "react-router-dom";
import Header_Section from "./Header_Section/Header_Section";
import Header_Menu from "./Header Menu/Header_Menu";
import Home_Page from "./Home Page/Home_Page";
import Footer_Section from "./Footer Section/Footer_Section";

export default function Website_Setup() {
  return (
    <>
      <Routes>
        <Route path="header-section" element={<Header_Section />} />
        <Route path="header-menu" element={<Header_Menu />} />
        <Route path="home-page" element={<Home_Page />} />
        <Route path="footer-section" element={<Footer_Section />} />
      </Routes>
    </>
  );
}
