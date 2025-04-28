import React, { useState } from "react";
import { useAuthentication } from "../../../context/AuthenticationContext";

export default function SignUp({
  setLoginModalOpen,
  setSignupModalOpen,
  setOtpModalOpen,
}) {
  // Hide/show password functionality
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { handleSubmitRegister, formData, handleChange } = useAuthentication();

  // const [formData, setFormData] = useState({
  //   userName: "",
  //   email: "",
  //   mobileNumber: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [registerData, setRegisterData] = useState(null);

  // Handle toggle password visibility
  const handleTogglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Handle toggling between the sign-up and login modals
  const handleAuthenticationToggleModal = () => {
    setSignupModalOpen(false); // Close the sign-up modal
    setLoginModalOpen(true); // Open the login modal
  };

  // Handle clicking the "Verify Mobile Number" button
  const handleVerifyMobile = (e) => {
    e.preventDefault(); // Prevent form submission
    setSignupModalOpen(false); // Close the sign-up modal
    setOtpModalOpen(true); // Open the OTP modal
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // // Handle form submission (register)
  // const handleSubmitRegister = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:7000/api/auth/register",
  //       formData
  //     );
  //     console.log("Register data is: ", response.data);
  //     setRegisterData(response.data); // Store response data

  //     setSignupModalOpen(false);
  //     setOtpModalOpen(true);
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //   }
  // };

  return (
    <>
      {/* START SIGNUP MODAL */}
      <div
        className="modal active"
        id="signUpModal"
        role="dialog"
        aria-hidden="false"
        tabIndex="-1"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog sm:max-w-lg">
          <div className="modal-content" role="document">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setSignupModalOpen(false)}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="px-4 py-8 modal-body sm:px-10">
              {/* SIGN UP FORM */}
              <h2 className="text-2xl font-bold text-center text-gray-900">
                Create an Account
              </h2>
              <p className="max-w-xs mx-auto mt-2 text-base text-center text-gray-600">
                Looks like you're new here! Sign up with your mobile number to
                get started
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault(); // Prevents the default form submission

                  try {
                    // Call handleSubmitRegister and wait for the response
                    const response = await handleSubmitRegister();
                    console.log("Response:", response); // Log the entire response object to check what is being returned

                    if (response && response.data) {
                      setSignupModalOpen(false); // Close sign-up modal
                      setOtpModalOpen(true); // Open OTP modal
                    } else {
                      console.log("Error: Response data is missing");
                    }
                  } catch (error) {
                    console.error("Error during registration:", error); // Log the error if the request fails
                  }
                }}
              >
                {/* USERNAME */}
                <div>
                  <label htmlFor="userName">UserName</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      required
                      className=""
                      value={formData.userName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email">Enter Email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className=""
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* MOBILE NUMBER  */}
                <div>
                  <label htmlFor="mobileNumber">Enter Mobile Number</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      required
                      className=""
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password"> Password </label>
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
                        type={showPassword.password ? "text" : "password"}
                        name="password"
                        id="password"
                        autoComplete="off"
                        required
                        className="hideShowPassword-field hideShowPassword-hidden"
                        style={{ margin: "0px", paddingRight: "20px" }}
                        autoCapitalize="off"
                        spellCheck="true"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        role="button"
                        title="Show Password"
                        tabIndex="0"
                        className="password-toggle hideShowPassword-toggle-show"
                        aria-label={
                          showPassword.password
                            ? "Hide Password"
                            : "Show Password"
                        }
                        aria-pressed={showPassword.password}
                        style={{
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          marginTop: "-10px",
                        }}
                        onClick={() => handleTogglePassword("password")}
                      >
                        {showPassword.password ? (
                          // Open Eye Icon
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
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
                            />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirm_password">Confirm Password </label>
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
                        type={
                          showPassword.confirmPassword ? "text" : "password"
                        }
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="off"
                        required
                        className="hideShowPassword-field hideShowPassword-hidden"
                        style={{ margin: "0px", paddingRight: "20px" }}
                        autoCapitalize="off"
                        spellCheck="true"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        role="button"
                        title="Show Password"
                        tabIndex="0"
                        className="password-toggle hideShowPassword-toggle-show"
                        aria-label={
                          showPassword.confirmPassword
                            ? "Hide Password"
                            : "Show Password"
                        }
                        aria-pressed={showPassword.confirmPassword}
                        style={{
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          marginTop: "-10px",
                        }}
                        onClick={() => handleTogglePassword("confirmPassword")}
                      >
                        {showPassword.confirmPassword ? (
                          // Open Eye Icon
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
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
                            />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary mt-4"
                    // onClick={handleVerifyMobile}
                  >
                    Verify Mobile Number
                  </button>
                </div>
              </form>

              {/* LOGIN PROMPT */}
              <div className="text-center mt-6">
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-skin-primary cursor-pointer"
                    onClick={handleAuthenticationToggleModal}
                  >
                    Log In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
