import React from "react";

export default function Profile_3() {
  return (
    <>
      {/* PROFILE SECTION 3 [Appearance] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Appearance
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div>
                <label for=""> Select Primary Color </label>

                <div className="inline-grid grid-cols-5 mt-2 sm:grid-cols-10 gap-x-3 gap-y-2">
                  <div
                    aria-label="Blue"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                        checked=""
                      />
                      <span className="bg-blue-600 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Red"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-red-600 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Light Blue"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-lightBlue-500 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Indigo"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-indigo-600 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Yellow"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-yellow-500 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Teal"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-teal-500 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Orange"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-orange-600 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Lime"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-lime-500 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Purple"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-purple-600 form-colorinput-color"></span>
                    </label>
                  </div>

                  <div
                    aria-label="Cyan"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <label className="form-colorinput">
                      <input
                        name="color"
                        type="radio"
                        value="white"
                        className="form-colorinput-input"
                      />
                      <span className="bg-cyan-500 form-colorinput-color"></span>
                    </label>
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
