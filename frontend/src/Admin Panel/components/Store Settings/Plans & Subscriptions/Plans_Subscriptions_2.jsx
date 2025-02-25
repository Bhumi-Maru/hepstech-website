import React from "react";

export default function Plans_Subscriptions_2() {
  return (
    <>
      {/* PLANS AND SUBSCRIPTION SECTION [Plan Details] */}

      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Plan Details
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Manage your Shopify subscription and view the details of your
              plan.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="flow-root">
              <div className="-my-8 divide-y divide-gray-200">
                <div className="py-8">
                  <p className="text-sm text-gray-500">Current Plan</p>

                  <div className="flex items-center justify-between mt-2">
                    <p className="font-medium">
                      You're currently on
                      <span className="font-bold">Trial</span> plan.
                    </p>

                    <p className="text-sm font-medium text-red-600">
                      365 days left
                    </p>
                  </div>

                  <div className="relative mt-2">
                    <div className="flex h-3 overflow-hidden text-xs bg-gray-200 rounded-full">
                      <div
                        className="flex flex-col justify-center text-center text-white shadow-none bg-skin-primary whitespace-nowrap"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 mt-8 sm:grid-cols-3 gap-x-8 gap-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Renewal Date</p>
                      <p className="mt-1 font-medium">12/05/2021</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Renewal Charge</p>
                      <p className="mt-1 font-medium">3,000</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Version Type</p>
                      <p className="mt-1 font-medium">Premium</p>
                    </div>
                  </div>
                </div>

                <div className="py-8">
                  <p className="text-sm text-gray-500">Member Since</p>

                  <p className="mt-2 font-medium">12/01/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
