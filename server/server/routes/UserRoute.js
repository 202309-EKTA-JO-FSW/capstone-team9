const express = require("express");
const router = express.Router();
const User = require('../controllers/User');
const verifyToken = require('../middlewares/verification');
const isAdmin = require("../middlewares/authmiddleware")

router.get("/getAllUser",User.getAllUser);
<<<<<<< HEAD

router.get("/getuserDetials/:id",User.getuserDetials);
router.put("/updatedUser/:id", User.updatedUser);
=======
router.get("/getuserDetials/:id",verifyToken,User.getuserDetials);
router.put("/updatedUser", User.updatedUser);
>>>>>>> origin
router.delete("/deleteuser/:id", User.deleteaUser);
router.post("/signup", User.signUp);
router.post("/signin", User.signIn);
router.post("/signout", verifyToken, User.signOut);

module.exports = router;