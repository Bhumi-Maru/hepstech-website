import React from "react";

export default function Header_Section_Link_Options({
  offersEnabled,
  wishlistEnabled,
  contactEnabled,
  onOffersChange,
  onWishlistChange,
  onContactChange,
  contact,
  onContactInfoChange,
}) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Link Options</h3>
      </div>

      <div className="px-4 pb-5 sm:px-5">
        <div className="flow-root mt-2">
          <ul className="-my-4 divide-y divide-gray-200">
            {/* Offers */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="offersLink" className="text-sm font-medium">
                Offers
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="offersLink"
                  checked={offersEnabled}
                  onChange={(e) => onOffersChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="offersLink"></label>
              </div>
            </li>

            {/* Wishlist */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="wishlistLink" className="text-sm font-medium">
                Wishlist
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="wishlistLink"
                  checked={wishlistEnabled}
                  onChange={(e) => onWishlistChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="wishlistLink"></label>
              </div>
            </li>

            {/* Contact */}
            <li className="flex items-center justify-between py-4">
              <label htmlFor="contactLink" className="text-sm font-medium">
                Contact
              </label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="contactLink"
                  checked={contactEnabled}
                  onChange={(e) => onContactChange(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <label htmlFor="contactLink"></label>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Section - Conditionally Rendered */}
        {contactEnabled && (
          <div className="mt-4" id="contactLinkContent">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={(e) =>
                      onContactInfoChange("phoneNumber", e.target.value)
                    }
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="text-sm font-medium">
                  WhatsApp Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="whatsappNumber"
                    value={contact.whatsappNumber}
                    onChange={(e) =>
                      onContactInfoChange("whatsappNumber", e.target.value)
                    }
                    placeholder="Enter WhatsApp number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="emailAddress"
                    value={contact.emailAddress}
                    onChange={(e) =>
                      onContactInfoChange("emailAddress", e.target.value)
                    }
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
