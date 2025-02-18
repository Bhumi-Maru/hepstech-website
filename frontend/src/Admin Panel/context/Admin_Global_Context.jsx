import { createContext, useContext, useState } from "react";

const AdminGlobalContext = createContext();

const AdminGlobalProvider = ({ children }) => {
  //
  const [isActive, setIsActive] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleActive = (page) => {
    setIsActive(page);
  };

  return (
    <AdminGlobalContext.Provider
      value={{ isActive, handleActive, isDropdownOpen, setIsDropdownOpen }}
    >
      {children}
    </AdminGlobalContext.Provider>
  );
};

export const useAdminGlobalContext = () => useContext(AdminGlobalContext);

export default AdminGlobalProvider;
