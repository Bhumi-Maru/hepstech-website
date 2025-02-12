import React from "react";
import Profile_Sidebar from "../Profile_Sidebar";
import WishList_2 from "./WishList_2";

export default function WishList() {
  return (
    <>
      <div class="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
        {/* WISHLIST 1 */}
        <Profile_Sidebar />
        {/* WISHLIST 2 */}
        <WishList_2 />
      </div>
    </>
  );
}
