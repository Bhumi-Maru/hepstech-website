import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Products_10() {
  const { handleToggle, toggleStates } = useAdminGlobalContext();
  return (
    <>
      {/* CREATE PRODUCTS SECTION 10 [Shipping Configuration] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Shipping Configuration</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div className="flex items-center space-x-4">
            <select name="" id="shippingConfiguration" className="">
              <option value="-1">Select Option</option>
              <option value="1">Free Shipping</option>
              <option value="2">Flat Rate</option>
              <option value="3">Pin Code Wise Shipping</option>
            </select>

            <div className="hidden" id="flatRateInput">
              <input
                type="number"
                name=""
                id=""
                placeholder="Flat rate"
                className=""
              />
            </div>
          </div>

          <hr className="my-4 border-gray-200" />
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              <li className="flex items-center justify-between py-4">
                <label for="">Product Quantity Multiply</label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="productQty"
                    name="productQty"
                    role="checkbox"
                    value=""
                    tabindex="0"
                  />
                  <label for="productQty"></label>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <label for="estimatedShippingTime">
                  Estimated Shipping Time
                </label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="estimatedShippingTime"
                    name="estimatedShippingTime"
                    role="checkbox"
                    value=""
                    tabindex="0"
                    checked={toggleStates.estimatedShippingTime}
                    onChange={() => handleToggle("estimatedShippingTime")}
                  />
                  <label for="estimatedShippingTime"></label>
                </div>
              </li>
            </ul>
          </div>
          {toggleStates.estimatedShippingTime && (
            <>
              <div className="mt-4" id="estimatedShippingTimeInput">
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="Enter estimated shipping time"
                  className=""
                />
              </div>
            </>
          )}

          <hr className="my-4 border-gray-200" />

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <label for="">Length</label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <div>
              <label for="">Breadth</label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <div>
              <label for="">Height</label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>

            <div>
              <label for="">Weight</label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
