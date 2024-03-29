const express = require("express");
const {
  addBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
} = require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addBlog);
router.put("/edit/:id", authMiddleware, isAdmin, updateBlog);
router.get("/detail/:id", authMiddleware, isAdmin, getBlog);
router.get("/all", authMiddleware, isAdmin, getAllBlog);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);

module.exports = router;
