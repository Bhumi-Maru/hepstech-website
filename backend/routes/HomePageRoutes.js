const express = require("express");
const {
  createHomePage,
  updateHomePageById,
  deleteHomePageById,
  getAllHomePages,
  getHomePageById,
  createLayout,
} = require("../controllers/HomePageController");

const HomePageRouter = express.Router();

HomePageRouter.post("/", createHomePage);
HomePageRouter.get("/", getAllHomePages);
HomePageRouter.get("/:id", getHomePageById);
HomePageRouter.put("/:id", updateHomePageById);
HomePageRouter.delete("/:id", deleteHomePageById);
HomePageRouter.post("/layout/create", createLayout);

module.exports = HomePageRouter;
