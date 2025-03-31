import React from "react";

export default function Header_Section_Offer() {
  return (
    <>
      {/* HEADER SECTION 1 OFFER */}
      <div className="mt-4 space-y-4">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 pb-5 pt-4 sm:px-5">
            <div className="flow-root mt-2">
              <ul className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center justify-between py-4">
                  <label for="contactLink">Header Offer</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="offerlink"
                      name="offerlink"
                      role="checkbox"
                      value=""
                      onchange="layoutacdc('hloffer','offerlink')"
                      tabindex="0"
                    />
                    <label for="offerlink"></label>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="hidden mt-4"
              id="headeroffer"
              style={{ display: "block" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-x-5 gap-y-4">
                <div>
                  <label for="">Add Offer Text</label>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      name="offercontent"
                      id="offercontent"
                      placeholder=""
                      rows="2"
                      className="resize-none"
                    >
                      {" "}
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
