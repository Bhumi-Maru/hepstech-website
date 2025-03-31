import { createContext, useContext, useState } from "react";

const AdminGlobalContext = createContext();

const AdminGlobalProvider = ({ children }) => {
  //
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isActive, setIsActive] = useState("All"); // Track Active Page
  const [toggleStates, setToggleStates] = useState({
    estimatedShippingTime: false,
    sizeChartStatus: false,
    pricingDetails: false,
    purchaseSelectedLocation: false,
    RazorPay: false,
    PayTM: false,
    Instamojo: false,
    Stripe: false,
    PayPal: false,
    mainBannerSlider: false,
  }); // Toggle checkbox
  // State to manage the collapse/expand behavior of the section
  const [isSectionOpen, setIsSectionOpen] = useState({
    descriptions_SectionOne: false,
  });

  // passowrd visible or invisible
  const [passwordVisible, setPasswordVisible] = useState({
    loginPassword: false,
  });

  // Function to toggle dropdown dynamically
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    // delete and download dropdown in all media page (images all media)
    deleteAndDownloadDropdown: false,
    categories: false,
    products: false,
    website_Setup: false,
  });
  const [count, setCount] = useState(1);
  // Popup modals state
  const [isOpenPopupModal, setIsOpenPopupModal] = useState({
    editMainCategoryPopupModal: false,
    addMainCategoryPopupModal: false,
    editSubCategoryPopupModal: false,
    addSubCategoryPopupModal: false,
    editWalletAmount: false,
    exportDetails: false,
    addCustomItems: false,
    createTimeSlots: false,
    deactiveAccountHeaderMenu: false,
    addPagesAndaddCustomLink: false,
    createNewPage: false,
    //open modal for upload image
    startSelectFilesAndMedia: false,
    //upload image in all-media
    uploadFiles: false,
    //upload folder in all-media
    uploadFolder: false,
    // HOME PAGE
    addMainBanner: false,
    categorySlider8Items: false,
    horizontal_Banner_Small_1_Item_section_3: false,
    flashSaleSlider: false,
    horizontal_Banners_3_Items: false,
    category_Slider_02: false,
    popular_Products_Slider_01: false,
    horizontal_Banners_Large_2_Items: false,
    Popular_Products_Slider_02: false,
    Horizontal_Banners_2_Items: false,
    best_Selling_Products_Slider_01: false,
    vertical_Banners_4_Items: false,
    horizontal_Banners_Large_1_Item_Section_13: false,
    best_Selling_Products_Slider_02_Section_14: false,
    horizontal_Banners_Small_1_Item_Section_15: false,
    vertical_Banners_4_Items_Section_16: false,
    best_Selling_Products_Slider_03_Section_17: false,
    horizontal_Banners_Large_2_Items_Section_18: false,
    best_Selling_Products_Slider_04_Section_20: false,
    vertical_Banners_4_Items_Section_21: false,
    horizontal_Banners_Small_1_Items_Section_22: false,
    testimonials_Reviews_Slider_Section_23: false,
    small_Screen_Sidebar: false,

    //  header section
    Header_Section_web_Logo: false,
    Header_Section_Admin_Logo: false,
    Header_Section_Favicon_Icon: false,
  });
  const [isChecked, setIsChecked] = useState({
    isContact: false,
    isOfferBanner: false,
    Enable_Color_Option: false,
  });

  // Function to toggle dropdown dynamically
  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown], // Toggle the specific dropdown
    }));
  };

  //Track Active Page
  const handleActive = (page) => {
    setIsActive(page);
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //// Toggle the specific checkbox state
  const handleToggle = (key) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific checkbox state
    }));
  };

  // Toggle function to change the state for a specific section
  const handleToggleSection = (sectionId) => {
    setIsSectionOpen((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId], // Toggle the specific section based on sectionId
    }));
  };
  // Handle checkbox change for specific checkbox
  const handleCheckboxChange = (checkboxName) => {
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [checkboxName]: !prevChecked[checkboxName], // Toggle the specific checkbox by name
    }));
  };

  // Function to toggle a specific modal
  const toggleModal = (modalName, categoryId = null) => {
    setIsOpenPopupModal((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    }
  };

  // Increment function
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent negative values
  };

  return (
    <AdminGlobalContext.Provider
      value={{
        handleToggle,
        toggleStates,
        isActive,
        handleActive,
        toggleDropdown,
        isDropdownOpen,
        setIsDropdownOpen,
        isOpenPopupModal,
        setIsOpenPopupModal,
        toggleModal,
        isSectionOpen,
        setIsSectionOpen,
        handleToggleSection,
        count,
        increment,
        decrement,
        isChecked,
        setIsChecked,
        handleCheckboxChange,
        passwordVisible,
        togglePasswordVisibility,
        selectedCategoryId,
      }}
    >
      {children}
    </AdminGlobalContext.Provider>
  );
};

export const useAdminGlobalContext = () => useContext(AdminGlobalContext);

export default AdminGlobalProvider;
