import React, { useState } from "react";
import All_Products_1 from "./All_Products_1";
import All_Products_2 from "./All_Products_2";
import All_Products_3 from "./All_Products_3";
import All_Products_4 from "./All_Products_4";

export default function All_Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Animal Print Boys Track Suit",
      price: "1,000",
      inventory: 20,
      type: "Simple",
      status: "Active",
      image: "",
    },
    {
      id: 2,
      name: "Sassie Basic 31 LTR Navy Backpack Waterproof School Bag",
      price: "1,000",
      inventory: 20,
      type: "Simple",
      status: "Active",
      image:
        "	https://images.unsplash.com/photo-1472717400230-1c…8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      id: 3,
      name: "Analog Black Dial Men's Watch-32-BK-CK",
      price: "500",
      inventory: 0,
      type: "Variant",
      status: "Draft",
      image:
        "https://images.unsplash.com/photo-1613710774862-d8…8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
  ]);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {/* ALL PRODUCTS SECTION */}
      <div className="container">
        {/* ALL PRODUCT SECTION 1 [HEADING] */}
        <All_Products_1 />
        {/* ALL PRODUCTS SECTION 2 [ALL , ACTIVE , DRAFT] */}
        <All_Products_2 />
        {/* ALL PRODUCTS SECTION 3 [SEARCH , SORTING ON PRODUCTS] */}
        <All_Products_3 setSearchQuery={setSearchQuery} />
        {/* ALL PRODUCTS SECTION 4 [TABLE FOR PRODUCT] */}
        <All_Products_4 products={filteredProducts} />

        {/*  */}
        <hr className="mt-6 mb-5 border-gray-200" />

        <button type="button" className="btn btn-error">
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Bulk Delete
        </button>
      </div>
    </>
  );
}
