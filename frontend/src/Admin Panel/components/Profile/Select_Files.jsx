import React, { useEffect } from "react";
import { useAllMediaContext } from "../../context/All_Media_Context";
import axios from "axios";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { useSubCategoryContext } from "../../context/SubCategory_Context";
import { useHeaderSection } from "../../context/Header_Section_Context";
import { useFooterSection } from "../../context/Footer_Section_Context";

export default function Select_Files() {
  const {
    setMediaItems,
    mediaItems,
    setPreviewUrl,
    setSelectedMainImage,
    setSelectedBannerImage,
    isBannerImageVisible,
  } = useAllMediaContext();
  const {
    setSelectedWebLogo,
    selectedWebLogo,
    setSelectedAdminLogo,
    selectedAdminLogo,
    selectedFaviconIcon,
    setSelectedFaviconIcon,
    setSelectedOfferImage,
    selectedOfferImage,
  } = useHeaderSection();

  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  const { setSelectedSubImage } = useSubCategoryContext();

  const { selectedFooterLogo, setSelectedFooterLogo } = useFooterSection();

  // Fetch media from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/files");
        const mediaData = response.data.files.map((item) => ({
          _id: item._id,
          name: item.filename,
          size: (item.fileSize / 1024 / 1024).toFixed(2) + " MB",
          mimeType: item.fileType || "unknown",
          fileUrl: `http://localhost:7000${item.filePath}`,
        }));
        setMediaItems(mediaData);
      } catch (error) {
        console.error("Failed to fetch media", error);
      }
    };
    fetchMedia();
  }, []);

  // Handle Main Image selection
  const handleMainImageSelect = (file) => {
    setSelectedMainImage(file._id);
    console.log("Main Image ID:", file._id);
    setPreviewUrl(file.fileUrl);
  };

  // Handle Banner Image selection
  const handleBannerImageSelect = (file) => {
    setSelectedBannerImage(file._id);
    console.log("Banner Image ID:", file._id);
    setPreviewUrl(file.fileUrl);
  };

  // Handle SubImage Selection
  const handleSubImageSelect = (file) => {
    setSelectedSubImage(file._id);
    console.log("Sub image id", file._id);
    setPreviewUrl(file.fileUrl);
  };

  // Add this function to handle web logo selection
  const handleWebLogoSelect = (file) => {
    if (isOpenPopupModal.Header_Section_web_Logo) {
      setSelectedWebLogo(file._id); // Only store _id
      console.log("Selected Web Logo ID:", file._id);
      setPreviewUrl(file.fileUrl); // Set preview
    }
  };

  // Add this function to handle admin logo selection
  const handleAdminLogoSelect = (file) => {
    if (isOpenPopupModal.Header_Section_Admin_Logo) {
      setSelectedAdminLogo(file._id); // Only store _id
      console.log("Selected Admin Logo ID:", file._id);
      setPreviewUrl(file.fileUrl); // Set preview
    }
  };

  const handleFaviconSelect = (file) => {
    if (isOpenPopupModal.Header_Section_Favicon_Icon) {
      setSelectedFaviconIcon(file._id);
      console.log("Selected  favicon ID:", file._id);
      setPreviewUrl(file.fileUrl); // Set preview
    }
  };

  const handleOfferImageSelect = (file) => {
    if (isOpenPopupModal.Header_Link_section_offer_image) {
      setSelectedOfferImage(file._id);
      console.log("Selected offer image ID:", file._id);
      setPreviewUrl(file.fileUrl); // Set preview
    }
  };

  //////////////////end header section///////////////////////////

  //////////////////start footer section //////////////////////////

  const handleFooterLogoSelect = (file) => {
    if (isOpenPopupModal.Footer_Section_footer_logo) {
      setSelectedFooterLogo(file._id);
      console.log("Selected footer section ID:", file._id);
      setPreviewUrl(file.fileUrl); // Set preview
    }
  };

  //////////////////end footer section////////////////////////////

  console.log("selecte web", selectedWebLogo);
  console.log("selected admin", selectedAdminLogo);
  console.log("selected favicon", selectedFaviconIcon);
  console.log("selected offer image", selectedOfferImage);
  console.log("selected footer logo", selectedFooterLogo);

  return (
    <>
      <div
        className="tab-pane show !py-0"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <ul
          role="list"
          className="flex flex-wrap gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10"
        >
          {mediaItems
            .filter((item) =>
              // Only show images when the addMainCategoryPopupModal is open
              isOpenPopupModal.addMainCategoryPopupModal ||
              isOpenPopupModal.editMainCategoryPopupModal ||
              isOpenPopupModal.addSubCategoryPopupModal ||
              isOpenPopupModal.editSubCategoryPopupModal ||
              isOpenPopupModal.Header_Section_web_Logo ||
              isOpenPopupModal.Header_Section_Admin_Logo ||
              isOpenPopupModal.Header_Section_Favicon_Icon ||
              isOpenPopupModal.Header_Link_section_offer_image ||
              isOpenPopupModal.Footer_Section_footer_logo
                ? item.mimeType &&
                  item.mimeType.startsWith("image/") &&
                  !item.mimeType.includes("gif")
                : true
            )
            .map((item, index) => (
              <li key={index} className="relative h-100 w-100">
                <div className="absolute z-5 left-2 top-1.5">
                  <input
                    type="checkbox"
                    name="selectedFiles"
                    id={`file-${index}`}
                    onChange={() => {
                      if (isBannerImageVisible) {
                        handleBannerImageSelect(item); // Select banner image if the banner is visible
                      } else if (
                        isOpenPopupModal.addMainCategoryPopupModal ||
                        isOpenPopupModal.editMainCategoryPopupModal
                      ) {
                        handleMainImageSelect(item); // Select main image for main category actions
                      } else if (
                        isOpenPopupModal.addSubCategoryPopupModal ||
                        isOpenPopupModal.editSubCategoryPopupModal
                      ) {
                        handleSubImageSelect(item); // Select sub image in other cases (e.g., when editing sub-category)
                      } else if (isOpenPopupModal.Header_Section_web_Logo) {
                        handleWebLogoSelect(item); // Select Web Logo
                      } else if (isOpenPopupModal.Header_Section_Admin_Logo) {
                        handleAdminLogoSelect(item);
                      } else if (isOpenPopupModal.Header_Section_Favicon_Icon) {
                        handleFaviconSelect(item);
                      } else if (
                        isOpenPopupModal.Header_Link_section_offer_image
                      ) {
                        handleOfferImageSelect(item);
                      } else if (isOpenPopupModal.Footer_Section_footer_logo) {
                        handleFooterLogoSelect(item);
                      }
                    }}
                  />
                </div>
                <div className="block w-full overflow-hidden bg-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-skin-primary">
                  {item.mimeType &&
                  item.mimeType.startsWith("image/") &&
                  !item.mimeType.includes("gif") ? (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPreviewUrl(item.fileUrl)}
                    >
                      <img
                        src={item.fileUrl}
                        alt={item.name}
                        className="object-contain"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </a>
                  ) : item.mimeType && item.mimeType.startsWith("video/") ? (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPreviewUrl(item.fileUrl)}
                    >
                      <video
                        controls
                        className="object-contain w-100 h-100"
                        style={{ height: "100px", width: "100px" }}
                      >
                        <source src={item.fileUrl} type={item.mimeType} />
                      </video>
                    </a>
                  ) : item.mimeType === "application/pdf" ? (
                    <embed
                      src={item.fileUrl}
                      type="application/pdf"
                      className="w-100 h-100 overflow-y-hidden no-scrollbar"
                      style={{ height: "100px", width: "100px" }}
                    />
                  ) : (
                    <p className="text-gray-500">
                      Unsupported file type: {item.mimeType}
                    </p>
                  )}
                </div>
                <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {item.name}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  {item.size}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
