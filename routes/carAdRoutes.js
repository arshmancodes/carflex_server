const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');



router.post('/postAd', adController.postAd);
router.get('/getAll', adController.getAllAds);

module.exports = router;
