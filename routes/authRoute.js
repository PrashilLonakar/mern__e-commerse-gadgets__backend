const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  getWishlist,
  deleteaUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  addToWishList,
  getWishlists,
  saveAddress,
} = require("../controllers/userCtrl");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/logout", logout);
router.get("/all", authMiddleware, getAllUser);
router.get("/wishlist", authMiddleware, getWishlists);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.put("/wishlist/add", authMiddleware, addToWishList);
router.get("/refresh", handleRefreshToken);
router.delete("/:id", deleteaUser);
router.put("/edit", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password", authMiddleware, forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/save-address", authMiddleware, saveAddress);

module.exports = router;
