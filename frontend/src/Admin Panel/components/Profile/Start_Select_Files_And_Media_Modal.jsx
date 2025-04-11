import React, { useEffect } from "react";
import Select_Files from "./Select_Files";
import Upload_New from "./Upload_New";
import { handleFileUpload } from "../../utils/fileUploadUtils";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../context/All_Media_Context";
import { useSubCategoryContext } from "../../context/SubCategory_Context";
import { useHeaderSection } from "../../context/Header_Section_Context";
import { useFooterSection } from "../../context/Footer_Section_Context";
import { useHomePageContext } from "../../context/HomepageContext";

export default function Start_Select_Files_And_Media_Modal({
  isBannerImageVisible,
}) {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const {
    selectedTab,
    setSelectedTab,
    setMediaItems,
    setPreviewUrl,
    selectedMainImage,
    setSelectedMainImage,
    setSelectedBannerImage,
    selectedBannerImage,
    selectedFile,
    setSelectedFile,
  } = useAllMediaContext();

  const { selectedSubImage, setSelectedSubImage } = useSubCategoryContext();
  const {
    selectedWebLogo,
    setSelectedWebLogo,
    selectedAdminLogo,
    setSelectedAdminLogo,
    selectedFaviconIcon,
    setSelectedFaviconIcon,
    selectedOfferImage,
    setSelectedOfferImage,
    selectedPaymentImage,
    setSelectedPaymentImage,
  } = useHeaderSection();

  const { selectedFooterLogo, setSelectedFooterLogo } = useFooterSection();
  const { selectedMainBanner1, setSelectedMainBanner1 } = useHomePageContext();

  useEffect(() => {
    // Reset the preview URL when the modal is opened
    if (isOpenPopupModal.startSelectFilesAndMedia) {
      setPreviewUrl(null); // Clear preview when modal is opened
    }
  }, [isOpenPopupModal.startSelectFilesAndMedia, setPreviewUrl]);

  // console.log("selected file", selectedFile);

  console.log("selected sub image", selectedSubImage);

  // const handleFileSelect = (file) => {
  //   if (isOpenPopupModal.isSelectingWebLogo) {
  //     setSelectedWebLogo(file._id);
  //     onLogoChange(file.fileUrl); // Update the logo in the form
  //     setPreviewUrl(file.fileUrl);
  //   }
  // };

  return (
    <>
      <div
        className={`modal ${
          isOpenPopupModal.startSelectFilesAndMedia ? "active" : ""
        }`}
        id="selectFilesModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered sm:max-w-6xl">
          <div className="modal-content" role="document">
            <div className="modal-header !pb-0">
              <ul
                className="flex items-center space-x-6 tabs"
                id="myTab"
                role="tablist"
              >
                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    id="home-tab"
                    className={`tab-link ${
                      selectedTab === "select" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("select")}
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Select Files
                  </button>
                </li>
                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    id="profile-tab"
                    className={`tab-link ${
                      selectedTab === "upload" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("upload")}
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Upload
                  </button>
                </li>
              </ul>
              <button
                type="button"
                className="!-mt-5 btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() =>
                  setIsOpenPopupModal((prev) => ({
                    ...prev,
                    startSelectFilesAndMedia: false,
                  }))
                }
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
            </div>
            <div className="modal-body">
              <div className="tab-content" id="myTabContent">
                {selectedTab === "select" ? <Select_Files /> : <Upload_New />}
              </div>
            </div>
            <div className="modal-footer" style={{ padding: "0rem" }}>
              <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4 items-center">
                <div className="flex items-center space-x-3">
                  <p className="mr-3 font-medium">
                    {/* {selectedFile ? `${selectedFile}` : "0 files selected"} */}
                  </p>
                  {/* <a
                    href="#"
                    className="text-sm font-semibold text-skin-primary hover:underline"
                  >
                    Clear Selection
                  </a> */}
                </div>
                <div className="flex items-center justify-end mt-2 space-x-4 mb-2">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                    aria-label="Close Modal"
                    onClick={() =>
                      setIsOpenPopupModal((prev) => ({
                        ...prev,
                        startSelectFilesAndMedia: false,
                      }))
                    }
                  >
                    Cancel
                  </button>
                  {selectedTab === "upload" ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        handleFileUpload(
                          selectedFile,
                          setMediaItems,
                          setIsOpenPopupModal,
                          setPreviewUrl,
                          setSelectedTab,
                          isOpenPopupModal,
                          setSelectedFile
                        )
                      }
                    >
                      Add Files
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if (selectedMainImage) {
                          setSelectedMainImage(selectedMainImage);
                        }
                        if (isBannerImageVisible && selectedBannerImage) {
                          setSelectedBannerImage(selectedBannerImage);
                        }
                        if (selectedSubImage) {
                          setSelectedSubImage(selectedSubImage);
                        }
                        if (
                          isOpenPopupModal.Header_Section_web_Logo &&
                          selectedWebLogo
                        ) {
                          setSelectedWebLogo(selectedWebLogo);
                        }
                        if (
                          isOpenPopupModal.Header_Section_Admin_Logo &&
                          selectedAdminLogo
                        ) {
                          setSelectedAdminLogo(selectedAdminLogo);
                        }
                        if (
                          isOpenPopupModal.Header_Section_Favicon_Icon &&
                          selectedFaviconIcon
                        ) {
                          setSelectedFaviconIcon(selectedFaviconIcon);
                        }
                        if (isOpenPopupModal.Header_Link_section_offer_image) {
                          setSelectedOfferImage(selectedOfferImage);
                        }
                        if (isOpenPopupModal.Footer_Section_footer_logo) {
                          setSelectedFooterLogo(selectedFooterLogo);
                          setIsOpenPopupModal(false);
                        }
                        if (
                          isOpenPopupModal.Footer_Section_payment_image &&
                          selectedPaymentImage
                        ) {
                          setSelectedPaymentImage(selectedPaymentImage);
                          setIsOpenPopupModal(false);
                        }
                        // Homepage section
                        if (selectedMainBanner1) {
                          setSelectedMainBanner1(selectedMainBanner1);
                        }

                        setIsOpenPopupModal((prev) => ({
                          ...prev,
                          startSelectFilesAndMedia: false,
                        }));
                      }}
                      // disabled={
                      //   !selectedBannerImage &&
                      //   !selectedMainImage &&
                      //   !selectedSubImage &&
                      //   !selectedWebLogo
                      // } // Check selectedSubImage properly
                    >
                      Select Files
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
