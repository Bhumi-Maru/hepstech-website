import React from "react";

export default function Footer() {
  return (
    <>
      {/* START FOOTER */}
      <footer className="relative pb-5 mt-auto">
        <div className="container">
          <p className="pt-5 text-sm text-center text-gray-500 border-t border-gray-200">
            Copyright © <span id="currentYear"></span>
            <span className="font-semibold">Hepstech</span> All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* END FOOTER */}
    </>
  );
}
