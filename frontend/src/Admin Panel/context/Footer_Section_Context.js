import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FooterSectionContext = createContext();

export const useFooterSection = () => {
  return useContext(FooterSectionContext);
};

export const FooterSectionProvider = ({ children }) => {
  const [footerData, setFooterData] = useState(null);
  const [selectedFooterLogo, setSelectedFooterLogo] = useState(null);
  const [selectedPaymentImage, setSelectedPaymentImage] = useState([]);
  const [footerFormData, setFooterFormData] = useState({
    footerLogo: "",
    contactDetails: {
      address: "",
      phoneNumber: "",
      Email_Address: "",
      timings: "",
    },
    columnsData: [
      {
        columnTitle: "First Column",
        links: [{ title: "", url: "" }], // No explicit type, it will be inferred
      },
      {
        columnTitle: "Second Column",
        links: [{ title: "", url: "" }],
      },
      {
        columnTitle: "Third Column",
        links: [{ title: "", url: "" }],
      },
    ],
    socialMediaLinks: {
      Facebook: "",
      Instagram: "",
      Pinterest: "",
      Twitter: "",
      LinkedIn: "",
    },
    PaymentOptionsPhoto: [],
    CopyrightText: "",
  });

  // Function to determine if a given URL is an ObjectId or a normal link
  const getLinkType = (url) => {
    if (!url) return null;

    // MongoDB ObjectId pattern (24 hex characters)
    const objectIdPattern = /^[a-f\d]{24}$/i;

    // General URL pattern (supports without "http://" or "https://")
    const urlPattern = /^(?:https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

    if (objectIdPattern.test(url)) {
      return "page"; // MongoDB ObjectId -> Page
    } else if (urlPattern.test(url)) {
      return "link"; // Valid URL
    }

    return null; // Invalid format
  };

  // Update form data dynamically
  const handleInputChange = (name, value) => {
    setFooterFormData((prev) => {
      let updatedFormData = { ...prev };

      if (name.includes(".")) {
        const [parent, child] = name.split(".");

        // Ensure columnsData is an array before modifying it
        if (parent === "columnsData") {
          updatedFormData.columnsData = Array.isArray(prev?.columnsData)
            ? [...prev.columnsData]
            : [];
          updatedFormData.columnsData[child] = {
            ...prev?.columnsData?.[child],
            columnTitle: value,
          };
        } else {
          updatedFormData[parent] = { ...prev[parent], [child]: value };
        }
      } else {
        updatedFormData[name] = value;
      }

      return updatedFormData;
    });
  };

  ///////////////////////////////start add popup modal//////////////////////////////////////
  // Add a new link to a specific column
  // In your FooterSectionProvider
  const addLinkToColumn = (columnIndex, newLink) => {
    setFooterFormData((prev) => {
      // Create a new array for columns
      const updatedColumns = Array.isArray(prev?.columnsData)
        ? [...prev.columnsData]
        : Array(3)
            .fill()
            .map((_, i) => ({
              columnTitle: `Column ${i + 1}`,
              links: [],
            }));

      // Ensure the column exists
      if (!updatedColumns[columnIndex]) {
        updatedColumns[columnIndex] = {
          columnTitle: `Column ${columnIndex + 1}`,
          links: [],
        };
      }

      // Create a new links array with the new link added
      const updatedLinks = [
        ...(updatedColumns[columnIndex].links || []),
        newLink,
      ];

      // Update the specific column
      updatedColumns[columnIndex] = {
        ...updatedColumns[columnIndex],
        links: updatedLinks,
      };

      return {
        ...prev,
        columnsData: updatedColumns,
      };
    });
  };

  // Update a specific link in a column
  const updateLinkInColumn = (columnIndex, linkIndex, updatedLink) => {
    setFooterFormData((prev) => {
      const updatedColumns = [...prev.columnsData];
      updatedColumns[columnIndex].links[linkIndex] = updatedLink;
      return { ...prev, columnsData: updatedColumns };
    });
  };

  // Remove a link from a column
  const removeLinkFromColumn = (columnIndex, linkIndex) => {
    setFooterFormData((prev) => {
      const updatedColumns = [...prev.columnsData];
      updatedColumns[columnIndex].links = updatedColumns[
        columnIndex
      ].links.filter((_, i) => i !== linkIndex);
      return { ...prev, columnsData: updatedColumns };
    });
  };

  ///////////////////////////////end add popup modal//////////////////////////////////////

  // Handle each image type separately
  const handleFooterLogoChange = (logo) => {
    setSelectedFooterLogo(logo);
    handleInputChange("footerLogo", logo);
  };

  // handle change payment image
  const handlePaymentImageChange = (image) => {
    setSelectedPaymentImage(image);
    handleInputChange("PaymentOptionsPhoto", image);
  };

  // Fetch footer data
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/footer-section/getAll"
        );
        console.log("Footer data:", response.data.data);
        setFooterData(response.data.data);

        // Update form data with fetched data
        if (response.data.data) {
          setFooterFormData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  //   CREATE FOOTER SECTION DATA
  // Update handleSubmitFooterData with safe property access
  // Update handleSubmitFooterData to send the actual form data
  const handleSubmitFooterData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7000/api/footer-section/create",
        footerFormData, // Send the actual form data
        {
          headers: {
            "Content-Type": "application/json", // Changed from multipart/form-data
          },
        }
      );
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <FooterSectionContext.Provider
      value={{
        footerData,
        footerFormData,
        setFooterFormData,
        selectedFooterLogo,
        setSelectedFooterLogo,
        getLinkType, // Expose this function to be used in UI

        // submit [create] footer form data
        handleSubmitFooterData,

        // handle footer logo change
        handleFooterLogoChange,
        //handle payment option change
        handlePaymentImageChange,
        // handle changed value
        handleInputChange,

        // add popup value
        addLinkToColumn,
        updateLinkInColumn,
        removeLinkFromColumn,

        // payment footer images
        selectedPaymentImage,
        setSelectedPaymentImage,
      }}
    >
      {children}
    </FooterSectionContext.Provider>
  );
};
