const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getaUser,
  deleteaUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
} = require("../controllers/userCtrl");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/logout", logout);
router.get("/all", authMiddleware, getAllUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);
router.put("/password", authMiddleware, updatePassword);
router.get("/refresh", handleRefreshToken);

module.exports = router;
