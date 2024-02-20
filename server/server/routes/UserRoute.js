const express = require("express");
const router = express.Router();
const User = require('../controllers/user');
const isAdmin = require("../middleware/authmiddleware")
router.get("/all-user",User.getAllUser);
router.get("/:id",User.getuserDetials);
router.put("/:id",isAdmin, User.updatedUser);
router.delete("/:id",isAdmin,User.deleteaUser);



module.exports = router;