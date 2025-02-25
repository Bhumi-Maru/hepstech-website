import React from "react";

export default function Profile_2() {
  return (
    <>
      {/* PROFILE SECTION 2 [Password] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Password
            </h3>
            <p className="mt-2 text-sm text-gray-500">Manage your password.</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="space-y-4">
                <div>
                  <label for=""> Old Password </label>
                  <div className="mt-1 form-input">
                    <input
                      type="password"
                      name=""
                      id="oldPassword"
                      placeholder=""
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label for=""> New Password </label>
                  <div className="mt-1 form-input">
                    <input
                      type="password"
                      name=""
                      id="newPassword"
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
