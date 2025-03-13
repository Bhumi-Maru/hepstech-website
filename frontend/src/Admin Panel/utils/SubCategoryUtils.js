import axios from "axios";

export const fetchMainTitleInSubAddModal = async (setMainCategoryTitle) => {
  try {
    const response = await axios.get("http://localhost:7000/api/main-category");

    const categoryTitleWithId = response.data.categories.map((category) => ({
      title: category.main_category_title,
      id: category._id, // This is the ObjectId from MongoDB
    }));

    setMainCategoryTitle(categoryTitleWithId);
    console.log("Main category title and IDs:", categoryTitleWithId);
  } catch (error) {
    console.log("Main category title fetching error:", error);
  }
};
