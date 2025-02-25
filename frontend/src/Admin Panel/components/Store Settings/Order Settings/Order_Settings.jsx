import React from "react";
import Order_Settings_1 from "./Order_Settings_1";
import Order_Settings__2 from "./Order_Settings__2";
import Order_Settings_3 from "./Order_Settings_3";

export default function Order_Settings() {
  return (
    <>
      {/* Order Settings page */}
      <div class="container">
        <Order_Settings_1 />
        <div class="mt-4 space-y-6">
          <Order_Settings__2 />
          <Order_Settings_3 />
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
