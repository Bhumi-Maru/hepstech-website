import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export default function Pages_4() {
  return (
    <>
      {/* PAGES SECTION 3 [Terms & Conditions] */}
      <div className="hidden px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Terms &amp; Conditions
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Shopify and your customers will use this information to contact
              you.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div>
                <label for="" className="sr-only">
                  Terms &amp; Conditions Content
                </label>
                <div>
                  <ReactQuill
                    theme="snow"
                    // placeholder="Write your privacy policy here..."
                    className="bg-white rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
