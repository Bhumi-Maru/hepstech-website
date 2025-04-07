import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Website_App from "./Website_App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Website/context/GlobalContext";
import Admin_Panel_App from "./Admin_Panel_App";
import AdminGlobalProvider from "./Admin Panel/context/Admin_Global_Context";
import { AllMediaProvider } from "./Admin Panel/context/All_Media_Context";
import { SubCategoryProvider } from "./Admin Panel/context/SubCategory_Context";
import { ProductProvider } from "./Admin Panel/context/Product_Create_Context";
import { ProductVariantProvider } from "./Admin Panel/context/Product_Variant_Context";
import { HeaderSectionProvider } from "./Admin Panel/context/Header_Section_Context";
import { FooterSectionProvider } from "./Admin Panel/context/Footer_Section_Context";
import { PageProvider } from "./Admin Panel/context/Store_Setting_Page";
import { HeaderProvider } from "./Admin Panel/context/Header_Menu_Context";

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
      <AdminGlobalProvider>
        <AllMediaProvider>
          <SubCategoryProvider>
            <ProductProvider>
              <ProductVariantProvider>
                <HeaderSectionProvider>
                  <FooterSectionProvider>
                    <PageProvider>
                      <HeaderProvider>
                        <Admin_Panel_App />
                      </HeaderProvider>
                    </PageProvider>
                  </FooterSectionProvider>
                </HeaderSectionProvider>
              </ProductVariantProvider>
            </ProductProvider>
          </SubCategoryProvider>
        </AllMediaProvider>
      </AdminGlobalProvider>
    ) : (
      <GlobalProvider>
        <HeaderSectionProvider>
          <FooterSectionProvider>
            <Website_App />
          </FooterSectionProvider>
        </HeaderSectionProvider>
      </GlobalProvider>
    )}
  </React.StrictMode>
);

reportWebVitals();
