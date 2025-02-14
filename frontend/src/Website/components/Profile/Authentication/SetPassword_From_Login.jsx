import React, { useState } from "react";

export default function setPassword_From_Login({ setIsSetPassword }) {
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
            onClick={() => setIsSetPassword(false)}
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
              Change Password
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Please enter your old password and set a new password.
            </p>

            <form className="mt-6 space-y-4">
              {/* Old Password */}
              <div>
                <label htmlFor="oldPassword">Enter Old Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    value=""
                    // required
                    className="input-field"
                    placeholder="Enter old password"
                  />
                </div>
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword">Enter New Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value=""
                    // onChange={(e) => setNewPassword(e.target.value)}
                    // required
                    className="input-field"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value=""
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    // required
                    className="input-field"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="w-full btn btn-primary mt-4">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
