import React from "react";

export default function General_Settings_3() {
  return (
    <>
      {/* GENENRAL SETTING SECTION 3 [STORE ADDRESS] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Store Address
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              This address will appear on your invoices. You can edit the
              address used to calculate shipping rates in your shipping
              settings.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-6 gap-x-5 gap-y-4">
                <div className="col-span-6">
                  <label for=""> Legal of Company Name </label>
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

                <div className="col-span-6">
                  <label for=""> Address </label>
                  <div className="mt-1 form-input">
                    <textarea
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      rows="2"
                      className="resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label for=""> Apartment, Suite, etc. </label>
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

                <div className="col-span-6 sm:col-span-3">
                  <label for=""> Country / Region </label>
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

                <div className="col-span-6 sm:col-span-2">
                  <label for=""> State / Province </label>
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

                <div className="col-span-4 sm:col-span-2">
                  <label for=""> City </label>
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

                <div className="col-span-2">
                  <label for=""> PIN Code </label>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
