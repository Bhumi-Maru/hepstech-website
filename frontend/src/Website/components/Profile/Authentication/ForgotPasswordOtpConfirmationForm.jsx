import React, { useState } from "react";
import axios from "axios";

export default function ForgotPasswordOtpConfirmationForm({
  setIsForgotPasswordModalOpen,
  emailOrMobile,
}) {
  const [otp, setOtp] = useState("");
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsVerifyingOTP(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:7000/api/auth/verify-otp",
        {
          emailOrMobile,
          otp,
        }
      );

      setIsOtpVerified(true);
      setSuccessMessage("OTP verified. Please set your new password.");
    } catch (error) {
      console.error("OTP verification error:", error);
      setError(error.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setIsVerifyingOTP(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsVerifyingOTP(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:7000/api/auth/verify-otp",
        {
          emailOrMobile,
          otp,
          newPassword,
        }
      );

      setSuccessMessage("Password reset successfully!");
      setTimeout(() => {
        setIsForgotPasswordModalOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(error.response?.data?.message || "Failed to reset password");
    } finally {
      setIsVerifyingOTP(false);
    }
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
              {isOtpVerified ? "Reset Password" : "OTP Verification"}
            </h2>
            <p className="text-center text-gray-600 mt-2">
              {isOtpVerified
                ? "Please enter your new password"
                : `Please enter the OTP sent to ${emailOrMobile}`}
            </p>

            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            {successMessage && (
              <div className="text-green-500 text-center mb-4">
                {successMessage}
              </div>
            )}

            <form
              className="mt-6 space-y-4"
              onSubmit={isOtpVerified ? handleResetPassword : handleVerifyOtp}
            >
              {!isOtpVerified ? (
                <div>
                  <label htmlFor="otp">Enter OTP</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      required
                      className="input-field"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="newPassword">New Password</label>
                    <div className="mt-1">
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        required
                        className="input-field"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        minLength="6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="mt-1">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        className="input-field"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        minLength="6"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary mt-4"
                  disabled={isVerifyingOTP}
                >
                  {isVerifyingOTP
                    ? isOtpVerified
                      ? "Resetting..."
                      : "Verifying..."
                    : isOtpVerified
                    ? "Reset Password"
                    : "Verify OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
