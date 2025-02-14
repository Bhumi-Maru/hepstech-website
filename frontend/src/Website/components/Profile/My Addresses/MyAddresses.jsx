import React, { useState } from "react";
import Profile_Sidebar from "../Profile_Sidebar";
import MyAddresses_1 from "./MyAddresses_1";
import AddNewAddressModal from "./AddNewAddressModal";

export default function MyAddresses() {
  const [isOpenAddressModal, setIsOpenAddressModal] = useState(false);
  return (
    <>
      <div class="relative grid items-start grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
        {/* PROFILE SIDEBAR */}
        <Profile_Sidebar />
        {/* MY ACCOUNT 1 */}
        <MyAddresses_1 setIsOpenAddressModal={setIsOpenAddressModal} />
        {/* Add New Addresses */}
        {isOpenAddressModal && (
          <AddNewAddressModal setIsOpenAddressModal={setIsOpenAddressModal} />
        )}
      </div>
    </>
  );
}
