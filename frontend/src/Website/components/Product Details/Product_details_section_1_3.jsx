import React, { useState } from "react";
import { useProductDetails } from "../../context/ProductDetails_Context";

export default function Product_details_section_1_3() {
  const { productDetails, imagesLoaded } = useProductDetails();
  const [isOpen, setIsOpen] = useState({
    Description: false,
    ReturnAndRefund: false,
  });

  // Toggle function for opening and closing sections
  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Toggle the specific section
    }));
  };

  return (
    <>
      {/* PRODUCT DETAILS SECTION 1 PART 3 */}
      <div className="mt-10 space-y-4">
        {/* Description Section */}
        <div className="overflow-hidden transition-all bg-white border border-gray-300 rounded-lg hover:bg-gray-50 duration-200">
          <button
            className="flex items-center justify-between w-full px-4 py-4 text-base font-semibold transition-all duration-200 hover:text-skin-primary focus:outline-none"
            type="button"
            onClick={() => toggleSection("Description")} // Toggle the Description section
          >
            Description
            <svg
              className="w-4 h-4 text-gray-500 transform"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* {isOpen.Description && (
            <div className="px-4 pt-1 pb-4">
              <p className="text-sm text-gray-600">
                Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt
                lacus tellus, sed aliquam est vehicula a. Pellentesque
                consectetur condimentum nulla, eleifend condimentum purus
                vehicula in.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                molestie metus turpis. Vivamus mollis diam quis erat tincidunt,
                vitae placerat nisl dictum. Nulla nec nisl eu elit eleifend
                eleifend eu eu est. Nulla ac ex sit amet nisl lacinia hendrerit.
                Vestibulum eu velit a justo facilisis lacinia. Suspendisse
                viverra vitae diam id tincidunt. Donec feugiat imperdiet augue
                sit amet pretium. Donec nulla nibh, egestas at magna in,
                vulputate cursus nulla. Vestibulum vel odio lorem. Morbi eu orci
                nisl. Nam aliquet, neque ut vulputate mollis, tortor odio
                consectetur velit, ut gravida justo nisl quis nisi. Curabitur
                euismod, enim ac pellentesque dapibus, magna dolor tincidunt
                tellus, non viverra erat lacus ut eros. Morbi in lacinia metus,
                et ultricies tortor. Proin sodales placerat sollicitudin. Donec
                fringilla, ante nec consectetur placerat, velit libero cursus
                risus, sit amet hendrerit velit enim non leo.
              </p>
            </div>
          )} */}

          {isOpen.Description && (
            <div className="px-4 pt-1 pb-4 space-y-4">
              {Array.isArray(
                productDetails?.description?.descriptionSections
              ) &&
              productDetails?.description?.descriptionSections.length > 0 ? (
                productDetails.description.descriptionSections.map(
                  (section) => (
                    <div key={section._id}>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">
                        {section.sectionTitle}
                      </h4>
                      <div
                        className="text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    </div>
                  )
                )
              ) : (
                <p className="text-sm text-gray-600">
                  No description available.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Return & Refund Section */}
        <div className="overflow-hidden transition-all bg-white border border-gray-300 rounded-lg hover:bg-gray-50 duration-200">
          <button
            className="flex items-center justify-between w-full px-4 py-4 text-base font-semibold transition-all duration-200 hover:text-skin-primary focus:outline-none"
            type="button"
            onClick={() => toggleSection("ReturnAndRefund")} // Toggle the Return & Refund section
          >
            Return & Refund
            <svg
              className="w-4 h-4 text-gray-500 transform"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {isOpen.ReturnAndRefund && (
            <div className="px-4 pt-1 pb-4">
              <p className="text-sm text-gray-600">
                Just a few seconds to measure your body temperature. Up to 5
                users! The battery lasts up to 2 years.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
