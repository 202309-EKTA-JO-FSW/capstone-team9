const express = require("express");
const router = express.Router();
const User = require('../controllers/User');
const isAdmin = require("../middleware/authmiddleware")
router.get("/all-user",User.getAllUser);
router.get("/:id",User.getuserDetials);
router.put("/edit-user", User.updatedUser);
router.delete("/:id", User.deleteaUser);



module.exports = router;
