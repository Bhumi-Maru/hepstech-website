import React from "react";
import Home_Page_Section_1 from "./Main Banner Slider Section 1/Home_Page_Section_1";
import Home_Page_Section__2 from "./Category Slider 8 Items Section 01 Section 2/Home_Page_Section__2";
import Home_Page_Section_3 from "./Horizontal Banner - Small - 1 Item section 3/Home_Page_Section_3";
import Home_Page_Section_4 from "./Flash Sale Slider section 4/Home_Page_Section_4";

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
        </div>
      </div>
    </>
  );
}
