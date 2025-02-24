import { createContext, useContext, useState } from "react";

const AdminGlobalContext = createContext();

const AdminGlobalProvider = ({ children }) => {
  //
  const [isActive, setIsActive] = useState("");
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

  const handleActive = (page) => {
    setIsActive(page);
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
        isActive,
        handleActive,
        isDropdownOpen,
        setIsDropdownOpen,
        isOpenPopupModal,
        setIsOpenPopupModal,
        toggleModal,
        count,
        increment,
        decrement,
        isChecked,
        setIsChecked,
        handleCheckboxChange,
      }}
    >
      {children}
    </AdminGlobalContext.Provider>
  );
};

export const useAdminGlobalContext = () => useContext(AdminGlobalContext);

export default AdminGlobalProvider;
