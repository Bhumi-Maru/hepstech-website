import React from "react";
import { useHeaderSection } from "../../../context/Header_Section_Context";

export default function Header_Section_Offer_Banner() {
  const { formData, onEnabledChange, onTitleChange } = useHeaderSection();
  const { enabled, title } = formData.offerBanner;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Offer Banner</h3>
      </div>

      <div className="px-4 pb-5 sm:px-5">
        <div className="flex items-center justify-between mt-2">
          <label htmlFor="offerBanner"> Display Offer Banner </label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="offerBanner"
              name="offerBanner"
              role="checkbox"
              value=""
              tabIndex="0"
              checked={enabled}
              onChange={(e) => onEnabledChange(e.target.checked)}
            />
            <label htmlFor="offerBanner"></label>
          </div>
        </div>

        {enabled && (
          <div className="mt-4" id="offerBannerContent">
            <div>
              <label htmlFor="offerTitle">Enter Offer Title</label>
              <div className="mt-1">
                <input
                  type="text"
                  id="offerTitle"
                  value={title}
                  onChange={(e) => onTitleChange(e.target.value)}
                  placeholder="Enter offer title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
