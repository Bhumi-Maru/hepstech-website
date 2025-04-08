const mongoose = require("mongoose");

const layoutOfHomePageSchema = new mongoose.Schema(
  {
    layoutName: { type: String, required: false },
    layoutTitle: { type: String, required: false },
    layoutNumber: {
      type: Number,
      required: true,
      min: 1,
      max: 24,
      unique: true,
      //   match: /^Layout\s([1-9]|1[0-9]|2[0-4])$/, // Matches 'Layout 1' to 'Layout 24'
    },
    layoutStatus: {
      type: String,
      enum: ["active", "deactive"],
      required: false,
    },
  },
  { timestamps: true }
);

const Layout = mongoose.model("Layout", layoutOfHomePageSchema);

module.exports = Layout;
