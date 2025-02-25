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
  }); // Toggle checkbox
  // State to manage the collapse/expand behavior of the section
  const [isSectionOpen, setIsSectionOpen] = useState({
    descriptions_SectionOne: false,
  });

  // passowrd visible or invisible
  const [passwordVisible, setPasswordVisible] = useState({
    loginPassword: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  });
  const [isChecked, setIsChecked] = useState({
    isContact: false,
    isOfferBanner: false,
  });

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
