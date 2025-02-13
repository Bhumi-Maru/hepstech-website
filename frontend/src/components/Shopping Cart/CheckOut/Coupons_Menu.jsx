import React from "react";

export default function Coupons_Menu({
  setIsCouponMenuOpen,
  isCouponMenuOpen,
}) {
  console.log("isCouponMenuOpen checkout", isCouponMenuOpen);
  return (
    <>
      {/* <!-- START COUPONS MENU --> */}
      <aside
        class="max-w-md drawer drawer-right"
        id="couponsMenu"
        aria-hidden={!isCouponMenuOpen}
        tabindex="-1"
      >
        <div class="px-4 py-5 sm:px-6 drawer-header">
          <h5 class="mr-12 text-lg font-bold truncate">Coupon Codes</h5>

          {/* <!-- close button --> */}
          <button
            type="button"
            class="btn-close"
            data-dismiss="drawer"
            aria-label="Close"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="px-4 py-5 sm:p-6 drawer-body">
          <form action="#">
            <div class="flex items-center space-x-4">
              <div class="flex-1">
                <label for=""></label>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Coupon Code"
                    class=""
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          <p class="mt-6 font-medium">Available Coupon Codes</p>

          <div class="mt-3 space-y-4">
            <div class="coupon">
              <div class="left-part">
                <div>
                  <p class="font-medium leading-tight line-clamp-3">
                    Get flat INR 30/- cashback using Amazong Pay
                  </p>
                  <p class="mt-2 text-sm text-gray-700">
                    Minimum Order: <span class="font-semibold">$1,000</span>
                  </p>
                  <p class="mt-1 text-sm text-gray-700">
                    Expires on: <span class="font-semibold">10 Feb 2020</span>
                  </p>
                </div>
              </div>
              <div class="right-part">
                <div>
                  <p class="text-sm font-medium text-gray-600 text-skin-primary-ligt">
                    Coupon Code
                  </p>
                  <p class="mt-2 mb-3 text-xl font-medium tracking-wide uppercase">
                    M3D1C4lC
                  </p>
                  <a
                    href="#"
                    title=""
                    class="btn btn-sm btn-primary-outline"
                    role="button"
                  >
                    Apply Code
                  </a>
                </div>
              </div>
            </div>

            <div class="coupon">
              <div class="left-part">
                <div>
                  <p class="font-medium leading-tight line-clamp-3">
                    Get flat INR 30/- cashback using Amazong Pay
                  </p>
                  <p class="mt-2 text-sm text-gray-700">
                    Minimum Order: <span class="font-semibold">$1,000</span>
                  </p>
                  <p class="mt-1 text-sm text-gray-700">
                    Expires on: <span class="font-semibold">10 Feb 2020</span>
                  </p>
                </div>
              </div>
              <div class="right-part">
                <div>
                  <p class="text-sm font-medium text-gray-600 text-skin-primary-ligt">
                    Coupon Code
                  </p>
                  <p class="mt-2 mb-3 text-xl font-medium tracking-wide uppercase">
                    M3D1C4lC
                  </p>
                  <a
                    href="#"
                    title=""
                    class="btn btn-sm btn-primary-outline"
                    role="button"
                  >
                    Apply Code
                  </a>
                </div>
              </div>
            </div>

            <div class="coupon">
              <div class="left-part">
                <div>
                  <p class="font-medium leading-tight line-clamp-3">
                    Get flat INR 30/- cashback using Amazong Pay
                  </p>
                  <p class="mt-2 text-sm text-gray-700">
                    Minimum Order: <span class="font-semibold">$1,000</span>
                  </p>
                  <p class="mt-1 text-sm text-gray-700">
                    Expires on: <span class="font-semibold">10 Feb 2020</span>
                  </p>
                </div>
              </div>
              <div class="right-part">
                <div>
                  <p class="text-sm font-medium text-gray-600 text-skin-primary-ligt">
                    Coupon Code
                  </p>
                  <p class="mt-2 mb-3 text-xl font-medium tracking-wide uppercase">
                    M3D1C4lC
                  </p>
                  <a
                    href="#"
                    title=""
                    class="btn btn-sm btn-primary-outline"
                    role="button"
                  >
                    Apply Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* <!-- END COUPONS MENU --> */}
      <div class="drawer-overlay show" tabindex="-1"></div>
    </>
  );
}
