import React from "react";

export default function Checkout_Settings_4() {
  return (
    <>
      {/* CHECKOUT SETTINGS THIRD DIV */}

      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Form Options
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose whether your checkout form requires extra information from
              your customer.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <p className="text-sm text-gray-500">Full name</p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input type="radio" id="" name="fullName" className="" />
                      <label for="" className="ml-3">
                        Require last name only
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input type="radio" id="" name="fullName" className="" />
                      <label for="" className="ml-3">
                        Require first and last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <p className="text-sm text-gray-500">Company name</p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="companyName"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Hidden{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="companyName"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Optional{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="companyName"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Required{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <p className="text-sm text-gray-500">
                    Address line 2 (apartment, unit, etc.)
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="addressLine"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Hidden{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="addressLine"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Optional{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="addressLine"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Required{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <p className="text-sm text-gray-500">
                    Shipping address phone number
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="phoneNumber"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Hidden{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="phoneNumber"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Optional{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id=""
                        name="phoneNumber"
                        className=""
                      />
                      <label for="" className="ml-3">
                        {" "}
                        Required{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <label for=""> Add Note </label>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input type="radio" id="" name="addNote" className="" />
                      <label for="" className="ml-3">
                        {" "}
                        Hidden{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input type="radio" id="" name="addNote" className="" />
                      <label for="" className="ml-3">
                        {" "}
                        Optional{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input type="radio" id="" name="addNote" className="" />
                      <label for="" className="ml-3">
                        {" "}
                        Required{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKOUT THIRD DIV DISCARD AND SAVE BTN */}
      <div className="flex items-center justify-end space-x-4">
        <button type="button" className="btn btn-dark-light">
          Discard
        </button>

        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </>
  );
}
