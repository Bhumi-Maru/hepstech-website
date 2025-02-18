import React from "react";

export default function Header_Section_1() {
  return (
    <>
      {/* START HEADER SECTION PART 1 */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Header Section</h1>

        <div className="mt-4 space-y-4">
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <h3 className="text-base font-medium">Header Logo</h3>
              <p className="mt-1 text-sm text-gray-600">
                (If your header has a dark background, try to upload a logo
                which looks proper on dark backgrounds.)
              </p>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <div className="inline-block p-6 overflow-hidden border border-gray-200 rounded-md">
                <img
                  className="w-auto h-16"
                  src="../admin_assets/images/logo.png"
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="flex items-center mt-3 space-x-4">
                <button type="button" className="btn btn-primary">
                  Select Files
                </button>

                <button type="button" className="btn btn-error-light">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <h3 className="text-base font-medium">Header Settings</h3>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <p className="text-sm text-gray-500">Select Header Type</p>

              <div className="mt-4 space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="headerType"
                    id="stickyHeader"
                    className=""
                  />
                  <label
                    for="stickyHeader"
                    className="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Sticky
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    name="headerType"
                    id="nonStickyHeader"
                    className=""
                  />
                  <label
                    for="nonStickyHeader"
                    className="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Non-sticky
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    name="headerType"
                    id="smartStickyHeader"
                    className=""
                  />
                  <label
                    for="smartStickyHeader"
                    className="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Smart Sticky
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <h3 className="text-base font-medium">Link Options</h3>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <div className="flow-root mt-2">
                <ul className="-my-4 divide-y divide-gray-200">
                  <li className="flex items-center justify-between py-4">
                    <label for="offersLink"> Offers </label>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        id="offersLink"
                        name="offersLink"
                        role="checkbox"
                        value=""
                        tabindex="0"
                      />
                      <label for="offersLink"></label>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4">
                    <label for="wishlistLink"> Wishlist </label>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        id="wishlistLink"
                        name="wishlistLink"
                        role="checkbox"
                        value=""
                        tabindex="0"
                      />
                      <label for="wishlistLink"></label>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4">
                    <label for="contactLink"> Contact </label>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        id="contactLink"
                        name="contactLink"
                        role="checkbox"
                        value=""
                        tabindex="0"
                      />
                      <label for="contactLink"></label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="hidden mt-4" id="contactLinkContent">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
                  <div>
                    <label for=""> Phone Number </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for=""> WhatsApp Number </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label for=""> Email Address </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder=""
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 sm:px-5">
              <h3 className="text-base font-medium">Offer Banner</h3>
            </div>

            <div className="px-4 pb-5 sm:px-5">
              <div className="flex items-center justify-between mt-2">
                <label for="offerBanner"> Display Offer Banner </label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="offerBanner"
                    name="offerBanner"
                    role="checkbox"
                    value=""
                    tabindex="0"
                  />
                  <label for="offerBanner"></label>
                </div>
              </div>

              <div className="hidden mt-4" id="offerBannerContent">
                <div>
                  <label for=""> Enter Offer Title </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />
        <div className="flex items-center justify-end space-x-4">
          <button type="button" className="btn btn-dark-light">
            Discard
          </button>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
      {/* END HEADER SECTION PART 1 */}
    </>
  );
}
