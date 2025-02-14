import React from "react";

export default function LoginOtpConfirmationForm({
  closeOtpModalFromLogin,
  setIsSetPassword,
}) {
  const handleOtpLoginModal = () => {
    setIsSetPassword(true);
    closeOtpModalFromLogin();
  };

  return (
    <div
      className="modal active"
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
            onClick={closeOtpModalFromLogin}
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
              OTP Verification
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Please enter the OTP sent to your mobile number.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="otp">Enter OTP</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    // required
                    className="input-field"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary mt-4"
                  onClick={handleOtpLoginModal}
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
