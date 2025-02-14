import React from "react";
import A_1 from "./Admin Panel/A_1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Admin_Panel_App() {
  return (
    <div>
      <h1>Admin_Panel_App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<A_1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
