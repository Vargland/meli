const express = require('express');
const router = express.Router();
const itemRoute = require('./item');
const searchRoute = require('./search');

router.get('/items', itemRoute);
router.get('/search', searchRoute);

module.exports = router;
