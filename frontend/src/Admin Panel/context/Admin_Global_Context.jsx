import { createContext, useContext, useState } from "react";

const AdminGlobalContext = createContext();

const AdminGlobalProvider = ({ children }) => {
  //
  const [isActive, setIsActive] = useState("All"); // Track Active Page
  const [activeTab, setActiveTab] = useState("All"); // Track active tab
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
    categories: false,
    products: false,
    website_Setup: false,
    all_Media_Image: false,
  });
  const [count, setCount] = useState(1);
  // Popup modals state
  const [isOpenPopupModal, setIsOpenPopupModal] = useState({
    addMainCategoryPopupModal: false,
    addSubCategoryPopupModal: false,
    editWalletAmount: false,
    exportDetails: false,
    addCustomItems: false,
    createTimeSlots: false,
    deactiveAccountHeaderMenu: false,
    addPagesAndaddCustomLink: false,
    createNewPage: false,
    startSelectFilesAndMedia: false,
    //upload image in all-media
    uploadFiles: false,
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
  });
  const [isChecked, setIsChecked] = useState({
    isContact: false,
    isOfferBanner: false,
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

  //Track Active TabName
  const handleActiveTabName = (tabName) => {
    setActiveTab(tabName);
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
  const toggleModal = (modalName) => {
    setIsOpenPopupModal((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName], // Toggle the specific modal's state
    }));
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
        activeTab,
        setActiveTab,
        handleActiveTabName,
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
      }}
    >
      {children}
    </AdminGlobalContext.Provider>
  );
};

export const useAdminGlobalContext = () => useContext(AdminGlobalContext);

export default AdminGlobalProvider;
