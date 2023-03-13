const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", createProduct);
router.put("/edit/:id", updateProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);

module.exports = router;
