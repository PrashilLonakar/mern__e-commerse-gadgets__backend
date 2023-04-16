const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
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
  getWishlist,
  saveAddress,
  addToCart,
  getCartList,
  emptyCart,
  applyCoupon,
  addOrder,
  getOrders,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/userCtrl");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/logout", logout);
router.get("/all", authMiddleware, getAllUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.get("/refresh", handleRefreshToken);
router.delete("/:id", deleteaUser);
router.put("/edit", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password", authMiddleware, forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.get("/order/all", authMiddleware, getOrders);
router.post("/order/add", authMiddleware, addOrder);
router.put("/order/update/:id", authMiddleware, isAdmin, updateOrderStatus);
router.delete("/order/cancel/:id", authMiddleware, cancelOrder);

router.get("/wishlist/all", authMiddleware, getWishlist);
router.put("/wishlist/add", authMiddleware, addToWishList);

router.get("/cart/all", authMiddleware, getCartList);
router.post("/cart/add", authMiddleware, addToCart);
router.delete("/cart/empty", authMiddleware, emptyCart);

router.put("/address/save", authMiddleware, saveAddress);

router.post("/coupon/apply", authMiddleware, applyCoupon);

module.exports = router;
