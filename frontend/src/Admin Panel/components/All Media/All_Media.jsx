import React from "react";
import Images_All_Media from "./Images_All_Media";
import All_Media_1 from "./All_Media_1";
import All_Media_2 from "./All_Media_2";
import All_Media_3_Footer from "./All_Media_3_Footer";

export default function All_Media() {
  return (
    <>
      {/* START ALL_MEDIA */}
      <div className="container" id="filesView">
        <All_Media_1 />
        <All_Media_2 />

        {/* DISPLAY ALL IMAGES */}
        <Images_All_Media />

        {/* End Display uploaded image */}
        <All_Media_3_Footer />
      </div>
      {/* END ALL_MEDIA */}
    </>
  );
}
