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
} = require("../controllers/HomePageController");

const HomePageRouter = express.Router();
////////////////////////////////////////////// START LAYOUT ///////////////////////////////////////////////////
HomePageRouter.post("/layout/create", createLayout);
HomePageRouter.get("/layout", getAllLayouts);
HomePageRouter.delete("/layout", deleteAllLayout);

////////////////////////////////////////////// END LAYOUT ////////////////////////////////////////////////////

HomePageRouter.post("/", createHomePage);
HomePageRouter.get("/", getAllHomePages);
HomePageRouter.get("/:id", getHomePageById);
HomePageRouter.put("/:id", updateHomePageById);
HomePageRouter.delete("/:id", deleteHomePageById);
HomePageRouter.delete("/", deleteAll);

module.exports = HomePageRouter;
