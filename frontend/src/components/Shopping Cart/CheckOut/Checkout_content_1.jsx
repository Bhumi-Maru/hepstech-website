import React, { useState } from "react";

export default function Checkout_content_1() {
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleSelection = (event) => {
    const selectedId = event.target.id;
    setSelectedAddress(selectedId);

    if (selectedId === "newAddress") {
      setShowNewAddress(true);
    } else {
      setShowNewAddress(false);
    }
  };

  return (
    <>
      {/* CHECKOUT CONTENT 1 */}
      <div class="lg:col-span-4">
        <div class="space-y-4">
          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="bg-gray-100">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center space-x-3">
                  <span class="inline-block px-3 py-1 text-sm text-white bg-gray-500 rounded-full">
                    1
                  </span>
                  <span class="text-base font-medium text-gray-900">Login</span>
                </div>
              </div>
            </div>

            <div class="px-4 py-5 sm:p-6">
              {/* <!-- IF USER IS LOGGED IN --> */}
              <div>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <p class="font-medium w-[150px]">Name:</p>
                    <p>Jamey Craghead</p>
                  </div>

                  <div class="flex items-center">
                    <p class="font-medium w-[150px]">Phone:</p>
                    <p>(885) 242-9095</p>
                  </div>
                </div>

                <button type="button" class="mt-3 btn btn-primary">
                  Continue to Checkout
                </button>
              </div>

              {/* <!-- IF USER IS NOT LOGGED IN --> */}
              <div>
                <div>
                  <div class="flex justify-between">
                    <label for=""> Enter Email or Mobile Number </label>
                    <a
                      href="#"
                      title=""
                      class="text-sm font-medium text-skin-primary hover:underline"
                      id=""
                    >
                      Change?
                    </a>
                  </div>
                  <div class="mt-1">
                    <input type="text" name="" id="" placeholder="" class="" />
                  </div>
                </div>

                <div class="mt-4 sm:flex sm:items-center">
                  <div class="flex-1">
                    <div class="flex justify-between">
                      <label for=""> Enter Password </label>
                      <a
                        href="#"
                        title=""
                        class="text-sm font-medium text-skin-primary hover:underline"
                        id=""
                      >
                        Forgot?
                      </a>
                    </div>

                    <div class="mt-1">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder=""
                        class=""
                      />
                    </div>
                  </div>

                  <div class="mt-4 sm:ml-5 sm:mt-0">
                    <div class="flex justify-between">
                      <label for=""> Enter OTP </label>
                      <a
                        href="#"
                        title=""
                        class="text-sm font-medium text-skin-primary hover:underline"
                        id=""
                      >
                        Resend?
                      </a>
                    </div>
                    <div class="mt-1">
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder=""
                        class=""
                      />
                    </div>
                  </div>
                </div>
                <p class="mt-2 text-sm text-gray-600">
                  By continuing, you agree to our
                  <a
                    href="#"
                    title=""
                    class="font-medium text-skin-primary hover:underline"
                  >
                    Terms of Use
                  </a>
                  and
                  <a
                    href="#"
                    title=""
                    class="font-medium text-skin-primary hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
                <button type="button" class="mt-5 btn btn-primary">
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="bg-gray-100">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center space-x-3">
                  <span class="inline-block px-3 py-1 text-sm text-white bg-gray-500 rounded-full">
                    2
                  </span>
                  <span class="text-base font-medium text-gray-900">
                    Delivery Address
                  </span>
                </div>
              </div>
            </div>

            <div class="px-4 sm:px-6">
              <div class="divide-y divide-gray-200">
                <div class="flex items-start py-6">
                  <input
                    type="radio"
                    name="deliveryAddress"
                    id="address01"
                    class="w-5 h-5"
                    checked={selectedAddress === "address01"}
                    onChange={handleSelection}
                  />

                  <div class="flex-1 ml-3">
                    <div class="flex items-center justify-between -mt-1 space-x-4">
                      <div class="flex-1 sm:flex sm:items-center sm:space-x-4">
                        <label for="address01" class="text-base font-medium">
                          Eliseo Wing
                        </label>
                        <p class="text-sm text-gray-600">(588) 498-4232</p>
                      </div>
                      <span class="ml-auto badge badge-default">Home</span>
                    </div>
                    <p class="mt-1 text-sm">
                      3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                    </p>
                    <button type="button" class="mt-3 btn btn-primary">
                      Deliver Here
                    </button>
                  </div>
                </div>

                <div class="flex items-start py-6">
                  <input
                    type="radio"
                    name="deliveryAddress"
                    id="address02"
                    class="w-5 h-5"
                    checked={selectedAddress === "address02"}
                    onChange={handleSelection}
                  />

                  <div class="flex-1 ml-3">
                    <div class="flex items-center justify-between -mt-1 space-x-4">
                      <div class="flex-1 sm:flex sm:items-center sm:space-x-4">
                        <label for="address02" class="text-base font-medium">
                          Eliseo Wing
                        </label>
                        <p class="text-sm text-gray-600">(588) 498-4232</p>
                      </div>
                      <span class="ml-auto badge badge-default">Work</span>
                    </div>
                    <p class="mt-1 text-sm">
                      3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                    </p>
                  </div>
                </div>

                <div class="flex items-start py-6">
                  <input
                    type="radio"
                    name="deliveryAddress"
                    id="address03"
                    class="w-5 h-5"
                    checked={selectedAddress === "address03"}
                    onChange={handleSelection}
                  />

                  <div class="flex-1 ml-3">
                    <div class="flex items-center justify-between -mt-1 space-x-4">
                      <div class="flex-1 sm:flex sm:items-center sm:space-x-4">
                        <label for="address03" class="text-base font-medium">
                          Eliseo Wing
                        </label>
                        <p class="text-sm text-gray-600">(588) 498-4232</p>
                      </div>
                      <span class="ml-auto badge badge-default">Other</span>
                    </div>
                    <p class="mt-1 text-sm">
                      3 Park Heath Cottages, Park Heath, Cheswardine, TF9 2NR
                    </p>
                  </div>
                </div>

                <div>
                  <div class="flex items-center py-6">
                    <input
                      type="radio"
                      name="deliveryAddress"
                      id="newAddress"
                      class="w-5 h-5"
                      // onChange={() => setShowNewAddress(!showNewAddress)}
                      checked={selectedAddress === "newAddress"}
                      onChange={handleSelection}
                    />

                    <div class="flex-1 ml-3">
                      <div class="flex items-center space-x-4">
                        <label for="newAddress" class="text-base font-medium">
                          Add a new address
                        </label>
                      </div>
                    </div>
                  </div>

                  {showNewAddress && (
                    <>
                      <div class="pb-6" id="addNewAddressContent">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                          <div>
                            <label for=""> First name </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div>
                            <label for=""> Last name </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div>
                            <label for=""> Mobile number </label>
                            <div class="mt-1">
                              <input
                                type="tel"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div>
                            <label for=""> Alternate number </label>
                            <div class="mt-1">
                              <input
                                type="tel"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for=""> Email ID </label>
                            <div class="mt-1">
                              <input
                                type="email"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for=""> Address Line 1 </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for=""> Address Line 2 </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div>
                            <label for=""> City </label>
                            <div class="relative mt-1">
                              <select name="city" id="city" class="">
                                <option value="">Select City</option>
                                <option value="">Ahmedabad</option>
                                <option value="">Rajkot</option>
                              </select>

                              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                  class="w-5 h-5 text-gray-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label for=""> PIN Code </label>
                            <div class="mt-1">
                              <input
                                type="number"
                                name=""
                                id=""
                                placeholder=""
                                class=""
                              />
                            </div>
                          </div>

                          <div>
                            <label for=""> State </label>
                            <div class="relative mt-1">
                              <select name="state" id="state" class="">
                                <option value="">Select State</option>
                              </select>

                              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                  class="w-5 h-5 text-gray-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label for=""> Country </label>
                            <div class="relative mt-1">
                              <select name="country" id="country" class="">
                                <option value="">Select Country</option>
                              </select>

                              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                  class="w-5 h-5 text-gray-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for=""> Address Type </label>
                            <div class="mt-2 space-y-3">
                              <div class="flex items-center">
                                <input
                                  type="radio"
                                  name="addressType"
                                  id="homeAddress"
                                  class=""
                                />
                                <label for="homeAddress" class="ml-3">
                                  Home (All day delivery)
                                </label>
                              </div>

                              <div class="flex items-center">
                                <input
                                  type="radio"
                                  name="addressType"
                                  id="workAddress"
                                  class=""
                                />
                                <label for="workAddress" class="ml-3">
                                  Work (Delivery between 10 AM - 5 PM)
                                </label>
                              </div>

                              <div class="flex items-center">
                                <input
                                  type="radio"
                                  name="addressType"
                                  id="otherAddress"
                                  class=""
                                />
                                <label for="otherAddress" class="ml-3">
                                  Other
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-center space-x-6 sm:col-span-2">
                            <button type="button" class="btn btn-primary">
                              Save & Deliver Here
                            </button>

                            <button
                              type="button"
                              class="btn-link"
                              onClick={() => setShowNewAddress(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="bg-gray-100">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center space-x-3">
                  <span class="inline-block px-3 py-1 text-sm text-white bg-gray-500 rounded-full">
                    3
                  </span>
                  <span class="text-base font-medium text-gray-900">
                    Order Summary
                  </span>
                </div>
              </div>
            </div>

            <div class="hidden px-4 py-5 sm:p-6">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left divide-y-2 divide-gray-200 custom-table">
                        <thead>
                          <tr>
                            <th scope="col" class="!pl-0">
                              Products (3)
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty.</th>
                            <th scope="col" class="!pr-0">
                              Total
                            </th>
                          </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td class="!pl-0">
                              <div class="flex items-start space-x-4">
                                <div class="flex items-center justify-center flex-none overflow-hidden bg-gray-200 rounded-md w-14 h-14">
                                  <img
                                    class="object-cover w-full h-full"
                                    src=""
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <span class="block font-medium w-[150px] sm:w-[200px] md:w-full">
                                    Sassie Basic 31 LTR Navy Backpack Waterproof
                                    School Bag
                                  </span>
                                  <ul class="mt-2 space-y-1 text-gray-600">
                                    <li class="flex items-center space-x-2">
                                      <span> Color: </span>
                                      <span class="w-3.5 h-3.5 bg-black rounded-full"></span>
                                      <span> Black </span>
                                    </li>

                                    <li class="flex items-center space-x-2">
                                      <span> Size: </span>
                                      <span> XL </span>
                                    </li>

                                    <li class="flex items-center space-x-2">
                                      <span> Variant: </span>
                                      <span> Value </span>
                                    </li>

                                    <li class="flex items-center space-x-2">
                                      <span> Variant: </span>
                                      <span> Value </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td>₹1,000</td>
                            <td>2</td>
                            <td class="!pr-0">₹2,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-7 sm:mt-6 sm:flex sm:items-center sm:justify-between">
                <p class="text-sm font-medium">
                  Order confirmation email will be sent to
                  <span class="text-skin-primary">user@company.com</span>
                </p>

                <button type="button" class="mt-4 btn btn-primary sm:mt-0">
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="bg-gray-100">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center space-x-3">
                  <span class="inline-block px-3 py-1 text-sm text-white bg-gray-500 rounded-full">
                    4
                  </span>
                  <span class="text-base font-medium text-gray-900">
                    Payment Options
                  </span>
                </div>
              </div>
            </div>

            <div class="hidden px-4 py-5 sm:p-6">
              <div class="space-y-4">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="upiPayment"
                    class="w-5 h-5"
                  />
                  <label for="upiPayment" class="ml-3">
                    {" "}
                    UPI{" "}
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="paytmWallet"
                    class="w-5 h-5"
                  />
                  <label for="paytmWallet" class="ml-3">
                    PayTM Wallet
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="creditCard"
                    class="w-5 h-5"
                  />
                  <label for="creditCard" class="ml-3">
                    Credit / Debit Card
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="netBanking"
                    class="w-5 h-5"
                  />
                  <label for="netBanking" class="ml-3">
                    Net Banking
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="cashOnDelivery"
                    class="w-5 h-5"
                  />
                  <label for="cashOnDelivery" class="ml-3">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
