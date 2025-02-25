import React from "react";

export default function General_Settings_4() {
  return (
    <>
      {/* GENERAL SETTING SECTIN 3 [Standards and Formats] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Standards and Formats
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Standards and formats are used to calculate product prices,
              shipping weights, and order times.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="md:max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="sm:col-span-2">
                  <label for=""> Time Zone </label>
                  <div className="mt-1 form-input">
                    <select name="" id="" className="" disabled>
                      <option value="">
                        (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                      </option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="">
                    Order ID Format
                    <span className="text-gray-600">(Optional)</span>
                  </label>
                  <p className="mt-2 text-sm text-gray-500">
                    Order numbers start at #1001 by default. While you can’t
                    change the order number itself, you can add a prefix or
                    suffix to create IDs like "EN1001" or "1001-A."
                  </p>
                  <div className="flex items-center mt-3 space-x-5">
                    <div>
                      <label for=""> Prefix </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">#</span>
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          className="!pl-7"
                        />
                      </div>
                    </div>

                    <div>
                      <label for=""> Suffix </label>
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
                  <p className="mt-2 text-sm text-gray-500">
                    Your order ID will appear as #1001, #1002, #1003 ...
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
