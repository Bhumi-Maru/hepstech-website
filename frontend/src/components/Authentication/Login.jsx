import React from "react";

export default function Login() {
  return (
    <>
      {/* <!-- START LOGIN MODAL --> */}
      <div
        className="modal"
        id="loginModal"
        role="dialog"
        aria-hidden="true"
        tabindex="-1"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog sm:max-w-lg">
          <div className="modal-content" role="document">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
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
                />
              </svg>
            </button>

            <div className="px-4 py-8 modal-body sm:px-10">
              {/* <!-- LOGIN FORM --> */}
              <div className="">
                <h2 className="text-2xl font-bold text-center text-gray-900">
                  Login
                </h2>
                <p className="max-w-xs mx-auto mt-2 text-base text-center text-gray-600">
                  Get access to your Orders, Wishlist and Recommendations
                </p>

                {/* <!-- SUCCESS ALERT --> */}
                <div className="mt-5 alert alert-success" role="alert">
                  <div className="flex">
                    <div className="alert-icon">
                      <svg
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Logged in successfully!
                      </p>
                    </div>

                    <div className="pl-10 ml-auto">
                      <div className="-mx-3 -my-3">
                        <button
                          type="button"
                          title="Close Alert"
                          className="btn-close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span className="sr-only">Dismiss</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ERROR ALERT --> */}
                <div className="mt-5 alert alert-error" role="alert">
                  <div className="flex">
                    <div className="alert-icon">
                      <svg
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
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-medium">Login failed!</p>
                    </div>

                    <div className="pl-10 ml-auto">
                      <div className="-mx-3 -my-3">
                        <button
                          type="button"
                          title="Close Alert"
                          className="btn-close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span className="sr-only">Dismiss</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="mt-6 space-y-4" action="#" method="POST">
                  <div>
                    <label for="email"> Enter Email / Mobile Number </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        required
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label for="password"> Enter Password </label>

                      <a
                        href="#"
                        className="text-sm font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <div className="mt-1">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autocomplete="current-password"
                        required
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <p className="max-w-xs text-sm">
                      By continuing, you agree to our
                      <a
                        href="#"
                        title=""
                        className="font-medium hover:underline hover:text-skin-primary"
                      >
                        Terms of Use
                      </a>
                      and
                      <a
                        href="#"
                        title=""
                        className="font-medium hover:underline hover:text-skin-primary"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full mt-1 btn btn-primary"
                    >
                      Log In
                    </button>
                  </div>
                </form>

                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-sm font-medium text-gray-500 uppercase bg-white">
                      Or
                    </span>
                  </div>
                </div>

                <button type="button" className="w-full mt-1 btn btn-white">
                  Request OTP
                </button>

                <p className="mt-6 text-center">
                  New user?
                  <a
                    href="#"
                    title=""
                    className="font-medium hover:underline hover:text-skin-primary"
                  >
                    Create an account
                  </a>
                </p>
              </div>

              {/* <!-- REQUEST OTP FORM --> */}
              <div className="hidden">
                <p className="text-center">
                  Please enter the OTP sent to
                  <br />
                  <span className="font-medium">+91 98765 43210</span>
                </p>
                <p className="mt-2 text-center">
                  <a
                    href="#"
                    title=""
                    className="font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                  >
                    Change Number
                  </a>
                </p>

                <form className="mt-6 space-y-4" action="#" method="POST">
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="text-center"
                      maxlength="6"
                    />
                  </div>
                  {/* <!-- <div className="grid grid-cols-6 gap-4">
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
                <div>
                  <input type="text" name="" id="" className="text-center">
                </div>
              </div> --> */}

                  <div>
                    <button className="w-full btn btn-primary">Verify</button>
                  </div>

                  <p className="text-sm text-center">
                    Not received your code?
                    <a
                      href="#"
                      title=""
                      className="font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                    >
                      Resend code
                    </a>
                  </p>
                </form>
              </div>

              {/* <!-- SIGN UP FORM --> */}
              <div className="hidden">
                <h2 className="text-2xl font-bold text-center text-gray-900">
                  Create an Account
                </h2>
                <p className="max-w-xs mx-auto mt-2 text-base text-center text-gray-600">
                  Looks like you're new here! Sign up with your mobile number to
                  get started
                </p>

                <form className="mt-6 space-y-4" action="#" method="POST">
                  <div>
                    <label for=""> Enter Mobile Number </label>
                    <div className="mt-1">
                      <input type="text" name="" id="" required className="" />
                    </div>
                  </div>

                  <div>
                    <p className="max-w-xs text-sm">
                      By continuing, you agree to our
                      <a
                        href="#"
                        title=""
                        className="font-medium hover:underline hover:text-skin-primary"
                      >
                        Terms of Use
                      </a>
                      and
                      <a
                        href="#"
                        title=""
                        className="font-medium hover:underline hover:text-skin-primary"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full mt-1 btn btn-primary"
                    >
                      Continue
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center">
                  Existing User?
                  <a
                    href="#"
                    title=""
                    className="font-medium hover:underline hover:text-skin-primary"
                  >
                    Log In
                  </a>
                </p>
              </div>

              {/* <!-- SIGN UP OTP CONFIRMATION FORM --> */}
              <div className="hidden">
                <h2 className="text-2xl font-bold text-center text-gray-900">
                  Create an Account
                </h2>
                <p className="max-w-xs mx-auto mt-2 text-base text-center text-gray-600">
                  Looks like you're new here! Sign up with your mobile number to
                  get started
                </p>

                <form className="mt-6 space-y-4" action="#" method="POST">
                  <div>
                    <div className="flex items-center justify-between">
                      <label for=""> Mobile Number </label>

                      <a
                        href="#"
                        className="text-sm font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                      >
                        Change?
                      </a>
                    </div>
                    <div className="mt-1">
                      <input type="text" name="" id="" required className="" />
                    </div>
                  </div>

                  <div>
                    <label for="password"> Enter OTP </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        className=""
                        maxlength="6"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="password"> Set Password </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        className=""
                        maxlength="6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full mt-1 btn btn-primary"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center">
                  Existing User?
                  <a
                    href="#"
                    title=""
                    className="font-medium hover:underline hover:text-skin-primary"
                  >
                    Log In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END LOGIN MODAL --> */}
    </>
  );
}
