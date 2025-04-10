import { useEffect } from "react";
import $ from "jquery";
import List from "list.js";

const useSelect2AndList = () => {
  useEffect(() => {
    // Array of all select2 IDs we want to initialize
    const select2Ids = [
      "selectMainCategory_Flash_Sale_Slider",
      "selectSubCategory_Flash_Sale_Slider",
      "selectProduct_Section_1",
      "selectProduct_Section_3",
      "selectProduct_Section_5",
      "selectProduct_Section_8",
      "selectProduct_Section_10",
      "selectProduct_Section_13",
      "selectProduct_Section_15",
      "selectProduct_Section_16",
      "selectProduct_Section_18",
      "selectProduct_Section_19",
      "selectProduct_Section_21",
      "selectProduct_Section_22",
    ];

    // Initialize Select2 for each ID if the element exists
    select2Ids.forEach((id) => {
      if ($(`#${id}`).length) {
        $(`#${id}`).select2();
      }
    });

    // Initialize List.js if needed
    let subCategoryList;
    if ($("#subCategoriesView").length) {
      const subCategoryListOptions = {
        valueNames: ["main-category", "sub-category"],
        page: 10,
        pagination: {
          outerWindow: 2,
          innerWindow: 1,
        },
      };
      subCategoryList = new List("subCategoriesView", subCategoryListOptions);
    }

    // Clean up when the component is unmounted
    return () => {
      select2Ids.forEach((id) => {
        const $el = $(`#${id}`);
        if ($el.length && $el.hasClass("select2-hidden-accessible")) {
          $el.select2("destroy");
        }
      });

      // Clean up List.js if it was initialized
      if (subCategoryList) {
        subCategoryList.destroy();
      }
    };
  }, []);
};

export default useSelect2AndList;
