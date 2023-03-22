const express = require("express");
const {
  addCoupon,
  getAllCoupon,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addCoupon);
router.put("/edit/:id", authMiddleware, isAdmin, updateCoupon);
router.get("/detail/:id", authMiddleware, isAdmin, getCoupon);
router.get("/all", authMiddleware, isAdmin, getAllCoupon);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
