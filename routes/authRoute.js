const express = require("express");
const { createUser, loginUserCtrl } = require("../controllers/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);

module.exports = router;
