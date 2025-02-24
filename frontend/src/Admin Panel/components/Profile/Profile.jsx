import React from "react";
import Profile_1 from "./Profile_1";
import Profile_2 from "./Profile_2";
import Profile_3 from "./Profile_3";

export default function Profile() {
  return (
    <>
      {/* PROFILE PAGE */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Profile</h1>

        <div className="mt-4 space-y-6">
          {/* Personal Information */}
          <Profile_1 />
          {/* Password */}
          <Profile_2 />
          {/* Appearance */}
          <Profile_3 />

          <div className="flex items-center justify-end space-x-4">
            <button type="button" className="btn btn-dark-light">
              Discard
            </button>

            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
