import React from "react";
import Plans_Subscriptions_2 from "./Plans_Subscriptions_2";
import Plans_Subscriptions_1 from "./Plans_Subscriptions_1";

export default function Plans_Subscriptions() {
  return (
    <>
      {/* Plans & Subscriptions page  */}
      <div className="container">
        <Plans_Subscriptions_1 />
        <div class="mt-4 space-y-6">
          <Plans_Subscriptions_2 />
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
