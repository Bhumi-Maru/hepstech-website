import React from "react";
import { useFooterSection } from "../../../context/Footer_Section_Context";

export default function Footer_Section_3() {
  const { footerFormData, handleInputChange } = useFooterSection();
  console.log("footer formdata", footerFormData);
  return (
    <>
      {/* FOOTER SECTION 3 [CONTACT DETAILS] */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Contact Details</h3>
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
            <div className="sm:col-span-2 xl:col-span-3">
              <label for="address"> Address </label>
              <div className="mt-1">
                <textarea
                  name="address"
                  id="address"
                  placeholder=""
                  rows="2"
                  className="resize-y"
                  value={footerFormData.contactDetails?.address || ""}
                  onChange={(e) =>
                    handleInputChange("contactDetails.address", e.target.value)
                  }
                ></textarea>
              </div>
            </div>

            <div>
              <label for="phoneNumber"> Phone Number </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder=""
                  className=""
                  value={footerFormData.contactDetails?.phoneNumber || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "contactDetails.phoneNumber",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div>
              <label for="Email_Address"> Email Address </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="Email_Address"
                  id="Email_Address"
                  placeholder=""
                  className=""
                  value={footerFormData.contactDetails?.Email_Address || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "contactDetails.Email_Address",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div>
              <label for="timings"> Timings </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="timings"
                  id="timings"
                  placeholder=""
                  className=""
                  value={footerFormData.contactDetails?.timings || ""}
                  onChange={(e) =>
                    handleInputChange("contactDetails.timings", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
