const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addBrand,
  updateBrand,
  getBrand,
  getAllBrand,
  deleteBrand,
} = require("../controllers/BrandCtrl");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addBrand);
router.put("/edit/:id", authMiddleware, isAdmin, updateBrand);
router.get("/detail/:id", authMiddleware, isAdmin, getBrand);
router.get("/all", authMiddleware, isAdmin, getAllBrand);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;
