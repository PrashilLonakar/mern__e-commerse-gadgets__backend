const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addInquiry,
  updateInquiry,
  getInquiry,
  getAllInquiry,
  deleteInquiry,
} = require("../controllers/inquiryCtrl");

const router = express.Router();

router.post("/add", authMiddleware, isAdmin, addInquiry);
router.put("/edit/:id", authMiddleware, isAdmin, updateInquiry);
router.get("/detail/:id", authMiddleware, isAdmin, getInquiry);
router.get("/all", authMiddleware, isAdmin, getAllInquiry);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteInquiry);

module.exports = router;
