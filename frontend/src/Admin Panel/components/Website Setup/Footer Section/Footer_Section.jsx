import React from "react";
import Footer_Section_1 from "./Footer_Section_1";
import Footer_Section_2 from "./Footer_Section_2";
import Footer_Section_3 from "./Footer_Section_3";
import Footer_Section_4 from "./Footer_Section_4";
import Footer_Section_5 from "./Footer_Section_5";
import Footer_Section_6 from "./Footer_Section_6";
import Footer_Section__7 from "./Footer_Section__7";
import { useFooterSection } from "../../../context/Footer_Section_Context";
import Footer_Section_8 from "./Footer_Section_8";

export default function Footer_Section() {
  const {
    handleFooterLogoChange,
    footerFormData,
    handleSubmitFooterData,
    handlePaymentImageChange,
  } = useFooterSection();
  return (
    <>
      {/* FOOTER SECTION PAGE */}

      <div class="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 class="heading-1">Footer Section</h1>

        <div class="mt-4 space-y-4">
          {/* <Footer_Section_1 /> */}
          {/* FOOTER SECTION 2 [LOGO] */}
          <Footer_Section_2
            footerLogo={footerFormData.footerLogo}
            onFooterLogoChange={handleFooterLogoChange}
          />
          <Footer_Section_3 />
          <Footer_Section_4 />
          <Footer_Section_5 />
          <div class="bg-white rounded-lg shadow">
            <Footer_Section_6 />
            <Footer_Section__7
              paymentImage={footerFormData.PaymentOptionsPhoto}
              onPaymentImageChange={handlePaymentImageChange}
            />
          </div>
          <Footer_Section_8 />
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />
        <div className="flex items-center justify-end space-x-4">
          <button type="button" className="btn btn-dark-light">
            Discard
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitFooterData}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
