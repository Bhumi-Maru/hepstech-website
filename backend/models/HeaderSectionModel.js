const mongoose = require("mongoose");

const headerSectionSchema = new mongoose.Schema(
  {
    headerLogo: {
      type: mongoose.Schema.Types.ObjectId, // Stores the filename or URL path
      ref: "File",
      required: false,
    },
    adminLogo: {
      type: mongoose.Schema.Types.ObjectId, // Stores the filename or URL path
      ref: "File",
      required: false,
    },
    faviconIcon: {
      type: mongoose.Schema.Types.ObjectId, // Stores the filename or URL path
      ref: "File",
      required: false,
    },
    headerType: {
      type: String,
      enum: ["sticky", "Non-sticky", "smart-sticky"],
      default: "sticky",
    },
    offersEnabled: {
      enabled: {
        type: Boolean,
        default: false,
      },
      offer_Image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
        required: false,
      },
      main_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MainCategory",
        required: false,
      },
      sub_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: false,
      },
      offerType: {
        type: String,
        enum: ["general", "every_time", "single_time", "home_page"],
        default: "",
      },
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
