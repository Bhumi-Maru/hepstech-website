import React from "react";

export default function Create_Products_14() {
  return (
    <>
      {/* CREATE PRODUCTS SECTION 14 [Payment Details] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Payment Details</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div className="flow-root mt-1">
            <ul className="-my-4 divide-y divide-gray-200">
              <li className="flex items-center justify-between py-4">
                <label for="">Cash on Delivery</label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="cashOnDelivery"
                    name="cashOnDelivery"
                    role="checkbox"
                    value=""
                    tabindex="0"
                  />
                  <label for="cashOnDelivery"></label>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <label for="">Refundable</label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="refundable"
                    name="refundable"
                    role="checkbox"
                    value=""
                    tabindex="0"
                  />
                  <label for="refundable"></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
