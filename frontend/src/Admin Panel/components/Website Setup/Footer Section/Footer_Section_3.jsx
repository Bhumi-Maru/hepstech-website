import React from "react";

export default function Footer_Section_3() {
  return (
    <>
      {/* FOOTER SECTION 3 [CONTACT DETAILS] */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Contact Details</h3>
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
            <div className="sm:col-span-2 xl:col-span-3">
              <label for=""> Address </label>
              <div className="mt-1">
                <textarea
                  name=""
                  id=""
                  placeholder=""
                  rows="2"
                  className="resize-y"
                ></textarea>
              </div>
            </div>

            <div>
              <label for=""> Phone Number </label>
              <div className="mt-1">
                <input type="tel" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <div>
              <label for=""> Email Address </label>
              <div className="mt-1">
                <input type="email" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <div>
              <label for=""> Timings </label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
