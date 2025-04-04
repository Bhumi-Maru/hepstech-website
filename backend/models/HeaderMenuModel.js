const mongoose = require("mongoose");

const headerMenuSchema = new mongoose.Schema(
  {
    main_categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MainCategory",
        required: false,
      },
    ],
    pages: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        type: {
          type: String,
          enum: ["page", "link"],
          required: true,
          default: "page",
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Validation middleware
headerMenuSchema.pre("save", function (next) {
  this.pages.forEach((page) => {
    if (page.type === "page") {
      if (!mongoose.Types.ObjectId.isValid(page.url)) {
        return next(new Error("Invalid Page ID format for page type"));
      }
    } else if (page.type === "link") {
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(page.url)) {
        return next(new Error("Invalid URL format for link type"));
      }
    }
  });
  next();
});

const HeaderMenu = mongoose.model("HeaderMenu", headerMenuSchema);
module.exports = HeaderMenu;
