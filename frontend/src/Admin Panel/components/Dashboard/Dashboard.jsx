import React from "react";
import Dashboard_1 from "./Dashboard_1";
import Dashboard_2 from "./Dashboard_2";

export default function Dashboard() {
  return (
    <>
      {/* START DASHBOARD */}

      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Dashboard</h1>

        <div className="mt-5 space-y-8">
          {/* START DASHBOARD SUB SECTION 1 */}
          <Dashboard_1 />
          {/* END DASHBOARD SUB SECTION 1  */}

          {/* START DASHBOARD SUB SECTION 2 */}
          <Dashboard_2 />
          {/* END DASHBOARD SUB SECTION 2 */}
        </div>
      </div>

      {/* END DASHBOARD */}
    </>
  );
}
