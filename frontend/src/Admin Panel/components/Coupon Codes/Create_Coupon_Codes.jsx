import React from "react";
import { Link } from "react-router-dom";

export default function Create_Coupon_Codes() {
  return (
    <>
      {/* START CREATE COUPON CODES */}
      <div className="container">
        <div className="sm:flex sm:items-center sm:space-x-3">
          <nav aria-label="Back">
            <Link
              to="/coupon-codes"
              title="Back to Coupon Codes"
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 mr-1 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              <span className="block sm:hidden"> Back </span>
            </Link>
          </nav>

          {/* <!-- PAGE TITLE --> */}
          <h1 className="mt-3 heading-1 sm:mt-0">Create Coupon Code</h1>
        </div>

        <form
          className="w-full mt-5 xl:max-w-xl xl:mx-auto"
          id="createCouponForm"
          method="get"
          action=""
        >
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <div className="col-span-2 md:col-span-1">
              <label for=""> Coupon Code </label>
              <div className="mt-1 form-input">
                <input
                  type="text"
                  name="couponCode"
                  id="couponCode"
                  placeholder=""
                  className=""
                  required
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label for=""> No. of Users </label>
              <div className="mt-1 form-input">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder=""
                  className=""
                />
              </div>
            </div>

            <div>
              <label for=""> Start Date </label>
              <div className="relative mt-1 rounded-md form-input">
                <input
                  type="text"
                  name="couponStartDate"
                  id="couponStartDate"
                  placeholder=""
                  className="pr-10"
                  readonly
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label for=""> End Date </label>
              <div className="relative mt-1 rounded-md form-input">
                <input
                  type="text"
                  name=""
                  id="couponEndDate"
                  placeholder=""
                  className="pr-10"
                  readonly
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label for=""> Discount </label>
              <div className="mt-1 form-input">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder=""
                  className=""
                />
              </div>
            </div>

            <div>
              <label for=""> Discount Type </label>
              <div className="mt-1 form-input">
                <select name="" id="" className="">
                  <option value="">Flat</option>

                  <option value="">Percentage</option>
                </select>
              </div>
            </div>

            <div>
              <label for=""> Minimum Order Amount </label>
              <div className="relative mt-1 rounded-md form-input">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm"> ₹ </span>
                </div>
                <input
                  type="number"
                  name=""
                  id=""
                  className="!pl-7"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label for=""> Repeat Usage </label>
              <div className="mt-1 form-input">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder=""
                  className=""
                />
              </div>
            </div>

            <div className="col-span-2">
              <label for=""> Message </label>
              <div className="mt-1 form-input">
                <textarea
                  name=""
                  id=""
                  placeholder=""
                  className=""
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="col-span-2">
              <hr className="mt-3 mb-5 border-gray-200" />

              <div className="flex items-center justify-end space-x-4">
                <button type="button" className="btn btn-dark-light">
                  Discard
                </button>

                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* END CREATE COUPON CODES */}
    </>
  );
}
