const mongoose = require("mongoose");

const headerSectionSchema = new mongoose.Schema(
  {
    headerLogo: {
      type: String, // Stores the filename or URL path
      required: false,
    },
    adminLogo: {
      type: String, // Stores the filename or URL path
      required: false,
    },
    faviconIcon: {
      type: String, // Stores the filename or URL path
      required: false,
    },
    headerType: {
      type: String,
      enum: ["Sticky", "Non-sticky", "Smart Sticky"],
      default: "Sticky",
    },
    offersEnabled: {
      type: Boolean,
      default: false,
    },
    wishlistEnabled: {
      type: Boolean,
      default: false,
    },
    contact: {
      enabled: {
        type: Boolean,
        default: false,
      },
      phoneNumber: {
        type: String, // Changed from Number to String (better for phone numbers)
        required: false,
      },
      whatsappNumber: {
        type: String, // Changed from Number to String
        required: false,
      },
      emailAddress: {
        type: String,
        required: false,
        validate: {
          validator: function (v) {
            return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            // Allows empty values or valid emails
          },
          message: (props) => `${props.value} is not a valid email address!`,
        },
      },
    },

    offerBanner: {
      enabled: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        required: false,
      },
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const HeaderSectionModel = mongoose.model("HeaderSection", headerSectionSchema);

module.exports = HeaderSectionModel;
