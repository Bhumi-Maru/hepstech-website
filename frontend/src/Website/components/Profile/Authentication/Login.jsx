import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({
  setLoginModalOpen,
  setSignupModalOpen,
  setIsForgotPasswordModalOpen,
}) {
  // HIDE AND SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthenticationToggleModal = () => {
    setLoginModalOpen(false); // Close the login modal
    setSignupModalOpen(true); // Open the signup modal
  };

  const haandleForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
    setLoginModalOpen(false);
  };

  return (
    <>
      {/* <!-- START LOGIN MODAL --> */}
      <div
        className="modal active"
        id="loginModal"
        role="dialog"
        aria-hidden="false"
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
              onClick={() => setLoginModalOpen(false)}
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
                {/* <div className="mt-5 alert alert-success" role="alert">
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
                        ></path>
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
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <!-- ERROR ALERT --> */}
                {/* <div className="mt-5 alert alert-error" role="alert">
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
                        ></path>
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
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                <form className="mt-6 space-y-4" action="#" method="POST">
                  {/* MOBILE NUMBER / EMAIL */}
                  <div>
                    <label for="email"> Enter Email / Mobile Number </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        required=""
                        className=""
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label for="password"> Enter Password </label>

                      <Link
                        className="text-sm font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                        onClick={haandleForgotPasswordModal}
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <div className="mt-1">
                      <div
                        className="hideShowPassword-wrapper"
                        style={{
                          position: "relative",
                          display: "block",
                          verticalAlign: "baseline",
                          margin: "0px",
                        }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          autocomplete="off"
                          required=""
                          className="hideShowPassword-field hideShowPassword-hidden"
                          style={{ margin: "0px", paddingRight: "20px" }}
                          autocapitalize="off"
                          spellcheck="true"
                        />
                        <button
                          type="button"
                          role="button"
                          title="Show Password"
                          tabindex="0"
                          className="password-toggle hideShowPassword-toggle-show"
                          aria-label={
                            showPassword ? "Hide Password" : "Show Password"
                          }
                          aria-pressed={showPassword}
                          style={{
                            position: "absolute",
                            right: "0px",
                            top: "50%",
                            marginTop: "-10px",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            // Open Eye Icon
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              {" "}
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>{" "}
                              <path
                                fill-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clip-rule="evenodd"
                              ></path>{" "}
                            </svg>
                          ) : (
                            // CLOSE EYE ICON
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

                  <div>
                    <p className="max-w-xs text-sm">
                      By continuing, you agree to our
                      <a
                        href="#"
                        title=""
                        className="font-medium hover:underline hover:text-skin-primary"
                      >
                        &nbsp; Terms of Use
                      </a>
                      &nbsp; and &nbsp;
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
                  <Link
                    // to="/signup"
                    title=""
                    className="font-medium hover:underline hover:text-skin-primary"
                    onClick={handleAuthenticationToggleModal}
                  >
                    &nbsp; Create an account &nbsp;
                  </Link>
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
