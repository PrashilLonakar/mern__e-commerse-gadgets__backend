const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, createProduct);
router.put("/edit/:id", authMiddleware, isAdmin, updateProduct);
router.get("/detail/:id", getaProduct);
router.get("/", getAllProduct);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/wishlist", authMiddleware, addToWishList);
router.put("/rating", authMiddleware, rating);

module.exports = router;
