import React from "react";
import Home_Page_Section_1 from "./Main Banner Slider Section 1/Home_Page_Section_1";
import Home_Page_Section__2 from "./Category Slider 8 Items Section 01 Section 2/Home_Page_Section__2";
import Home_Page_Section_3 from "./Horizontal Banner - Small - 1 Item section 3/Home_Page_Section_3";
import Home_Page_Section_4 from "./Flash Sale Slider section 4/Home_Page_Section_4";
import Home_Page_Section_5 from "./Horizontal Banners - 3 Items - Section 5/Home_Page_Section_5";
import Home_Page_Section_6 from "./Category Slider 02 Section 6/Home_Page_Section_6";
import Home_Page_Section_7 from "./Popular Products Slider 01 Section 7/Home_Page_Section_7";
import Home_Page_Section_8 from "./Horizontal Banners - Large - 2 Items Section 8/Home_Page_Section_8";
import Home_Page_Section_9 from "./Popular Products Slider 02 Section 9/Home_Page_Section_9";
import Home_Page_Section_10 from "./Horizontal Banners - 2 Items Section 10/Home_Page_Section_10";
import Home_Page_Section_11 from "./Best Selling Products Slider 01 Section 11/Home_Page_Section_11";
import Home_Page_Section__12 from "./Vertical Banners - 4 Items Section 11/Home_Page_Section__12";
import Home_Page_Section__13 from "./Horizontal Banners - Large - 1 Item Section 13/Home_Page_Section__13";

export default function Home_Page() {
  return (
    <>
      {/* HOME PAGE */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Home Page Setup</h1>

        <div className="mt-4 space-y-4">
          {/* <!-- [HOME PAGE SECTION 1]  MAIN BANNER SLIDER --> */}
          <Home_Page_Section_1 />
          {/* <!-- [HOME PAGE SECTION 2]  CATEGORY SLIDER - 8 ITEMS --> */}
          <Home_Page_Section__2 />
          {/* [HOME PAGE SECTION 3] Horizontal Banner - Small - 1 Item  */}
          <Home_Page_Section_3 />
          {/* [HOME PAGE SECTION 4] Flash Sale Slider  */}
          <Home_Page_Section_4 />
          {/* [HOME PAGE SECTION 5] Horizontal Banners - 3 Items  */}
          <Home_Page_Section_5 />
          {/* [HOME PAGE SECTION 6] Category Slider 02  */}
          <Home_Page_Section_6 />
          {/* [HOME PAGE SECTION 7] Popular Products Slider 01  */}
          <Home_Page_Section_7 />
          {/* [HOME PAGE SECTION 8] Horizontal Banners - Large - 2 Items  */}
          <Home_Page_Section_8 />
          {/* [HOME PAGE SECTION 9] Popular Products Slider 02  */}
          <Home_Page_Section_9 />
          {/* [HOME PAGE SECTION 10] Horizontal Banners - 2 Items  */}
          <Home_Page_Section_10 />
          {/* [HOME PAGE SECTION 11] Best Selling Products Slider 01  */}
          <Home_Page_Section_11 />
          {/* [HOME PAGE SECTION 11]  Selling Products Slider 01  */}
          <Home_Page_Section__12 />
          {/* [HOME PAGE SECTION 13] Horizontal Banners - Large - 1 Item  */}
          <Home_Page_Section__13 />
        </div>
      </div>
    </>
  );
}
