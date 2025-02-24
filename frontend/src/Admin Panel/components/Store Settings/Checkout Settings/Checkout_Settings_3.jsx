import React from "react";

export default function Checkout_Settings_3() {
  return (
    <>
      {/* CHECKOUT SETTINGS SECOND DIV */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Customer Contact
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose which contact methods your customers can use to check out
              and receive updates.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="flow-root">
              <div className="-my-8 divide-y divide-gray-200">
                <div className="py-8">
                  <p className="text-sm text-gray-500">To check out</p>
                  <div className="max-w-lg mt-4 space-y-3">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="radio"
                          id=""
                          name="toCheckout"
                          className=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-medium text-gray-700"
                        >
                          Customers can check out using either their phone
                          number or email
                        </label>
                        <p className="text-gray-500">
                          Customers who choose to check out using their phone
                          number will get order updates by SMS. This means that
                          their email may not be collected during checkout.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="radio"
                            id=""
                            name="toCheckout"
                            className=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="candidates"
                            className="font-medium text-gray-700"
                          >
                            Customers can only check out using email
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-8">
                  <p className="text-sm text-gray-500">
                    To receive shipping updates
                  </p>
                  <div className="max-w-lg mt-4 space-y-3">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input type="checkbox" id="" name="" className="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-medium text-gray-700"
                        >
                          Customers can choose to add a phone number or email to
                          receive shipping updates after they complete their
                          order
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input type="checkbox" id="" name="" className="" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="candidates"
                            className="font-medium text-gray-700"
                          >
                            Customers can download the Shop App from their order
                            status page
                          </label>
                        </div>
                      </div>
                    </div>
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
