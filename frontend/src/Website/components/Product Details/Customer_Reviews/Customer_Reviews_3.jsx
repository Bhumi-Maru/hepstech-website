import React from "react";

export default function Customer_Reviews_3() {
  return (
    <>
      {/* Customer_Reviews_3 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold">23 comments</h3>

        <div className="flex items-center max-w-xs mt-2 space-x-2 sm:mt-0">
          <label for="" className="flex-none">
            {" "}
            Sort by:{" "}
          </label>
          <select name="" id="">
            <option value="">Most Recent</option>
          </select>
        </div>
      </div>
    </>
  );
}
