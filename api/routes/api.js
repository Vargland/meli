const express = require('express');
const router = express.Router();
const categoriesRoute = require('./categories');
const itemRoute = require('./item');
const searchRoute = require('./search');

router.get('/categories/:id', categoriesRoute);
router.get('/items/:id', itemRoute);
router.get('/search', searchRoute);

module.exports = router;
