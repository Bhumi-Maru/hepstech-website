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

/// Validation middleware
headerMenuSchema.pre("save", function (next) {
  try {
    this.pages.forEach((page) => {
      if (page.type === "page") {
        if (!mongoose.Types.ObjectId.isValid(page.url)) {
          throw new Error("Invalid Page ID format for page type");
        }
      } else if (page.type === "link") {
        try {
          new URL(page.url); // Validate link using Node.js URL class
        } catch (err) {
          throw new Error("Invalid URL format for link type");
        }
      }
    });
    next();
  } catch (err) {
    next(err);
  }
});

const HeaderMenu = mongoose.model("HeaderMenu", headerMenuSchema);
module.exports = HeaderMenu;
