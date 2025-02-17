import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Website_App from "./Website_App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Website/context/GlobalContext";
import Admin_Panel_App from "./Admin_Panel_App";

const currentPath = window.location.pathname;

if (currentPath.startsWith("/admin")) {
  const admin_panel_root = ReactDOM.createRoot(
    document.getElementById("admin_panel_root")
  );
  admin_panel_root.render(
    <React.StrictMode>
      <Admin_Panel_App />
    </React.StrictMode>
  );
} else {
  const website_root = ReactDOM.createRoot(
    document.getElementById("website_root")
  );
  website_root.render(
    <React.StrictMode>
      <GlobalProvider>
        <Website_App />
      </GlobalProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
