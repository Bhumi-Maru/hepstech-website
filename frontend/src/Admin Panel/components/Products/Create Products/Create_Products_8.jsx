import React, { useState } from "react";

export default function Create_Products_8() {
  const [isSeoVisible, setIsSeoVisible] = useState(false);

  const toggleSeoTags = () => {
    setIsSeoVisible(!isSeoVisible);
  };
  return (
    <>
      {/* CREATE PRODUCTS SECTION 8 [SEO Tags] */}

      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-medium">SEO Tags</h3>
              <p className="max-w-md mt-1 mb-2 text-sm text-gray-600">
                Add a title and description to see how this product might appear
                in a search engine listing.
              </p>
            </div>

            <button
              type="button"
              className="my-2 btn btn-light sm:my-0"
              id="editSEO"
              onClick={toggleSeoTags}
            >
              {isSeoVisible ? "Hide SEO Settings" : "Edit Website SEO"}
            </button>
          </div>
        </div>
        {isSeoVisible && (
          <div
            className="px-4 pb-5 sm:px-5"
            id="seoTags"
            style={{ display: "block" }}
          >
            <p className="text-xs font-medium text-gray-600">
              Search Engine Listing Preview
            </p>
            <p className="mt-2 text-lg text-blue-600" id="seoTitleValue"></p>
            <div className="hidden" id="seoURLCombo">
              <div className="flex items-center">
                <p className="text-sm text-green-600 break-all">
                  https://myshopify.com/products/
                </p>
                <p
                  className="text-sm text-green-600 break-all"
                  id="seoURLValue"
                ></p>
              </div>
            </div>

            <p
              className="mt-0.5 text-sm text-gray-600"
              id="seoDescriptionValue"
            ></p>

            <hr className="my-6 border-gray-200" />

            <div className="mt-6 space-y-4">
              <div>
                <label for="seoTitle">Title</label>
                <div className="mt-1 form-input">
                  <input
                    type="text"
                    name="seoTitle"
                    id="seoTitle"
                    placeholder="Enter meta title"
                    className=""
                  />
                </div>
                <div></div>
                <p
                  className="mt-1 text-sm text-gray-600 me-character-counter me-character-counter_valid"
                  id="seoTitleCount"
                >
                  70 characters left
                </p>
              </div>

              <div>
                <label for="seoDescription">Description</label>
                <div className="mt-1 form-input">
                  <textarea
                    name="seoDescription"
                    id="seoDescription"
                    placeholder="Enter meta description"
                    rows="3"
                    className=""
                  ></textarea>
                </div>
                <div></div>
                <p
                  className="mt-1 text-sm text-gray-600 me-character-counter me-character-counter_valid"
                  id="seoDescriptionCount"
                >
                  320 characters left
                </p>
              </div>

              <div>
                <label for="seoURL">URL</label>
                <div className="relative flex items-center mt-1 overflow-x-auto border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary form-input">
                  <div className="flex items-center flex-none pl-3 pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">
                      https://myshopify.com/products/
                    </span>
                  </div>
                  <input
                    type="text"
                    name="seoURL"
                    id="seoURL"
                    className="!pl-0 border-none focus:ring-0"
                    placeholder=""
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
