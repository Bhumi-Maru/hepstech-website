import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Products_6({
  setDescriptionSections,
  resetDescriptionSections,
}) {
  const { isSectionOpen, handleToggleSection } = useAdminGlobalContext();
  const [sections, setSections] = useState([
    { id: 1, title: "Untitled Section 01", description: "" },
  ]);
  const [editingTitleId, setEditingTitleId] = useState(null); // Track which title is being edited

  const handleAddSection = () => {
    const newId = sections.length + 1;
    setSections([
      ...sections,
      { id: newId, title: `Untitled Section 0${newId}`, description: "" },
    ]);
  };

  const handleSectionChange = (id, field, value) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
    setDescriptionSections(updatedSections);
  };

  const handleDeleteSection = (id) => {
    const filteredSections = sections.filter((section) => section.id !== id);
    setSections(filteredSections);
    setDescriptionSections(filteredSections);
  };

  // ✅ Reset function
  resetDescriptionSections(() => {
    setSections([{ id: 1, title: "Untitled Section 01", description: "" }]);
    setDescriptionSections([
      { id: 1, title: "Untitled Section 01", description: "" },
    ]);
  });

  return (
    <>
      {/* CREATE PRODUCTS SECTION 6 [Descriptions] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">Descriptions</h3>
            <button
              type="button"
              className="btn btn-light"
              onClick={handleAddSection}
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Section
            </button>
          </div>
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="flow-root mt-1">
            <ul className="-my-2 divide-y divide-gray-200 accordion">
              {sections.map((section) => (
                <li key={section.id} className="accordion-item">
                  <dt className="accordion-header">
                    <button
                      type="button"
                      className="accordion-button"
                      onClick={() =>
                        handleToggleSection(`descriptions_Section${section.id}`)
                      }
                    >
                      {/* Show Static Title (Separate from Input) */}
                      <span className="font-medium text-gray-900">
                        {`Untitled Section ${section.id}`}
                      </span>
                      <span className="flex items-center ml-6 accordion-control h-7">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 transform"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  {isSectionOpen[`descriptions_Section${section.id}`] && (
                    <dd id={`descriptions_Section${section.id}`}>
                      <div className="accordion-content">
                        <form>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor={`sectionTitle${section.id}`}>
                                Section Title
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name={`sectionTitle${section.id}`}
                                  id={`sectionTitle${section.id}`}
                                  placeholder="Enter description title"
                                  value={
                                    editingTitleId === section.id
                                      ? section.title
                                      : section.title
                                  }
                                  onChange={(e) =>
                                    handleSectionChange(
                                      section.id,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  onFocus={() => setEditingTitleId(section.id)}
                                  onBlur={() => setEditingTitleId(null)}
                                />
                              </div>
                            </div>

                            <div>
                              <label>Description</label>
                              <div className="mt-1">
                                <textarea
                                  className="w-full p-2 border rounded"
                                  placeholder="Write description"
                                  value={section.description}
                                  onChange={(e) =>
                                    handleSectionChange(
                                      section.id,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-end">
                              <button
                                type="button"
                                className="btn btn-error-light"
                                onClick={() => handleDeleteSection(section.id)}
                              >
                                <svg
                                  className="w-4 h-4 mr-2 -ml-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                                Delete
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </dd>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
