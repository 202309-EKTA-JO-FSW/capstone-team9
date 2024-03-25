const express = require("express");
const router = express.Router();
const Event = require('../controllers/Event');
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory as Buffer
const upload = multer({ storage: storage });

router.post('/addNewEvent', upload.single('Image'), Event.addNewEvent);
router.put("/:id", Event.updateEvent);
router.get("/getEventDetials/:id",Event.getEventDetials);
router.get('/getEvents', Event.getEvents);
router.get('/getPopularEvent', Event.getPopularEvent);
router.get('/getFeaturedEvent', Event.getFeaturedEvent);
router.get('/getSliderEvent', Event.getSliderEvent);
router.delete("/deleteaEvent/:id", Event.deleteaEvent);


module.exports = router;