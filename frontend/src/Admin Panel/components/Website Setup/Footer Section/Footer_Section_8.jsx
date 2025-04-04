import React from "react";
import { useFooterSection } from "../../../context/Footer_Section_Context";

export default function Footer_Section_8() {
  const { footerFormData, handleInputChange } = useFooterSection();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Copyright Text</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
          <div className="sm:col-span-2 xl:col-span-3">
            <div className="mt-1">
              <textarea
                name="CopyrightText"
                id="CopyrightText"
                placeholder="Enter copyright text"
                rows="2"
                className="resize-y w-full"
                value={footerFormData.CopyrightText || ""}
                onChange={(e) =>
                  handleInputChange("CopyrightText", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
