import React from "react";
import Application_Setting_1 from "./Application_Setting_1";
import Application_Setting_2 from "./Application_Setting_2";
import Application_Setting_3 from "./Application_Setting_3";

export default function Application_Setting() {
  return (
    <>
      <div className="container">
        <Application_Setting_1 />
        <div class="mt-4 space-y-6">
          <Application_Setting_2 />
          <Application_Setting_3 />
        </div>
      </div>
    </>
  );
}
