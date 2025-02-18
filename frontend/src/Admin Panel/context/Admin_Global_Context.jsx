import { createContext, useContext, useState } from "react";

const AdminGlobalContext = createContext();

const AdminGlobalProvider = ({ children }) => {
  //
  const [isActive, setIsActive] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Popup modals state
  const [isOpenPopupModal, setIsOpenPopupModal] = useState({
    addMainCategoryPopupModal: false,
    addSubCategoryPopupModal: false,
  });

  const handleActive = (page) => {
    setIsActive(page);
  };

  // Function to toggle a specific modal
  const toggleModal = (modalName) => {
    setIsOpenPopupModal((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName], // Toggle the specific modal's state
    }));
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
      }}
    >
      {children}
    </AdminGlobalContext.Provider>
  );
};

export const useAdminGlobalContext = () => useContext(AdminGlobalContext);

export default AdminGlobalProvider;
