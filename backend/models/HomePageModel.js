const mongoose = require("mongoose");

const homePageSchema = new mongoose.Schema({
  home_page_layout_number: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Layout",
    required: false,
  },
  home_page_image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
    required: false,
  },
  home_page_main_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MainCategory",
    required: false,
  },
  home_page_sub_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: false,
  },
  home_page_products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: false,
  },
  home_page_status: {
    type: String,
    enum: ["published", "unpublished"],
    required: false,
  },
  home_page_section_title: {
    type: String,
    required: false,
  },
  home_page_layout_type: {
    type: Number,
    enum: [4, 5, 6],
    required: false,
  },
  home_page_flash_sale: {
    type: String,
    required: false,
  },
  home_page_testimonial: {
    type: String,
    required: false,
  },
});

const HomePage = mongoose.model("HomePage", homePageSchema);

module.exports = HomePage;
