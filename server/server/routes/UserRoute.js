const express = require("express");
const router = express.Router();
const User = require('../controllers/User');
const verifyToken = require('../middlewares/verification');
const isAdmin = require("../middlewares/authmiddleware")

router.get("/getAllUser",User.getAllUser);

router.get("/getuserDetials/:id",User.getuserDetials);
router.put("/updatedUser/:id", User.updatedUser);
router.delete("/deleteuser/:id", User.deleteaUser);
router.post("/signup", User.signUp);
router.post("/signin", User.signIn);
router.post("/signout", verifyToken, User.signOut);

module.exports = router;