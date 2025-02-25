import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Payment_Methods_5() {
  const { toggleStates, handleToggle } = useAdminGlobalContext();
  return (
    <>
      {/* PAYMENT METHODS [Stripe] */}

      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Stripe
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Receive payments with Stripe.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="flex items-center justify-between space-x-8">
              <label for="">Enable Payment Method</label>

              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="stripeStatus"
                  role="checkbox"
                  tabindex="0"
                  checked={toggleStates.Stripe}
                  onChange={() => handleToggle("Stripe")}
                />
                <label for="stripeStatus"></label>
              </div>
            </div>

            {toggleStates.Stripe && (
              <>
                {" "}
                <div className="mt-4" id="stripeIntegration">
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label for="">Stripe Key</label>
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

                      <div>
                        <label for="">Stripe Secret</label>
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
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
