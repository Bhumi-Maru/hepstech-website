import React from "react";

export default function General_Settings_5() {
  return (
    <>
      {/* GENERAL SETTINGS SECTION 4 [Store Currency] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Store Currency
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              This is the currency your products are sold in. After your first
              sale, currency is locked in and can’t be changed. To change your
              payout currency, go to payments settings.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="md:max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="sm:col-span-2">
                  <label for=""> Store Currency </label>
                  <div className="mt-1 form-input">
                    <select name="" id="" className="" disabled>
                      <option value="">₹ (INR, Indian Rupee)</option>
                    </select>
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
