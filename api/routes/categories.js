const express = require('express');
const router = express.Router();
const config = require('../config/config');
const categoriesService = require('../services/categories_service')(config);

module.exports = router.use('/categories/:id', async function (req, res, next) {
    try {
        const results = await categoriesService.getCategories(req.params.id);

        res.send(results);
    } catch (err) {
        next(err);
    }
});
