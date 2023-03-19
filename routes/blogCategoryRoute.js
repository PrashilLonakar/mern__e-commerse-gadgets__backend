const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addBlogCategory,
  updateBlogCategory,
  getBlogCategory,
  getAllBlogCategory,
  deleteBlogCategory,
} = require("../controllers/blogCategoryCtrl");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addBlogCategory);
router.put("/edit/:id", authMiddleware, isAdmin, updateBlogCategory);
router.get("/detail/:id", authMiddleware, isAdmin, getBlogCategory);
router.get("/all", authMiddleware, isAdmin, getAllBlogCategory);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlogCategory);

module.exports = router;
