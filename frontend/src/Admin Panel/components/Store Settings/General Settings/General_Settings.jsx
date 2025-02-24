import React from "react";
import General_Settings_1 from "./General_Settings_1";
import General_Settings_2 from "./General_Settings_2";
import General_Settings_3 from "./General_Settings_3";
import General_Settings_4 from "./General_Settings_4";
import General_Settings_5 from "./General_Settings_5";

export default function General_Settings() {
  return (
    <>
      {/* General Settings */}
      <div class="container">
        <General_Settings_1 />
        <div class="mt-4 space-y-6">
          <General_Settings_2 />
          <General_Settings_3 />
          <General_Settings_4 />
          <General_Settings_5 />
          <div className="flex items-center justify-end space-x-4">
            <button type="button" className="btn btn-dark-light">
              Discard
            </button>

            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
