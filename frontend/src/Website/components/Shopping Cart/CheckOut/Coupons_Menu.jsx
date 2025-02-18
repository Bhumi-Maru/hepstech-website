import React from "react";

export default function Coupons_Menu({
  setIsCouponMenuOpen,
  isCouponMenuOpen,
}) {
  return (
    <>
      {/* <!-- START COUPONS MENU --> */}
      <div className="drawer-overlay show" tabindex="-1"></div>
      <aside
        className={`max-w-md drawer drawer-right ${
          isCouponMenuOpen ? "active" : ""
        }`}
        id="couponsMenu"
        aria-hidden={!isCouponMenuOpen}
        tabindex="-1"
        style={{
          transform: isCouponMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="px-4 py-5 sm:px-6 drawer-header">
          <h5 className="mr-12 text-lg font-bold truncate">Coupon Codes</h5>

          {/* <!-- close button --> */}
          <button
            type="button"
            className="btn-close"
            data-dismiss="drawer"
            aria-label="Close"
            onClick={() => setIsCouponMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
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

        <div className="px-4 py-5 sm:p-6 drawer-body">
          <form action="#">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label for=""></label>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Coupon Code"
                    className=""
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          <p className="mt-6 font-medium">Available Coupon Codes</p>

          <div className="mt-3 space-y-4">
            {/* Coupon Item Example */}
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="coupon">
                  <div className="left-part">
                    <div>
                      <p className="font-medium leading-tight line-clamp-3">
                        Get flat INR 30/- cashback using Amazon Pay
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        Minimum Order:{" "}
                        <span className="font-semibold">$1,000</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        Expires on:{" "}
                        <span className="font-semibold">10 Feb 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div>
                      <p className="text-sm font-medium text-gray-600 text-skin-primary-light">
                        Coupon Code
                      </p>
                      <p className="mt-2 mb-3 text-xl font-medium tracking-wide uppercase">
                        M3D1C4lC
                      </p>
                      <a
                        href="#"
                        title=""
                        className="btn btn-sm btn-primary-outline"
                        role="button"
                      >
                        Apply Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>
      {/* <!-- END COUPONS MENU --> */}
    </>
  );
}
