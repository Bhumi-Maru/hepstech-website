import React from "react";

export default function AddNewAddressModal({ setIsOpenAddressModal }) {
  return (
    <>
      <div
        className="modal active"
        id="addNewAddressModal"
        role="dialog"
        aria-hidden="false"
        tabindex="-1"
      >
        <div
          className="modal-overlay"
          tabindex="-1"
          onClick={() => setIsOpenAddressModal(false)}
        ></div>
        <div className="modal-dialog sm:max-w-xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Add New Address
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenAddressModal(false)}
              >
                <span className="sr-only"> Close </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="px-4 py-5 border-t border-b border-gray-200 modal-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label for=""> First name </label>
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
                  <label for=""> Last name </label>
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
                  <label for=""> Mobile number </label>
                  <div className="mt-1">
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
                  <label for=""> Alternate number </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for=""> Email ID </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for=""> Address Line 1 </label>
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

                <div className="sm:col-span-2">
                  <label for=""> Address Line 2 </label>
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
                  <label for=""> City </label>
                  <div className="relative mt-1">
                    <select
                      name="city"
                      id="city"
                      className="select2-hidden-accessible"
                      data-select2-id="select2-data-city"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-2-3zfa">
                        Select City
                      </option>
                      <option value="">Ahmedabad</option>
                      <option value="">Rajkot</option>
                    </select>
                    {/* <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-1-hodh"
                      style={{ width: "252.5px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-city-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-city-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select City"
                          >
                            Select City
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span> */}

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> PIN Code </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label for=""> State </label>
                  <div className="relative mt-1">
                    <select
                      name="state"
                      id="state"
                      className="select2-hidden-accessible"
                      data-select2-id="select2-data-state"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-4-o6jx">
                        Select State
                      </option>
                    </select>
                    {/* <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-3-81rq"
                      style={{ width: "252.5px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-state-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-state-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select State"
                          >
                            Select State
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span> */}

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Country </label>
                  <div className="relative mt-1">
                    <select
                      name="country"
                      id="country"
                      className="select2-hidden-accessible"
                      data-select2-id="select2-data-country"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-6-uap2">
                        Select Country
                      </option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-5-7891"
                      style={{ width: "252.5px" }}
                    >
                      {/* <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-country-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-country-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select Country"
                          >
                            Select Country
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span> */}
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for=""> Address Type </label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="addressType"
                        id="homeAddress"
                        className=""
                      />
                      <label for="homeAddress" className="ml-3">
                        Home (All day delivery)
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="addressType"
                        id="workAddress"
                        className=""
                      />
                      <label for="workAddress" className="ml-3">
                        Work (Delivery between 10 AM - 5 PM)
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="addressType"
                        id="otherAddress"
                        className=""
                      />
                      <label for="otherAddress" className="ml-3">
                        {" "}
                        Other{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 modal-footer">
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-white"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenAddressModal(false)}
                >
                  Discard
                </button>

                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
