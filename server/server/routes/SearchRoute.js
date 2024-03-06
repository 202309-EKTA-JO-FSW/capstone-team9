const express = require("express")
const router = express.Router();
const search =  require('../controllers/Seacrh')
 
router.get('/searchEvent', search.searchEventsByLocationAndDateAndAttendees);

module.exports = router;