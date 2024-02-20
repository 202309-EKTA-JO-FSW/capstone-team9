const express = require("express");
const router = express.Router();
const User = require('../controllers/user');
const verifyToken = require('../middlewares/verification');

router.get("/:id", verifyToken,User.getuserDetials);
router.post("/signup", User.signUp);
router.post("/signin", User.signIn);
router.post("/signout", verifyToken, User.signOut);


module.exports = router;