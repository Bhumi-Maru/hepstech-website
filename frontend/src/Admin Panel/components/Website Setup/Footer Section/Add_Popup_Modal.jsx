// Add_Popup_Modal.js
import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useFooterSection } from "../../../context/Footer_Section_Context";

export default function Add_Popup_Modal({ columnIndex }) {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const { addLinkToColumn, getLinkType } = useFooterSection();
  const [activeTab, setActiveTab] = useState("addPages");
  const [linkData, setLinkData] = useState({
    title: "",
    url: "",
    type: "",
  });

  const handleLinkChange = (field, value) => {
    const updatedLink = {
      ...linkData,
      [field]: value,
    };

    // Auto-detect link type when URL changes
    if (field === "url") {
      updatedLink.type = getLinkType(value);
    }

    setLinkData(updatedLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!linkData.title || !linkData.url) return;

    // Create a new link object to avoid potential reference issues
    const newLink = {
      title: linkData.title,
      url: linkData.url,
      type: linkData.type || getLinkType(linkData.url),
    };

    // Add the link to the specified column
    addLinkToColumn(columnIndex, newLink);

    // Reset form and close modal
    setLinkData({
      title: "",
      url: "",
      type: "",
    });
    setIsOpenPopupModal(false);
  };

  return (
    <div
      className="modal active"
      id="createLinkModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-overlay" tabIndex="-1"></div>
      <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
        <div className="modal-content" role="document">
          <div className="modal-header !pb-0">
            <ul className="flex items-center space-x-6 tabs" role="tablist">
              <li className="tab-item" role="presentation">
                <button
                  type="button"
                  className={`tab-link ${
                    activeTab === "addPages" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("addPages")}
                >
                  Add Pages
                </button>
              </li>
              <li className="tab-item" role="presentation">
                <button
                  type="button"
                  className={`tab-link ${
                    activeTab === "addCustomLink" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("addCustomLink")}
                >
                  Add Custom Link
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="!-mt-5 btn-close"
              aria-label="Close"
              onClick={() => setIsOpenPopupModal(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="tab-content">
              {activeTab === "addPages" && (
                <div className="tab-pane !py-0 show" role="tabpanel">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="pageTitle">Page Title</label>
                        <input
                          type="text"
                          id="pageTitle"
                          value={linkData.title}
                          onChange={(e) =>
                            handleLinkChange("title", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="pageId">Page ID</label>
                        <input
                          type="text"
                          id="pageId"
                          value={linkData.url}
                          onChange={(e) =>
                            handleLinkChange("url", e.target.value)
                          }
                          placeholder="Enter page ID"
                          required
                        />
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => setIsOpenPopupModal(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Add Page Link
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {activeTab === "addCustomLink" && (
                <div className="tab-pane !py-0 show" role="tabpanel">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="linkTitle">Link Title</label>
                        <input
                          type="text"
                          id="linkTitle"
                          value={linkData.title}
                          onChange={(e) =>
                            handleLinkChange("title", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="linkUrl">Link URL</label>
                        <input
                          type="url"
                          id="linkUrl"
                          value={linkData.url}
                          onChange={(e) =>
                            handleLinkChange("url", e.target.value)
                          }
                          placeholder="https://example.com"
                          required
                        />
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => setIsOpenPopupModal(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Add Custom Link
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
