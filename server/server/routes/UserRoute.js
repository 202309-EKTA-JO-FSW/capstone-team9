const express = require("express");
const router = express.Router();
const User = require('../controllers/user');
const verifyToken = require('../middlewares/verification');

const isAdmin = require("../middleware/authmiddleware")
router.get("/all-user",User.getAllUser);
router.get("/:id",User.getuserDetials);
router.put("/edit-user", User.updatedUser);
router.delete("/:id", User.deleteaUser);
router.post("/signup", User.signUp);
router.post("/signin", User.signIn);
router.post("/signout", verifyToken, User.signOut);

module.exports = router;
