const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  rating,
  uploadImages,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/add", authMiddleware, isAdmin, createProduct);
router.put("/edit/:id", authMiddleware, isAdmin, updateProduct);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.get("/detail/:id", getaProduct);
router.get("/", getAllProduct);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/rating", authMiddleware, rating);

module.exports = router;
