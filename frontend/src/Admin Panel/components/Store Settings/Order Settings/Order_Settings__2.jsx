import React from "react";

export default function Order_Settings__2() {
  return (
    <>
      {/* ORDER SETTINGS SECTION 1 [Store Details] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Store Details
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Shopify and your customers will use this information to contact
              you.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Minimum Order Amount </label>
                  <div className="relative mt-1 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
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
                  <label for=""> Maximum Order Amount </label>
                  <div className="relative mt-1 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
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

                <div className="col-span-2 sm:col-span-1">
                  <label for="">COD Free - Min. Order Amount</label>
                  <div className="relative mt-1 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
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

                <div className="col-span-2 sm:col-span-1">
                  <label for=""> COD Extra Charge </label>
                  <div className="relative mt-1 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
