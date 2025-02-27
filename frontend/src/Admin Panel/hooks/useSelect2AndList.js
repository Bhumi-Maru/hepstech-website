import { useEffect } from "react";
import $ from "jquery"; // Ensure jQuery is imported
import List from "list.js"; // Import List.js

const useSelect2AndList = () => {
  useEffect(() => {
    // Initialize Select2 for the Main Category dropdown
    $("#selectMainCategory_Flash_Sale_Slider").select2();

    // Initialize Select2 for the Sub Category dropdown
    $("#selectSubCategory_Flash_Sale_Slider").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE [SECTION 1]
    $("#selectProduct_Section_1").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 3]
    $("#selectProduct_Section_3").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 5]
    $("#selectProduct_Section_5").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 8]
    $("#selectProduct_Section_8").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 10]
    $("#selectProduct_Section_10").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 13]
    $("#selectProduct_Section_13").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 15]
    $("#selectProduct_Section_15").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 16]
    $("#selectProduct_Section_16").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 18]
    $("#selectProduct_Section_18").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 19]
    $("#selectProduct_Section_19").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 21]
    $("#selectProduct_Section_21").select2();

    // Initialize Select2 for the Product dropdown IN HOME PAGE[SECTION 22]
    $("#selectProduct_Section_22").select2();

    // Optional: Initialize List.js for subcategories, if needed
    const subCategoryListOptions = {
      valueNames: ["main-category", "sub-category"],
      page: 10,
      pagination: {
        outerWindow: 2,
        innerWindow: 1,
      },
    };

    // Assuming you want to apply List.js to an element with the ID 'subCategoriesView'
    const subCategoryList = new List(
      "subCategoriesView",
      subCategoryListOptions
    );

    // Clean up when the component is unmounted
    return () => {
      $("#selectMainCategory_Flash_Sale_Slider").select2("destroy");
      $("#selectSubCategory_Flash_Sale_Slider").select2("destroy");
      $("#selectProduct_Section_1").select2("destroy");
      $("#selectProduct_Section_3").select2("destroy");
      $("#selectProduct_Section_5").select2("destroy");
      $("#selectProduct_Section_8").select2("destroy");
      $("#selectProduct_Section_10").select2("destroy");
      $("#selectProduct_Section_13").select2("destroy");
      $("#selectProduct_Section_15").select2("destroy");
      $("#selectProduct_Section_16").select2("destroy");
      $("#selectProduct_Section_18").select2("destroy");
      $("#selectProduct_Section_19").select2("destroy");
      $("#selectProduct_Section_21").select2("destroy");
      $("#selectProduct_Section_22").select2("destroy");
    };
  }, []);
};

export default useSelect2AndList;
