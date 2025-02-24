import React from "react";

export default function General_Settings_2() {
  return (
    <>
      {/* GENENRAL SETTING SECTION 1 [STORE DETAILS] */}
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
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="col-span-2">
                  <label for="">
                    Store Name <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label for=""> Store Contact Email </label>
                  <div className="mt-1 form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Your customers will use this address if they need to contact
                    you.
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label for=""> Store Mobile Number </label>
                  <div className="mt-1 form-input">
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Your customers will use this phone number if they need to
                    call you directly.
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label for=""> Sender Email </label>
                  <div className="mt-1 form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label for=""> Store WhatsApp Number </label>
                  <div className="mt-1 form-input">
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
                  <label for=""> Store Status </label>
                  <div className="mt-1 toggle-switch">
                    <input
                      type="checkbox"
                      id="toggleSwitch"
                      role="checkbox"
                      tabindex="0"
                    />
                    <label for="toggleSwitch"></label>
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
