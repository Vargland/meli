const express = require('express');
const router = express.Router();
const itemRoute = require('./item');
const searchRoute = require('./search');

router.get('/search', searchRoute);
router.get('/items/:id', itemRoute);

module.exports = router;
