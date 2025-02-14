import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebsiteApp from "./WebsiteApp";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Website/context/GlobalContext";
import Admin_Panel_App from "./Admin_Panel_App";

// WEBSITE ROOT
const website_root = ReactDOM.createRoot(
  document.getElementById("website_root")
);
website_root.render(
  <React.StrictMode>
    {/* WEBSITE PROVIDER */}
    <GlobalProvider>
      <WebsiteApp />
    </GlobalProvider>
  </React.StrictMode>
);

// ADMIN PANEL ROOT
const admin_panel_root = ReactDOM.createRoot(
  document.getElementById("admin_panel_root")
);
admin_panel_root.render(
  <React.StrictMode>
    {/* ADMIN PANEL PROVIDER */}
    <Admin_Panel_App />
  </React.StrictMode>
);

reportWebVitals();
