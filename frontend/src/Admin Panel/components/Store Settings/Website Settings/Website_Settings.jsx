import React from "react";
import Website_Settings_1 from "./Website_Settings_1";
import Website_Settings_2 from "./Website_Settings_2";
import Website_Settings_3 from "./Website_Settings_3";
import Website_Settings_4 from "./Website_Settings_4";
import Website_Settings_5 from "./Website_Settings_5";

export default function Website_Settings() {
  return (
    <>
      {/* WEBSITE SETTING PAGES */}
      <div className="container">
        {/* HEADING SECTION */}
        <Website_Settings_1 />
        <div className="mt-4 space-y-6">
          {/* OFFER BANEER */}
          <Website_Settings_2 />
          {/* HEADER */}
          <Website_Settings_3 />
          {/* WEBSITE */}
          <Website_Settings_4 />
          {/* FOOTER */}
          <Website_Settings_5 />
          {/* SAVE AND DISCARD BTN */}
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
