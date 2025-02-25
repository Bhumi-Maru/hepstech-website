import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Products_7() {
  const { toggleStates, handleToggle } = useAdminGlobalContext();
  return (
    <>
      {/* CREATE PRODUCTS SECTION 7 [Purchase Selected Location] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="p-4 sm:px-5">
          <div className="relative flex items-center">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="purchaseLocation"
                className=""
                checked={toggleStates.purchaseSelectedLocation}
                onChange={() => handleToggle("purchaseSelectedLocation")}
              />
            </div>
            <div className="ml-3">
              <label
                for="purchaseLocation"
                className="text-base font-medium text-gray-900"
              >
                Purchase Selected Location
              </label>
            </div>
          </div>
        </div>
        {toggleStates.purchaseSelectedLocation && (
          <>
            <div className="px-4 pb-5 sm:px-5" id="purchaseLocationsList">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2">
                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="" className="" />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label for="" className="font-medium text-gray-700">
                      Gujarat
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
