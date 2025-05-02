
import React, { useState } from "react";

export default function ForgotPasswordModal({
  isForgotPasswordModalOpen,
  setIsForgotPasswordModalOpen,
  setIsOtpFromLogin,
}) {
  const [emailOrMobile, setEmailOrMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., sending an OTP to the provided email/mobile)
    // alert(`Verification link sent to: ${emailOrMobile}`);
    setIsForgotPasswordModalOpen(false); // Close modal after submission
  };

  return (
    <div
      className={`modal ${isForgotPasswordModalOpen ? "active" : ""}`}
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
            onClick={() => setIsForgotPasswordModalOpen(false)}
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
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Forgot Password
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Please enter your mobile number or email address to receive a
              verification link.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="emailOrMobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Email or Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="emailOrMobile"
                    name="emailOrMobile"
                    value={emailOrMobile}
                    onChange={(e) => setEmailOrMobile(e.target.value)}
                    // required
                    className="input-field"
                    placeholder="Enter email or mobile number"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary mt-4"
                  onClick={() => setIsOtpFromLogin(true)}
                >
                  Send Verification Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
