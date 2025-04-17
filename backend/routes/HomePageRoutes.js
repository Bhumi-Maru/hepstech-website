const express = require("express");
const {
  createHomePage,
  updateHomePageById,
  deleteHomePageById,
  getAllHomePages,
  getHomePageById,
  createLayout,
  getAllLayouts,
  deleteAll,
  deleteAllLayout,
  updateLayoutById,
  deleteLayoutById,
  updateLayoutByNumber,
  updateLayoutSectionTitle,
  getProductsByMainCategory,
  getLayoutByNumber,
  getHomePageDataByLayoutNumber,
} = require("../controllers/HomePageController");

const HomePageRouter = express.Router();
////////////////////////////////////////////// START LAYOUT ///////////////////////////////////////////////////
HomePageRouter.post("/layout/create", createLayout);
HomePageRouter.get("/layout", getAllLayouts);
HomePageRouter.get("/layout/by-number/:layoutNumber", getLayoutByNumber);
HomePageRouter.delete("/layout", deleteAllLayout);
HomePageRouter.put("/layout/:id", updateLayoutById);
HomePageRouter.delete("/layout/:id", deleteLayoutById);
HomePageRouter.put("/layout/number/:layoutNumber", updateLayoutByNumber);
HomePageRouter.put("/layout/title/:layoutNumber", updateLayoutSectionTitle);
HomePageRouter.get("/layout/:layoutNumber", getHomePageDataByLayoutNumber);

////////////////////////////////////////////// END LAYOUT ////////////////////////////////////////////////////

HomePageRouter.post("/", createHomePage);
HomePageRouter.get("/", getAllHomePages);
HomePageRouter.get("/:id", getHomePageById);
HomePageRouter.put("/:id", updateHomePageById);
HomePageRouter.delete("/:id", deleteHomePageById);
HomePageRouter.delete("/", deleteAll);

///////////////////////////START GET PRODUCT FROM MAIN CATEGORY///////////////////////////////////////

HomePageRouter.get(
  "/products/main-category/:mainCategoryId",
  getProductsByMainCategory
);

///////////////////////////END GET PRODUCT FROM MAIN CATEGORY///////////////////////////////////////

module.exports = HomePageRouter;
