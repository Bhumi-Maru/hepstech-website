const mongoose = require("mongoose");

const footerSectionSchema = new mongoose.Schema({
  footerLogo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
    required: false,
  },
  contactDetails: {
    address: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    Email_Address: { type: String, required: false },
    timings: { type: String, required: false },
  },
  columnsData: {
    type: [
      {
        columnTitle: { type: String, required: true },
        links: [
          {
            title: { type: String, required: true },
            url: { type: String, required: true },
            type: {
              type: String,
              enum: ["link", "page"],
              required: true,
            },
          },
        ],
      },
    ],
    validate: [
      (val) => val.length === 3,
      "Exactly three columns are required.",
    ],
    default: [
      { columnTitle: "First Column", links: [] },
      { columnTitle: "Second Column", links: [] },
      { columnTitle: "Third Column", links: [] },
    ],
  },
  socialMediaLinks: {
    Facebook: { type: String, required: false },
    Instagram: { type: String, required: false },
    Pinterest: { type: String, required: false },
    Twitter: { type: String, required: false },
    LinkedIn: { type: String, required: false },
  },
  PaymentOptionsPhoto: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: false,
    },
  ],
});

// Middleware to ensure correct URL format
footerSectionSchema.pre("save", async function (next) {
  this.columnsData.forEach((column) => {
    column.links.forEach((link) => {
      if (link.type === "page") {
        if (!mongoose.Types.ObjectId.isValid(link.url)) {
          return next(new Error("Invalid Page ID provided in links."));
        }
      } else if (link.type === "link") {
        const urlPattern =
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (!urlPattern.test(link.url)) {
          return next(new Error("Invalid URL format in links."));
        }
      }
    });
  });
  next();
});

const FooterSection = mongoose.model("FooterSection", footerSectionSchema);

module.exports = FooterSection;
