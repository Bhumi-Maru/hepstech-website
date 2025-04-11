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
} = require("../controllers/HomePageController");

const HomePageRouter = express.Router();
////////////////////////////////////////////// START LAYOUT ///////////////////////////////////////////////////
HomePageRouter.post("/layout/create", createLayout);
HomePageRouter.get("/layout", getAllLayouts);
HomePageRouter.delete("/layout", deleteAllLayout);
HomePageRouter.put("/layout/:id", updateLayoutById);
HomePageRouter.delete("/layout/:id", deleteLayoutById);

////////////////////////////////////////////// END LAYOUT ////////////////////////////////////////////////////

HomePageRouter.post("/", createHomePage);
HomePageRouter.get("/", getAllHomePages);
HomePageRouter.get("/:id", getHomePageById);
HomePageRouter.put("/:id", updateHomePageById);
HomePageRouter.delete("/:id", deleteHomePageById);
HomePageRouter.delete("/", deleteAll);

module.exports = HomePageRouter;
