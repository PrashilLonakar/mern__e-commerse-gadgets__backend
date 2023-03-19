const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addCategory,
  updateCategory,
  getCategory,
  getAllCategory,
  deleteCategory,
} = require("../controllers/categoryCtrl");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addCategory);
router.put("/edit/:id", authMiddleware, isAdmin, updateCategory);
router.get("/detail/:id", authMiddleware, isAdmin, getCategory);
router.get("/all", authMiddleware, isAdmin, getAllCategory);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteCategory);

module.exports = router;
