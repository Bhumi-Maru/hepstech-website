import React from "react";
import Customer_Reviews_1 from "./Customer_Reviews_1";
import Customer_Reviews_2 from "./Customer_Reviews_2";
import Customer_Reviews_3 from "./Customer_Reviews_3";
import Customer_Reviews_4 from "./Customer_Reviews_4";

export default function Customer_Reviews() {
  return (
    <>
      <div className="relative grid items-start grid-cols-1 lg:grid-cols-5 lg:gap-x-12 xl:gap-x-16 gap-y-12">
        <Customer_Reviews_1 />
        <Customer_Reviews_2 />
      </div>
      <hr className="my-10 border-gray-200" />
      <Customer_Reviews_3 />
      <Customer_Reviews_4 />
    </>
  );
}
