import React from "react";
import Pages_1 from "./Pages_1";
import Pages_2 from "./Pages_2";
import Pages_3 from "./Pages_3";
import Pages_4 from "./Pages_4";

export default function Pages() {
  return (
    <>
      {/* PAGES */}

      <div class="container">
        <Pages_1 />
        <Pages_2 />
        <div class="mt-4 space-y-6">
          <Pages_3 />
          <Pages_4 />
        </div>
      </div>
    </>
  );
}
