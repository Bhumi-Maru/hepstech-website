import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Website_App from "./Website_App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Website/context/GlobalContext";
import Admin_Panel_App from "./Admin_Panel_App";

// Get the root elements
const websiteRoot = document.getElementById("website_root");
const adminRoot = document.getElementById("admin_panel_root");

// Detect the current path
const currentPath = window.location.pathname;

// Prevent React from remounting the entire app after refresh
const root = ReactDOM.createRoot(
  currentPath.startsWith("/admin") ? adminRoot : websiteRoot
);

// Render the correct app based on the URL
root.render(
  <React.StrictMode>
    {currentPath.startsWith("/admin") ? (
      <Admin_Panel_App />
    ) : (
      <GlobalProvider>
        <Website_App />
      </GlobalProvider>
    )}
  </React.StrictMode>
);

reportWebVitals();
