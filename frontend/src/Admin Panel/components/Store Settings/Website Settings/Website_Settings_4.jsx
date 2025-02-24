import React from "react";

export default function Website_Settings_4() {
  return (
    <>
      {/* WEBSITE SETTING SECTION 4 [Website] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Website
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
                <div>
                  <label for=""> Primary Color </label>
                  <div className="relative flex items-center mt-1">
                    <input
                      type="color"
                      name="color"
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="w-20 h-[38px] sm:h-[34px] z-10"
                      value="#bada55"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="uppercase -ml-px !rounded-l-none"
                      value="#bada55"
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Primary Color / Hover </label>
                  <div className="relative flex items-center mt-1">
                    <input
                      type="color"
                      name="color"
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="w-20 h-[38px] sm:h-[34px] z-10"
                      value="#bada55"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="uppercase -ml-px !rounded-l-none"
                      value="#bada55"
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Primary Color / Light </label>
                  <div className="relative flex items-center mt-1">
                    <input
                      type="color"
                      name="color"
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="w-20 h-[38px] sm:h-[34px] z-10"
                      value="#bada55"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="uppercase -ml-px !rounded-l-none"
                      value="#bada55"
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Primary Color / Dark </label>
                  <div className="relative flex items-center mt-1">
                    <input
                      type="color"
                      name="color"
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="w-20 h-[38px] sm:h-[34px] z-10"
                      value="#bada55"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      className="uppercase -ml-px !rounded-l-none"
                      value="#bada55"
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
