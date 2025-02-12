import React from "react";

export default function MyAccount_1() {
  return (
    <>
      <div class="md:col-span-3">
        <h1 class="text-2xl font-bold text-gray-900">My Account</h1>

        <div class="mt-5 divide-y divide-gray-200">
          <div class="pb-8">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>

            <form action="#" class="mt-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label for=""> First Name </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      value="Jamey"
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <label for=""> Last Name </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      value="Craghead"
                      class=""
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="py-8">
            <div class="grid grid-cols-1 divide-y divide-gray-200 lg:divide-x lg:divide-gray-200 lg:grid-cols-2 lg:divide-y-0">
              <div class="pb-8 lg:pr-10 lg:pb-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Email Address
                </h3>

                <form action="#" class="mt-5">
                  <div class="grid grid-cols-1 gap-x-5 gap-y-4">
                    <div>
                      <label for=""> Email Address </label>
                      <div class="mt-1">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder=""
                          value="jamey.craghead@company.com"
                          class=""
                        />
                      </div>
                    </div>

                    <div>
                      <label for=""> Enter OTP </label>
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
                      <button type="submit" class="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="pt-8 lg:pl-10 lg:pt-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Mobile Number
                </h3>

                <form action="#" class="mt-5">
                  <div class="grid grid-cols-1 gap-x-5 gap-y-4">
                    <div>
                      <label for=""> Mobile Number </label>
                      <div class="mt-1">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder=""
                          value="(885) 242-9095"
                          class=""
                        />
                      </div>
                    </div>

                    <div>
                      <label for=""> Enter OTP </label>
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
                      <button type="submit" class="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Password
            </h3>

            <form action="#" class="mt-5">
              <div class="grid grid-cols-1 gap-y-6 gap-x-4">
                <div>
                  <label for=""> Old Password </label>
                  <div class="mt-1 form-input">
                    <input
                      type="password"
                      name=""
                      id="oldPassword"
                      placeholder=""
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for=""> New Password </label>

                    <p class="text-sm text-gray-600">Minimum 8 characters</p>
                  </div>
                  <div class="mt-1 form-input">
                    <input
                      type="password"
                      name=""
                      id="newPassword"
                      placeholder=""
                      class=""
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" class="btn btn-primary">
                    Update Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
