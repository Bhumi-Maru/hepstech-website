import React from "react";

export default function Checkout_Settings_2() {
  return (
    <>
      {/* CHECKOUT SETTINGS FIRST DIV */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Customer Accounts
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose if you want to prompt your customer to create an account
              when they check out.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="max-w-lg space-y-3">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    id=""
                    name="customerAccount"
                    className=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="" className="font-medium text-gray-700">
                    Accounts are disabled
                  </label>
                  <p className="text-gray-500">
                    Customers will only be able to check out as guests.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="radio"
                      id=""
                      name="customerAccount"
                      className=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="candidates"
                      className="font-medium text-gray-700"
                    >
                      Accounts are optional
                    </label>
                    <p className="text-gray-500">
                      Customers will be able to check out with a customer
                      account or as a guest.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="radio"
                      id=""
                      name="customerAccount"
                      className=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="offers" className="font-medium text-gray-700">
                      Accounts are required
                    </label>
                    <p className="text-gray-500">
                      Customers will only be able to check out if they have a
                      customer account.
                    </p>
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
