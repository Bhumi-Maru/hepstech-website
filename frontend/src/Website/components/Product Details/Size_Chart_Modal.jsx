import React from "react";

export default function Size_Chart_Modal({
  isSizeChartModalOpen,
  setIsSizeChartModalOpen,
}) {
  return (
    <>
      {/* SIZE CHART  */}
      <div
        className={`modal ${isSizeChartModalOpen ? "active" : "hidden"}`}
        id="sizeChartModal"
        role="dialog"
        aria-hidden={!isSizeChartModalOpen}
        tabindex="-1"
      >
        <div
          className="modal-overlay"
          tabindex="-1"
          onClick={() => setIsSizeChartModalOpen(false)}
        ></div>
        <div className="modal-dialog sm:max-w-xl">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">Size Chart</h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsSizeChartModalOpen(false)}
              >
                <span className="sr-only"> Close </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <img
                className="w-full h-full"
                src="../website assets/images/size-chart.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
