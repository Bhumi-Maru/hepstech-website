import React from "react";
import Home_Page_Section_1 from "./Main Banner Slider Section 1/Home_Page_Section_1";
import Home_Page_Section__2 from "./Category Slider 8 Items Section 01 Section 2/Home_Page_Section__2";

export default function Home_Page() {
  return (
    <>
      {/* HOME PAGE */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Home Page Setup</h1>

        <div className="mt-4 space-y-4">
          {/* <!-- HOME PAGE SECTION 1  MAIN BANNER SLIDER --> */}
          <Home_Page_Section_1 />
          {/* <!-- HOME PAGE SECTION 2  CATEGORY SLIDER - 8 ITEMS --> */}
          <Home_Page_Section__2 />
        </div>
      </div>
    </>
  );
}
