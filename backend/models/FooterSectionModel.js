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
            url: { type: String, required: true }, // page id
            // type:{
            //     enum:[link , page]
            // }
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

const FooterSection = mongoose.model("FooterSection", footerSectionSchema);

module.exports = FooterSection;
