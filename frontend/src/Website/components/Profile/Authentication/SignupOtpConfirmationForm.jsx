import React, { useState } from "react";
import axios from "axios";
import { useAuthentication } from "../../../context/AuthenticationContext";

export default function SignupOtpConfirmationForm({
  isOtpModalOpen,
  closeOtpModal,
  setOtpModalOpen,
}) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { handleSubmitRegister, formData } = useAuthentication();

  if (!isOtpModalOpen) return null;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsVerifying(true);

    try {
      const verifyResponse = await axios.post(
        "http://localhost:7000/api/auth/verify-otp",
        {
          emailOrMobile: formData.email || formData.mobileNumber,
          otp: otp,
        }
      );

      if (verifyResponse.data.message === "OTP verified successfully") {
        // OTP verified, now just close the modal
        setOtpModalOpen(false);
        closeOtpModal();
        // Optional: show success notification or navigate to login
        alert("Registration successful! You can now log in.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
      console.error("OTP verification error:", err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div
      className={`modal ${isOtpModalOpen ? "active" : ""}`}
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
            onClick={closeOtpModal}
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
              Please enter the OTP sent to your{" "}
              {formData.email ? "email" : "mobile number"}.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleVerifyOtp}>
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
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary mt-4"
                  disabled={isVerifying}
                >
                  {isVerifying ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
