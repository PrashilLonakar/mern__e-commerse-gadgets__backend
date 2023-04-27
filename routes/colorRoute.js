const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addColor,
  updateColor,
  getColor,
  getAllColor,
  deleteColor,
} = require("../controllers/colorCtrl");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addColor);
router.put("/edit/:id", authMiddleware, isAdmin, updateColor);
router.get("/detail/:id", authMiddleware, isAdmin, getColor);
router.get("/all", authMiddleware, isAdmin, getAllColor);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteColor);

module.exports = router;
