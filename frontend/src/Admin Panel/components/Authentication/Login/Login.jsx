import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Login() {
  const { passwordVisible, togglePasswordVisibility } = useAdminGlobalContext();
  return (
    <>
      {/* LOGIN PAGE IN INDEX PAGE */}
      <div class="flex flex-col justify-center min-h-screen px-4 py-12 -mt-12 sm:px-6 lg:px-8">
        <div>
          <header class="sm:mx-auto sm:max-w-md">
            <div class="flex items-center justify-center">
              <svg
                class="w-12 h-12 text-skin-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 32"
                fill="currentColor"
              >
                <path d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"></path>
                <path d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"></path>
              </svg>
              <p class="ml-2.5 text-4xl font-extrabold leading-none truncate tracking-tight">
                Hepstech
              </p>
            </div>
          </header>

          {/* <!-- START MAIN CONTENT --> */}
          <main class="flex-1">
            <div class="sm:mx-auto sm:max-w-md">
              <div class="px-4 py-8 mt-8 bg-white rounded-lg shadow sm:px-8">
                <div class="text-center">
                  {/* <!-- PAGE TITLE --> */}
                  <h1 class="heading-1">Welcome back!</h1>
                  <p class="mt-2 text-sm text-gray-500">
                    Login to your admin account
                  </p>
                </div>

                <form class="mt-6 space-y-6">
                  <div>
                    <label for="email" class="">
                      Email address
                    </label>
                    <div class="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        class=""
                        autofocus=""
                        required=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1">
                      <div
                        class="hideShowPassword-wrapper"
                        style={{
                          position: "relative",
                          display: "block",
                          verticalAlign: "baseline",
                          margin: "0px",
                        }}
                      >
                        <input
                          type={passwordVisible ? "password" : "text"}
                          id="password"
                          name="password"
                          autocomplete="current-password"
                          class="hideShowPassword-field"
                          required=""
                          style={{ margin: "0px", paddingright: "20px" }}
                        />
                        <button
                          type="button"
                          role="button"
                          aria-label="Show Password"
                          title="Show Password"
                          tabindex="0"
                          class="password-toggle hideShowPassword-toggle-show"
                          onClick={togglePasswordVisibility}
                          aria-pressed={passwordVisible ? "true" : "false"}
                          style={{
                            position: "absolute",
                            right: "0px",
                            top: "50%",
                            marginTop: "-10px",
                          }}
                        >
                          {passwordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              {" "}
                              <path
                                fill-rule="evenodd"
                                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                                clip-rule="evenodd"
                              ></path>{" "}
                              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>{" "}
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="remember_me"
                        name="remember_me"
                        class=""
                      />
                      <label
                        for="remember_me"
                        class="block ml-2 text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div class="text-sm">
                      <a
                        href="#"
                        title=""
                        class="font-medium text-skin-primary hover:text-skin-primary-hover"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button type="submit" class="w-full btn btn-primary">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              <p class="mt-8 text-sm text-center text-gray-500">
                Copyright © <span id="currentYear">2025</span>{" "}
                <span class="font-semibold">Hepstech</span> All Rights Reserved.
              </p>
            </div>
          </main>
          {/* <!-- END MAIN CONTENT --> */}
        </div>
      </div>
    </>
  );
}
