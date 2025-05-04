import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../../context/AuthenticationContext";

export default function Login({
  setLoginModalOpen,
  setSignupModalOpen,
  setIsForgotPasswordModalOpen,
  setIsOtpFromLogin,
}) {
  // Show/Hide Password State
  const [showPassword, setShowPassword] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [emailOrMobileForOtp, setEmailOrMobileForOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpPhase, setIsOtpPhase] = useState(false); // Flag to show OTP input

  const {
    handleSubmitLogin,
    formData,
    handleChange,
    setError,
    requestOTP,
    setIsRequestingOTP,
    requestOtpForLogin,
    isRequestingOTP,
    setOtpVerificationStatus,
  } = useAuthentication();

  // Toggle between login and signup modals
  const handleAuthenticationToggleModal = () => {
    setLoginModalOpen(false); // Close login modal
    setSignupModalOpen(true); // Open signup modal
  };

  // Open forgot password modal
  const handleForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
    setLoginModalOpen(false);
  };

  const handleRequestOtp = async () => {
    if (!formData.emailOrMobile) {
      alert("Please enter your email or mobile number.");
      return;
    }

    try {
      await requestOtpForLogin(formData.emailOrMobile);
      setLoginModalOpen(false);
      setIsOtpFromLogin(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleSubmitLogin();
      if (response && response.data) {
        alert("Login Successfully!...");
        setLoginModalOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <>
      {/* Login Modal */}
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
              <span className="sr-only">Close</span>
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
              <h2 className="text-2xl font-bold text-center text-gray-900">
                Login
              </h2>
              <p className="max-w-xs mx-auto mt-2 text-base text-center text-gray-600">
                Get access to your Orders, Wishlist and Recommendations
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleLoginSubmit}>
                {/* Email or Mobile */}
                <div>
                  <label htmlFor="emailOrMobile">
                    Enter Email / Mobile Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="emailOrMobile"
                      id="emailOrMobile"
                      value={formData.emailOrMobile}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className=""
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password">Enter Password</label>
                    <Link
                      className="text-sm font-medium text-skin-primary-hover hover:text-skin-primary-hover hover:underline"
                      onClick={handleForgotPasswordModal}
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
                        autoComplete="off"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="hideShowPassword-field hideShowPassword-hidden"
                        style={{ margin: "0px", paddingRight: "20px" }}
                        autoCapitalize="off"
                        spellCheck="true"
                      />
                      <button
                        type="button"
                        role="button"
                        title="Show Password"
                        tabIndex="0"
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
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        ) : (
                          // Close Eye Icon
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <p className="max-w-xs text-sm">
                    By continuing, you agree to our{" "}
                    <a
                      href="#"
                      className="font-medium hover:underline hover:text-skin-primary"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium hover:underline hover:text-skin-primary"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Login Button */}
                <div>
                  <button type="submit" className="w-full mt-1 btn btn-primary">
                    Log In
                  </button>
                </div>
              </form>

              {/* Divider */}
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

              {/* OTP Button */}
              <button
                type="button"
                className="w-full mt-1 btn btn-white"
                onClick={handleRequestOtp}
                disabled={!formData.emailOrMobile || isRequestingOTP}
              >
                Request OTP
              </button>

              {/* Signup Link */}
              <p className="mt-6 text-center">
                New user?{" "}
                <Link
                  onClick={handleAuthenticationToggleModal}
                  className="font-medium hover:underline hover:text-skin-primary"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
