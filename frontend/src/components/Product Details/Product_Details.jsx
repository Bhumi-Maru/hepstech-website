import React, { useState } from "react";
import Product_details_section_1_1 from "./Product_details_section_1_1";
import Product_details_section_1_2 from "./Product_details_section_1_2";
import Product_details_section_1_3 from "./Product_details_section_1_3";
import Size_Chart_Modal from "./Size_Chart_Modal";

export default function Product_Details() {
  const [isSizeChartModalOpen, setIsSizeChartModalOpen] = useState(false);
  return (
    <>
      <div class="relative grid items-start grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-12 xl:gap-x-16">
        <Product_details_section_1_1 />
        <Product_details_section_1_2
          setIsSizeChartModalOpen={setIsSizeChartModalOpen}
        />
      </div>

      <Product_details_section_1_3 />

      {/* Size Chart Modal */}
      {isSizeChartModalOpen && (
        <>
          <Size_Chart_Modal
            setIsSizeChartModalOpen={setIsSizeChartModalOpen}
            isSizeChartModalOpen={isSizeChartModalOpen}
          />
        </>
      )}
    </>
  );
}
